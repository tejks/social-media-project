import clsx from 'clsx';
import { useEffect, useRef, useState } from 'react';

import Dropdown, { IDropdownOption } from './Dropdown';

import { IComment } from '@common/API/models/comment.model';

interface CommentProps {
  comment: IComment;
  commentId: number;
  onCommentDelete: (id: string) => void;
}

const Comment: React.FC<CommentProps> = ({ commentId, comment, onCommentDelete }) => {
  const dropdownOptions: IDropdownOption[] = [
    {
      label: 'Report',
      location: '/',
    },
    { label: 'Edit', location: '/', requiredOwner: true },
    {
      label: 'Delete',
      location: '/',
      color: 'text-red-600',
      requiredOwner: true,
      dropdownEvent() {
        onCommentDelete(comment.id);
        setIsDropdownOpen(false);
      },
    },
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
    <article key={commentId} className={clsx('py-3 text-sm sm:p-6', commentId != 0 ? 'border-t  border-gray-800' : '')}>
      <footer className="relative mb-2 flex items-center justify-between">
        <div className="flex items-center">
          <p className="text-md mr-3 inline-flex items-center font-semibold text-gray-900 dark:text-white">
            <img
              className="mr-2 h-6 w-6 rounded-full"
              src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
              alt="Michael Gough"
            />
            {"comment.email.toLocaleLowerCase().split('@')[0]"}
          </p>
        </div>

        <button
          id="dropdownComment1Button"
          data-dropdown-toggle="dropdownComment1"
          className="inline-flex items-center rounded-lg p-2 text-center text-sm font-medium text-gray-400  hover:bg-gray-700 "
          type="button"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <svg
            className="h-4 w-4"
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

      <p className="text-gray-500 dark:text-gray-400">{comment.text}</p>

      {/* <div className="mt-4 flex items-center space-x-4">
        <button type="button" className="flex items-center text-sm font-medium text-gray-400 hover:underline">
          <svg
            className="mr-1.5 h-3.5 w-3.5"
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
      </div> */}
    </article>
  );
};

export default Comment;
