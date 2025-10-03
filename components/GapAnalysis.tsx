import React, { useState } from 'react';
import type { Publication, ResearchGap } from '../types';
import { findResearchGaps } from '../services/geminiService';
import { LoadingSpinner } from './LoadingSpinner';
import { LightBulbIcon } from './icons/LightBulbIcon';

interface GapAnalysisProps {
  publications: Publication[];
}

const Pill: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="inline-block bg-purple-500/10 text-purple-300 text-xs font-medium px-2.5 py-1 rounded-full">
    {children}
  </span>
);

const GapCard: React.FC<{ gap: ResearchGap }> = ({ gap }) => (
  <div className="p-6 bg-white/5 rounded-xl border border-white/10 transform transition-transform hover:scale-[1.02] hover:border-purple-400/50">
    <h4 className="font-bold text-gray-100 mb-2">{gap.question}</h4>
    <p className="text-sm text-gray-400 mb-4">{gap.justification}</p>
    <div className="flex flex-wrap gap-2">
      {gap.relatedConcepts.map(concept => <Pill key={concept}>{concept}</Pill>)}
    </div>
  </div>
);

export const GapAnalysis: React.FC<GapAnalysisProps> = ({ publications }) => {
  const [gaps, setGaps] = useState<ResearchGap[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasAnalyzed, setHasAnalyzed] = useState(false);

  const handleAnalyze = async () => {
    setIsLoading(true);
    setError(null);
    setHasAnalyzed(true);
    try {
      const result = await findResearchGaps(publications);
      setGaps(result);
    } catch (err) {
      setError("Failed to perform AI analysis. Please try again.");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="text-center py-8">
      <div className="max-w-3xl mx-auto mb-10">
        <div className="mx-auto w-16 h-16 mb-4 flex items-center justify-center bg-gradient-to-br from-purple-600/30 to-blue-500/30 rounded-full">
          <LightBulbIcon className="h-8 w-8 text-purple-300" />
        </div>
        <h2 className="text-3xl font-extrabold text-white mb-2">AI-Powered Research Gap Analysis</h2>
        <p className="text-gray-400">
          Discover the next frontier in space bioscience. Our AI will analyze the entire collection of publications to identify under-explored connections and suggest novel research questions.
        </p>
      </div>

      {!hasAnalyzed && (
        <button
          onClick={handleAnalyze}
          disabled={isLoading}
          className="px-8 py-3 text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-full hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity duration-200 shadow-lg shadow-purple-500/20"
        >
          {isLoading ? 'Analyzing...' : 'Find Research Gaps'}
        </button>
      )}

      {isLoading && (
        <div className="flex flex-col items-center justify-center space-y-4 my-8">
            <LoadingSpinner />
            <p className="text-gray-400">AI is analyzing connections... this may take a moment.</p>
        </div>
      )}

      {error && <p className="text-red-400 mt-4">{error}</p>}
      
      {!isLoading && gaps.length > 0 && (
        <div className="mt-12 text-left grid grid-cols-1 md:grid-cols-2 gap-6">
            {gaps.map((gap, index) => <GapCard key={index} gap={gap} />)}
        </div>
      )}

      {!isLoading && hasAnalyzed && gaps.length === 0 && !error && (
        <p className="text-gray-500 mt-8">The analysis completed but did not return any specific gaps at this time.</p>
      )}

    </div>
  );
}; 