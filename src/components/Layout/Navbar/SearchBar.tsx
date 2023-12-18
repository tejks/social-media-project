import React from 'react';

const SearchBar: React.FC = () => {
  return (
    <div className="flex flex-2 items-center justify-evenly w-1/4">
      <div className="relative block w-full">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-600 dark:text-gray-500"
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
          className="block w-full p-2 pl-10 text-sm border-2 rounded-xl bg-gray-800 border-gray-700 placeholder-gray-500 text-white focus:ring-blue-500 focus:border-blue-500"
          placeholder="Search..."
        />
      </div>
    </div>
  );
};

export default SearchBar;
