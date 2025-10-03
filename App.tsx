import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { Header } from './components/Header';
import { SearchBar } from './components/SearchBar';
import { Dashboard } from './components/Dashboard';
import { PublicationDetailModal } from './components/PublicationDetailModal';
import { publications as fallbackPublications } from './data/mockData';
import { performSmartSearch } from './services/geminiService';
import type { Publication, AiSearchResult } from './types';
import { AiSummary } from './components/AiSummary';
import { LoadingSpinner } from './components/LoadingSpinner';
import { FilterControls, type Filters } from './components/FilterControls';
import { Pagination } from './components/Pagination';
import { ViewSwitcher } from './components/ViewSwitcher';
import { KnowledgeGraph } from './components/KnowledgeGraph';
import { GapAnalysis } from './components/GapAnalysis';
import { loadPublications } from './services/dataLoader';

const ITEMS_PER_PAGE = 6;

type View = 'dashboard' | 'graph' | 'gap';

const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedPublication, setSelectedPublication] = useState<Publication | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [aiResult, setAiResult] = useState<AiSearchResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState<Filters>({
    organism: [],
    environmentFactor: [],
    sortBy: 'newest',
  });
  const [view, setView] = useState<View>('dashboard');
  const [allPublications, setAllPublications] = useState<Publication[]>(fallbackPublications);
  const [isBootLoading, setIsBootLoading] = useState(true);

  useEffect(() => {
    let active = true;
    (async () => {
      try {
        const loaded = await loadPublications();
        if (active && Array.isArray(loaded) && loaded.length > 0) {
          setAllPublications(loaded);
        }
      } catch (e) {
        console.warn('Using fallback publications');
      } finally {
        if (active) setIsBootLoading(false);
      }
    })();
    return () => { active = false; };
  }, []);

  const handleSearch = useCallback(async (query: string, isSmartSearch: boolean) => {
    setSearchTerm(query);
    setAiResult(null);
    setError(null);
    setCurrentPage(1); // Reset to first page
    // Reset filters on new search for clarity
    setFilters({
      organism: [],
      environmentFactor: [],
      sortBy: 'newest',
    });

    if (isSmartSearch && query.trim()) {
      setIsLoading(true);
      try {
        const result = await performSmartSearch(query, allPublications);
        setAiResult(result);
      } catch (err) {
        console.error("Error during smart search:", err);
        setError("Failed to get AI-powered results. Please try a standard search.");
      } finally {
        setIsLoading(false);
      }
    }
  }, [allPublications]);
  
  const handleFilterChange = useCallback((newFilters: Partial<Filters>) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
    setCurrentPage(1); // Reset to first page
  }, []);

  const filterOptions = useMemo(() => {
    const organisms = new Set<string>();
    const environmentFactors = new Set<string>();
    allPublications.forEach(p => {
      p.keyConcepts.organisms.forEach(o => organisms.add(o));
      p.keyConcepts.environmentFactors.forEach(f => environmentFactors.add(f));
    });
    return {
      organisms: Array.from(organisms).sort(),
      environmentFactors: Array.from(environmentFactors).sort(),
    };
  }, [allPublications]);

  const filteredPublications = useMemo(() => {
    let intermediateResults: Publication[];

    const source = allPublications;

    // 1. Start with base list: AI results > Search results > All
    if (aiResult?.relevantPublicationIds && aiResult.relevantPublicationIds.length > 0) {
      const relevantIdsSet = new Set(aiResult.relevantPublicationIds);
      intermediateResults = source.filter(p => relevantIdsSet.has(p.id));
    } else if (searchTerm.trim()) {
      const lowercasedQuery = searchTerm.toLowerCase();
      intermediateResults = source.filter(p =>
        p.title.toLowerCase().includes(lowercasedQuery) ||
        p.summary.snapshot.toLowerCase().includes(lowercasedQuery) ||
        p.authors.some(a => a.toLowerCase().includes(lowercasedQuery)) ||
        p.keyConcepts.organisms.some(o => o.toLowerCase().includes(lowercasedQuery)) ||
        p.keyConcepts.environmentFactors.some(f => f.toLowerCase().includes(lowercasedQuery))
      );
    } else {
      intermediateResults = [...source];
    }
    
    // 2. Apply dropdown filters to the intermediate list
    let finalResults = intermediateResults;

    if (filters.organism.length > 0) {
      finalResults = finalResults.filter(p => 
        p.keyConcepts.organisms.some(org => filters.organism.includes(org))
      );
    }

    if (filters.environmentFactor.length > 0) {
        finalResults = finalResults.filter(p => 
            p.keyConcepts.environmentFactors.some(factor => filters.environmentFactor.includes(factor))
        );
    }

    // 3. Apply sorting as the last step
    return [...finalResults].sort((a, b) => {
      const dateA = new Date(a.publicationDate).getTime();
      const dateB = new Date(b.publicationDate).getTime();
      return filters.sortBy === 'newest' ? dateB - dateA : dateA - dateB;
    });

  }, [searchTerm, aiResult, filters, allPublications]);
  
  const paginatedPublications = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return filteredPublications.slice(startIndex, endIndex);
  }, [filteredPublications, currentPage]);

  const totalPages = useMemo(() => {
    return Math.ceil(filteredPublications.length / ITEMS_PER_PAGE);
  }, [filteredPublications]);

  if (isBootLoading) {
    return (
      <div className="min-h-screen bg-gray-900 text-gray-200 grid place-items-center">
        <div className="text-center">
          <LoadingSpinner />
          <p className="text-sm text-gray-400 mt-3">Loading publications...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 font-sans">
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(128,0,128,0.3)_0%,_rgba(0,0,0,0)_70%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.2)_0%,_rgba(0,0,0,0)_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(139,92,246,0.2)_0%,_rgba(0,0,0,0)_50%)]"></div>
      </div>
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Header />
        <main>
          <SearchBar onSearch={handleSearch} isLoading={isLoading} />
          <FilterControls
            options={filterOptions}
            filters={filters}
            onFilterChange={handleFilterChange}
          />
          <ViewSwitcher currentView={view} onViewChange={setView} />
          {error && <p className="text-center text-red-400 mt-4">{error}</p>}
          {isLoading && <div className="flex justify-center mt-8"><LoadingSpinner /></div>}
          {aiResult?.summary && (
            <AiSummary summary={aiResult.summary} />
          )}

          {!isLoading && filteredPublications.length > 0 && (
            <div className="mb-6 text-sm text-gray-400 text-center">
                Found <span className="font-semibold text-gray-200">{filteredPublications.length}</span> matching publications.
            </div>
          )}

          {!isLoading && filteredPublications.length > 0 ? (
            <>
              {view === 'dashboard' ? (
                <>
                  <Dashboard 
                    publications={paginatedPublications} 
                    onSelectPublication={setSelectedPublication} 
                  />
                  {totalPages > 1 && (
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={setCurrentPage}
                    />
                  )}
                </>
              ) : view === 'graph' ? (
                <KnowledgeGraph
                    publications={filteredPublications}
                    onSelectPublication={setSelectedPublication}
                />
              ) : (
                <GapAnalysis publications={filteredPublications} />
              )}
            </>
          ) : !isLoading && (
             <div className="text-center py-16">
                <h3 className="text-xl font-semibold text-gray-300">No Publications Found</h3>
                <p className="text-gray-500 mt-2">Try adjusting your search terms or filters.</p>
              </div>
          )}
        </main>
      </div>
      {selectedPublication && (
        <PublicationDetailModal
          publication={selectedPublication}
          onClose={() => setSelectedPublication(null)}
        />
      )}
    </div>
  );
};

export default App;