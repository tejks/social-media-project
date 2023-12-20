import React from 'react';

const SearchBar: React.FC = () => {
  return (
    <div className="flex-2 flex w-1/4 items-center justify-evenly">
      <div className="relative block w-full">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <svg
            className="h-4 w-4 text-gray-600 dark:text-gray-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path stroke="currentColor" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
          </svg>
          <span className="sr-only">Search icon</span>
        </div>
        <input
          type="text"
          id="search-navbar"
          className="block w-full rounded-xl border-2 border-gray-700 bg-gray-800 p-2 pl-10 text-sm text-white placeholder-gray-500 focus:border-blue-500 focus:ring-blue-500"
          placeholder="Search..."
        />
      </div>
    </div>
  );
};

export default SearchBar;
