
import React, { useState, useRef } from 'react';
import { SearchIcon } from './icons/SearchIcon';
import { SparklesIcon } from './icons/SparklesIcon';

interface SearchBarProps {
  onSearch: (query: string, isSmartSearch: boolean) => void;
  isLoading: boolean;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch, isLoading }) => {
  const [query, setQuery] = useState('');
  const debounceTimeoutRef = useRef<number | null>(null);

  const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value;
    setQuery(newQuery);

    if (debounceTimeoutRef.current) {
      clearTimeout(debounceTimeoutRef.current);
    }

    debounceTimeoutRef.current = window.setTimeout(() => {
      onSearch(newQuery, false);
    }, 300); // 300ms debounce delay
  };

  const performImmediateSearch = (isSmart: boolean) => {
    if (debounceTimeoutRef.current) {
      clearTimeout(debounceTimeoutRef.current);
    }
    onSearch(query, isSmart);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // Prevent default form submission
      performImmediateSearch(e.ctrlKey || e.metaKey);
    }
  };

  return (
    <div className="sticky top-4 z-20 mb-8">
      <div className="relative p-1 rounded-full bg-white/10 backdrop-blur-md shadow-2xl shadow-purple-500/10 border border-white/10">
        <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
          <SearchIcon className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="search"
          name="search"
          id="search"
          value={query}
          onChange={handleQueryChange}
          onKeyDown={handleKeyDown}
          className="block w-full bg-transparent border-0 rounded-full py-3 pl-12 pr-44 text-gray-200 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none sm:text-sm"
          placeholder="Search by title, organism, or ask a question..."
          disabled={isLoading}
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-2">
          <button
            onClick={() => performImmediateSearch(true)}
            disabled={isLoading || !query}
            className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-full hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity duration-200"
          >
            {isLoading ? (
              'Analyzing...'
            ) : (
              <>
                <SparklesIcon className="h-4 w-4" />
                <span>Smart Search</span>
              </>
            )}
          </button>
        </div>
      </div>
      <p className="text-center text-xs text-gray-500 mt-2">
        Tip: Press <kbd className="font-mono text-xs p-1 bg-white/10 rounded">Ctrl+Enter</kbd> for a Smart Search.
      </p>
    </div>
  );
};
