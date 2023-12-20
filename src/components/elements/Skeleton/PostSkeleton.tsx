const PostSkeleton: React.FC = () => {
  return (
    <div className="my-3 flex">
      <div role="status" className="w-full animate-pulse">
        <div className="mt-4 flex items-start space-x-3 px-4">
          <svg
            className="h-14 w-14 rounded-full object-cover text-gray-700 shadow"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
          </svg>
          <div className="w-full">
            <div className="mb-3 mt-3 h-4 w-32 rounded-full bg-gray-200 dark:bg-gray-700"></div>
            <div className="mb-5 h-2.5 w-48 rounded-full bg-gray-700"></div>
            <div className="mb-2.5 h-2 rounded-full bg-gray-700"></div>
            <div className="mb-2.5 h-2 rounded-full bg-gray-700"></div>
            <div className="mb-2.5 h-2 rounded-full bg-gray-700"></div>
            <div className="mb-2.5 h-2 rounded-full bg-gray-700"></div>
            <div className="mb-6 h-2 w-2/3 rounded-full bg-gray-700"></div>
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostSkeleton;
