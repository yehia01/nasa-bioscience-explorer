
import React, { useEffect, useState } from 'react';
import type { Publication } from '../types';
import { CloseIcon } from './icons/CloseIcon';
import { BookOpenIcon } from './icons/BookOpenIcon';
import { BeakerIcon } from './icons/BeakerIcon';
import { ChartBarIcon } from './icons/ChartBarIcon';
import { FlagIcon } from './icons/FlagIcon';
import { DocumentTextIcon } from './icons/DocumentTextIcon';
import { DatabaseIcon } from './icons/DatabaseIcon';
import { getAbstractSummary } from '../services/geminiService';
import { LightBulbIcon } from './icons/LightBulbIcon';
import { SparklesIcon } from './icons/SparklesIcon';

interface PublicationDetailModalProps {
  publication: Publication;
  onClose: () => void;
}

const DetailSection: React.FC<{ title: string; children: React.ReactNode; icon?: React.ReactNode }> = ({ title, children, icon }) => (
  <div className="mb-6">
    <h4 className="flex items-center gap-2 text-lg font-bold text-purple-300 mb-2 border-b border-white/10 pb-1">
      {icon}
      <span>{title}</span>
    </h4>
    <div className="text-gray-300 text-sm space-y-2">{children}</div>
  </div>
);

const Pill: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className = 'bg-gray-700 text-gray-300' }) => (
    <span className={`inline-block text-xs font-medium px-2.5 py-1 rounded-full ${className}`}>
      {children}
    </span>
);

const KeyConceptGroup: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div>
    <h5 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">{title}</h5>
    <div className="flex flex-wrap gap-2">
      {children}
    </div>
  </div>
);


export const PublicationDetailModal: React.FC<PublicationDetailModalProps> = ({ publication, onClose }) => {
    const [isFetchingAbstract, setIsFetchingAbstract] = useState(false);
    const [aiAbstract, setAiAbstract] = useState<string | null>(null);
    const [fetchError, setFetchError] = useState<string | null>(null);

    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
           if (event.key === 'Escape') {
              onClose();
           }
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    const handleGetAbstract = async () => {
        setIsFetchingAbstract(true);
        setFetchError(null);
        try {
            const summary = await getAbstractSummary(publication.fullText.abstract);
            setAiAbstract(summary);
        } catch (error) {
            setFetchError('Could not generate AI summary. Please try again later.');
        } finally {
            setIsFetchingAbstract(false);
        }
    };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-70 backdrop-blur-sm" onClick={onClose}>
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] bg-gray-900/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl shadow-purple-500/20 overflow-hidden flex flex-col"
        onClick={e => e.stopPropagation()}
      >
        <header className="flex items-center justify-between p-6 border-b border-white/10 flex-shrink-0">
          <div className="flex-1 pr-8">
            <p className="text-sm text-purple-300 mb-2">{publication.journal}</p>
            <h2 className="text-2xl font-bold text-white">{publication.title}</h2>
            <p className="text-sm text-gray-400 mt-2">{publication.authors.join(', ')}</p>
          </div>
          <button onClick={onClose} className="p-2 rounded-full hover:bg-white/10 transition-colors">
            <CloseIcon className="w-6 h-6 text-gray-400" />
          </button>
        </header>

        <div className="p-6 overflow-y-auto">
          <DetailSection title="Publication Date">
            <p className="text-gray-200">
                {new Date(publication.publicationDate).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                })}
            </p>
          </DetailSection>

          <DetailSection title="Links">
            <div className="flex flex-wrap items-center gap-4 text-sm">
                <a 
                  href={publication.pdfUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center justify-center gap-2 text-gray-200 font-semibold bg-white/10 hover:bg-white/20 transition-colors px-4 py-2 rounded-lg"
                >
                    <DocumentTextIcon className="h-5 w-5" />
                    <span>Publication PDF</span>
                </a>
                {publication.osdrDataUrl && (
                <a 
                  href={publication.osdrDataUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center justify-center gap-2 text-gray-200 font-semibold bg-white/10 hover:bg-white/20 transition-colors px-4 py-2 rounded-lg"
                >
                    <DatabaseIcon className="h-5 w-5" />
                    <span>OSDR Data</span>
                </a>
                )}
                <button
                    onClick={handleGetAbstract}
                    disabled={isFetchingAbstract || !!aiAbstract}
                    className="inline-flex items-center justify-center gap-2 text-gray-200 font-semibold bg-white/10 hover:bg-white/20 disabled:opacity-60 disabled:cursor-not-allowed transition-colors px-4 py-2 rounded-lg"
                >
                    {isFetchingAbstract ? (
                        <>
                            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            <span>Fetching...</span>
                        </>
                    ) : (
                        <>
                           <LightBulbIcon className="h-5 w-5" />
                           <span>Get Abstract</span>
                        </>
                    )}
                </button>
            </div>
            {fetchError && <p className="text-red-400 text-xs mt-2">{fetchError}</p>}
          </DetailSection>
        
          <DetailSection title="AI Snapshot">
            <p className="italic text-gray-400">{publication.summary.snapshot}</p>
          </DetailSection>

          {aiAbstract && (
              <DetailSection title="Live AI Abstract Summary" icon={<SparklesIcon className="w-5 h-5" />}>
                 <div className="p-4 rounded-lg bg-purple-600/10 border border-purple-500/30">
                    <p className="text-purple-200 italic">{aiAbstract}</p>
                 </div>
              </DetailSection>
          )}

          <DetailSection title="Official Abstract">
            <p className="text-gray-400 whitespace-pre-line">{publication.fullText.abstract}</p>
          </DetailSection>

          {/* Data visualization section removed */}

          <DetailSection title="Key Findings">
            <ul className="list-disc list-inside space-y-1">
              {publication.summary.keyFindings.map((finding, i) => <li key={i}>{finding}</li>)}
            </ul>
          </DetailSection>

          <DetailSection title="Objectives">
            <ul className="list-disc list-inside space-y-1">
              {publication.summary.objectives.map((objective, i) => <li key={i}>{objective}</li>)}
            </ul>
          </DetailSection>

          <DetailSection title="Key Concepts">
            <div className="space-y-4">
              <KeyConceptGroup title="Organisms">
                {publication.keyConcepts.organisms.map(o => <Pill key={o} className="bg-green-500/20 text-green-300">{o}</Pill>)}
              </KeyConceptGroup>
              <KeyConceptGroup title="Environment Factors">
                {publication.keyConcepts.environmentFactors.map(f => <Pill key={f} className="bg-red-500/20 text-red-300">{f}</Pill>)}
              </KeyConceptGroup>
              <KeyConceptGroup title="Processes">
                {publication.keyConcepts.processes.map(p => <Pill key={p} className="bg-yellow-500/20 text-yellow-300">{p}</Pill>)}
              </KeyConceptGroup>
              {publication.keyConcepts.genes.length > 0 && (
                <KeyConceptGroup title="Genes">
                  {publication.keyConcepts.genes.map(g => <Pill key={g} className="bg-blue-500/20 text-blue-300">{g}</Pill>)}
                </KeyConceptGroup>
              )}
            </div>
          </DetailSection>

          <DetailSection title="Analysis">
             <h5 className="font-semibold text-gray-200">Limitations</h5>
             <ul className="list-disc list-inside space-y-1 mb-3 text-gray-400">
                {publication.analysis.limitations.map((item, i) => <li key={i}>{item}</li>)}
             </ul>
             <h5 className="font-semibold text-gray-200">Future Work</h5>
             <ul className="list-disc list-inside space-y-1 text-gray-400">
                {publication.analysis.futureWork.map((item, i) => <li key={i}>{item}</li>)}
             </ul>
          </DetailSection>
          
          <DetailSection title="Introduction" icon={<BookOpenIcon className="w-5 h-5" />}>
             <p className="text-gray-400 whitespace-pre-line">{publication.fullText.introduction}</p>
          </DetailSection>

          <DetailSection title="Methods" icon={<BeakerIcon className="w-5 h-5" />}>
             <p className="text-gray-400 whitespace-pre-line">{publication.fullText.methods}</p>
          </DetailSection>

          <DetailSection title="Results" icon={<ChartBarIcon className="w-5 h-5" />}>
             <p className="text-gray-400 whitespace-pre-line">{publication.fullText.results}</p>
          </DetailSection>

          <DetailSection title="Conclusion" icon={<FlagIcon className="w-5 h-5" />}>
             <p className="text-gray-400 whitespace-pre-line">{publication.fullText.conclusion}</p>
          </DetailSection>

        </div>
      </div>
    </div>
  );
};
