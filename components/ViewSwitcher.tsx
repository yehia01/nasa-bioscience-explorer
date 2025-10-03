import React from 'react';
import { ListBulletIcon } from './icons/ListBulletIcon';
import { ShareIcon } from './icons/ShareIcon';
import { LightBulbIcon } from './icons/LightBulbIcon';

type View = 'dashboard' | 'graph' | 'gap';

interface ViewSwitcherProps {
  currentView: View;
  onViewChange: (view: View) => void;
}

const ViewButton: React.FC<{
    label: string;
    icon: React.ReactNode;
    isActive: boolean;
    onClick: () => void;
}> = ({ label, icon, isActive, onClick }) => {
    const baseClasses = "flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md transition-colors duration-200";
    const activeClasses = "bg-blue-600 text-white";
    const defaultClasses = "bg-gray-700/50 hover:bg-gray-600/80 text-gray-300";

    return (
        <button onClick={onClick} className={`${baseClasses} ${isActive ? activeClasses : defaultClasses}`}>
            {icon}
            <span>{label}</span>
        </button>
    );
};

export const ViewSwitcher: React.FC<ViewSwitcherProps> = ({ currentView, onViewChange }) => {
  return (
    <div className="flex justify-center mb-8">
      <div className="flex items-center p-1 bg-gray-800/60 rounded-lg gap-2">
        <ViewButton
          label="Card View"
          icon={<ListBulletIcon className="h-5 w-5" />}
          isActive={currentView === 'dashboard'}
          onClick={() => onViewChange('dashboard')}
        />
        <ViewButton
          label="Graph View"
          icon={<ShareIcon className="h-5 w-5" />}
          isActive={currentView === 'graph'}
          onClick={() => onViewChange('graph')}
        />
        <ViewButton
          label="Gap Analysis"
          icon={<LightBulbIcon className="h-5 w-5" />}
          isActive={currentView === 'gap'}
          onClick={() => onViewChange('gap')}
        />
      </div>
    </div>
  );
};
