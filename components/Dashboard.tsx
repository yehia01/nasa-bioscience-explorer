import React from 'react';
import type { Publication } from '../types';
import { PublicationCard } from './PublicationCard';

interface DashboardProps {
  publications: Publication[];
  onSelectPublication: (publication: Publication) => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ publications, onSelectPublication }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {publications.map(pub => (
        <PublicationCard 
          key={pub.id} 
          publication={pub} 
          onSelect={() => onSelectPublication(pub)} 
        />
      ))}
    </div>
  );
};