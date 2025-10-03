import React from 'react';
import { ArrowLeftIcon } from './icons/ArrowLeftIcon';
import { ArrowRightIcon } from './icons/ArrowRightIcon';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const PageButton: React.FC<{
    onClick: () => void;
    isActive?: boolean;
    isDisabled?: boolean;
    children: React.ReactNode;
}> = ({ onClick, isActive = false, isDisabled = false, children }) => {
    const baseClasses = "px-3 py-1.5 text-sm font-medium rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900";
    const activeClasses = "bg-blue-600 text-white";
    const defaultClasses = "bg-gray-700/50 hover:bg-gray-600/80 text-gray-200";
    const disabledClasses = "opacity-50 cursor-not-allowed";

    return (
        <button
            onClick={onClick}
            disabled={isDisabled}
            className={`${baseClasses} ${isActive ? activeClasses : defaultClasses} ${isDisabled ? disabledClasses : ''}`}
            aria-current={isActive ? 'page' : undefined}
        >
            {children}
        </button>
    );
};


export const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            onPageChange(page);
        }
    };

    const getPageNumbers = () => {
        const pages = new Set<number>();
        pages.add(1);
        pages.add(totalPages);
        
        if (currentPage > 1) pages.add(currentPage - 1);
        pages.add(currentPage);
        if (currentPage < totalPages) pages.add(currentPage + 1);

        const sortedPages = Array.from(pages).sort((a, b) => a - b);
        const finalPages: (number | string)[] = [];

        let lastPage: number | null = null;
        for (const page of sortedPages) {
            if (lastPage !== null && page - lastPage > 1) {
                finalPages.push('...');
            }
            finalPages.push(page);
            lastPage = page;
        }
        return finalPages;
    };

  return (
    <nav className="flex items-center justify-center gap-4 mt-8" aria-label="Pagination">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-gray-300 bg-gray-700/50 rounded-md hover:bg-gray-600/80 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
      >
        <ArrowLeftIcon className="h-4 w-4" />
        <span>Previous</span>
      </button>

      <div className="flex items-center gap-2">
        {getPageNumbers().map((page, index) =>
            typeof page === 'number' ? (
                <PageButton
                    key={index}
                    onClick={() => handlePageChange(page)}
                    isActive={currentPage === page}
                >
                    {page}
                </PageButton>
            ) : (
                <span key={index} className="px-3 py-1.5 text-sm font-medium text-gray-400">
                    {page}
                </span>
            )
        )}
      </div>

      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-gray-300 bg-gray-700/50 rounded-md hover:bg-gray-600/80 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
      >
        <span>Next</span>
        <ArrowRightIcon className="h-4 w-4" />
      </button>
    </nav>
  );
};