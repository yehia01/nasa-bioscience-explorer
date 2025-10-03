
import React from 'react';
import type { Publication } from '../types';
import { ChevronRightIcon } from './icons/ChevronRightIcon';

interface PublicationCardProps {
  publication: Publication;
  onSelect: () => void;
}

const Tag: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="inline-block bg-blue-500/10 text-blue-300 text-xs font-medium px-2 py-1 rounded-full">
    {children}
  </span>
);

export const PublicationCard: React.FC<PublicationCardProps> = ({ publication, onSelect }) => {
  return (
    <div 
      onClick={onSelect}
      className="group relative cursor-pointer p-px rounded-xl bg-gradient-to-br from-blue-500/50 to-purple-600/50 hover:from-blue-500 hover:to-purple-600 transition-all duration-300"
    >
      <div className="relative h-full bg-gray-900 rounded-xl p-6 flex flex-col justify-between">
        <div>
          <p className="text-xs text-purple-300 mb-2">{publication.journal} &middot; {publication.publicationDate}</p>
          <h3 className="text-lg font-bold text-gray-100 mb-3 group-hover:text-white transition-colors">
            {publication.title}
          </h3>
          <p className="text-sm text-gray-400 mb-4 line-clamp-3">
            {publication.summary.snapshot}
          </p>
        </div>
        <div>
          <div className="flex flex-wrap gap-2 mb-4">
            {publication.keyConcepts.organisms.slice(0, 1).map(o => <Tag key={o}>{o}</Tag>)}
            {publication.keyConcepts.environmentFactors.slice(0, 2).map(f => <Tag key={f}>{f}</Tag>)}
          </div>
          <div className="flex items-center justify-between text-sm font-semibold text-blue-400 group-hover:text-white transition-colors">
            <span>View Details</span>
            <ChevronRightIcon className="h-5 w-5 transform transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </div>
    </div>
  );
};
