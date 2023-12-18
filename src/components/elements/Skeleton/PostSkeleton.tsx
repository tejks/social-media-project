const PostSkeleton: React.FC = () => {
  return (
    <div className="flex my-3">
      <div role="status" className="animate-pulse w-full">
        <div className="flex items-start mt-4 space-x-3 px-4">
          <svg
            className="w-14 h-14 text-gray-700 rounded-full object-cover shadow"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
          </svg>
          <div className="w-full">
            <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-3 mt-3"></div>
            <div className="h-2.5 bg-gray-700 rounded-full w-48 mb-5"></div>
            <div className="h-2 bg-gray-700 mb-2.5 rounded-full"></div>
            <div className="h-2 bg-gray-700 mb-2.5 rounded-full"></div>
            <div className="h-2 bg-gray-700 mb-2.5 rounded-full"></div>
            <div className="h-2 bg-gray-700 mb-2.5 rounded-full"></div>
            <div className="h-2 bg-gray-700 mb-6 rounded-full w-2/3"></div>
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostSkeleton;
