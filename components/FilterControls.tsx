import React from 'react';
import { FilterIcon } from './icons/FilterIcon';
import { XCircleIcon } from './icons/XCircleIcon';

export interface FilterOptions {
  organisms: string[];
  environmentFactors: string[];
}

export interface Filters {
  organism: string[];
  environmentFactor: string[];
  sortBy: 'newest' | 'oldest';
}

interface FilterControlsProps {
  options: FilterOptions;
  filters: Filters;
  onFilterChange: (newFilters: Partial<Filters>) => void;
}

const FilterPill: React.FC<{
  label: string;
  isSelected: boolean;
  onClick: () => void;
}> = ({ label, isSelected, onClick }) => {
  const baseClasses = "px-3 py-1 text-sm rounded-full cursor-pointer transition-colors duration-200";
  const selectedClasses = "bg-blue-500 text-white font-semibold";
  const defaultClasses = "bg-gray-700/50 hover:bg-gray-600/80 text-gray-300";
  return (
    <button onClick={onClick} className={`${baseClasses} ${isSelected ? selectedClasses : defaultClasses}`}>
      {label}
    </button>
  );
};

const FilterGroup: React.FC<{
  label: string;
  options: string[];
  selected: string[];
  onToggle: (option: string) => void;
}> = ({ label, options, selected, onToggle }) => (
  <div className="flex flex-wrap items-center gap-2">
    <span className="text-sm font-medium text-gray-400 mr-2">{label}:</span>
    {options.map(option => (
      <FilterPill
        key={option}
        label={option}
        isSelected={selected.includes(option)}
        onClick={() => onToggle(option)}
      />
    ))}
  </div>
);

export const FilterControls: React.FC<FilterControlsProps> = ({ options, filters, onFilterChange }) => {
  const handleToggle = (key: 'organism' | 'environmentFactor', value: string) => {
    const currentValues = filters[key];
    const newValues = currentValues.includes(value)
      ? currentValues.filter(v => v !== value)
      : [...currentValues, value];
    onFilterChange({ [key]: newValues });
  };

  const handleReset = () => {
    onFilterChange({
      organism: [],
      environmentFactor: [],
      sortBy: 'newest',
    });
  };

  const hasActiveFilters = filters.organism.length > 0 || filters.environmentFactor.length > 0 || filters.sortBy !== 'newest';

  return (
    <div className="mb-8 p-4 bg-gray-800/50 border border-white/10 rounded-xl space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-sm font-semibold text-gray-300">
          <FilterIcon className="h-5 w-5" />
          <span>Filter & Sort</span>
        </div>
        <div className="flex items-center gap-2">
          <label htmlFor="sort-by" className="text-sm font-medium text-gray-400">Sort By:</label>
          <select
            id="sort-by"
            value={filters.sortBy}
            onChange={e => onFilterChange({ sortBy: e.target.value as 'newest' | 'oldest' })}
            className="bg-gray-700/50 border border-gray-600 rounded-md px-3 py-1.5 text-sm text-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition"
          >
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
          </select>
        </div>
        {hasActiveFilters && (
          <button
            onClick={handleReset}
            className="flex items-center gap-2 px-3 py-1.5 text-sm text-gray-300 bg-gray-700/60 rounded-md hover:bg-gray-700 transition"
            aria-label="Reset filters"
          >
            <XCircleIcon className="h-4 w-4" />
            <span>Reset All</span>
          </button>
        )}
      </div>

      <div className="space-y-3 pt-3 border-t border-white/10">
        <FilterGroup
          label="Organisms"
          options={options.organisms}
          selected={filters.organism}
          onToggle={(option) => handleToggle('organism', option)}
        />
        <FilterGroup
          label="Factors"
          options={options.environmentFactors}
          selected={filters.environmentFactor}
          onToggle={(option) => handleToggle('environmentFactor', option)}
        />
      </div>
    </div>
  );
};