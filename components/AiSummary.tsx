
import React from 'react';
import { SparklesIcon } from './icons/SparklesIcon';

interface AiSummaryProps {
  summary: string;
}

export const AiSummary: React.FC<AiSummaryProps> = ({ summary }) => {
  return (
    <div className="my-8 p-6 rounded-2xl bg-gradient-to-br from-purple-600/20 to-blue-500/20 backdrop-blur-sm border border-white/10 animate-subtle-pulse">
      <div className="flex items-start gap-4">
        <div className="p-2 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full">
          <SparklesIcon className="w-6 h-6 text-white" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-white mb-2">AI-Powered Summary</h3>
          <p className="text-gray-300 leading-relaxed">{summary}</p>
        </div>
      </div>
    </div>
  );
};
