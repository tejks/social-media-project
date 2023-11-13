import clsx from 'clsx';
import { IComment } from '../common/API/models/comment.model';
import { useEffect, useRef, useState } from 'react';
import Dropdown from './Dropdown';

interface CommentProps {
  comment: IComment;
  commentId: number;
}

const Comment: React.FC<CommentProps> = ({ commentId, comment }) => {
  const dropdownOptions = [
    { label: 'Report', location: '/' },
    { label: 'Edit', location: '/', requiredOwner: true },
    { label: 'Delete', location: '/', color: 'text-red-600', requiredOwner: true },
  ];

  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handler = (event: MouseEvent) => {
      if (!dropdownRef.current?.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handler);

    return () => {
      document.removeEventListener('mousedown', handler);
    };
  });

  return (
    <article key={commentId} className={clsx('p-6 text-base', commentId != 0 ? 'border-t  border-gray-800' : '')}>
      <footer className="flex justify-between items-center mb-2 relative">
        <div className="flex items-center">
          <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold">
            <img
              className="mr-2 w-6 h-6 rounded-full"
              src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
              alt="Michael Gough"
            />
            {comment.name}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400">Feb. 8, 2022</p>
        </div>
        <button
          id="dropdownComment1Button"
          data-dropdown-toggle="dropdownComment1"
          className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-400 rounded-lg  hover:bg-gray-700 "
          type="button"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <svg
            className="w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 16 3"
          >
            <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
          </svg>
          <span className="sr-only">Comment settings</span>
        </button>
        <Dropdown isOpen={isDropdownOpen} options={dropdownOptions} ref={dropdownRef} />
      </footer>
      <p className="text-gray-500 dark:text-gray-400">{comment.body}</p>
      <div className="flex items-center mt-4 space-x-4">
        <button type="button" className="flex items-center text-sm hover:underline text-gray-400 font-medium">
          <svg
            className="mr-1.5 w-3.5 h-3.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 18"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"
            />
          </svg>
          Reply
        </button>
      </div>
    </article>
  );
};

export default Comment;
