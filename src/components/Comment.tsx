import clsx from 'clsx';
import { useEffect, useRef, useState } from 'react';

import Dropdown, { IDropdownOption } from './Dropdown';

import { IComment } from '@common/API/models/comment.model';

interface CommentProps {
  comment: IComment;
  commentId: number;
  authUserId?: string;
  onCommentDelete: (id: string) => void;
}

const Comment: React.FC<CommentProps> = ({ commentId, comment, onCommentDelete, authUserId }) => {
  const dropdownOptions: IDropdownOption[] = [
    {
      label: 'Report',
      location: '/',
    },
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
    <article className={clsx('py-3 text-sm sm:p-6', commentId != 0 ? 'border-t  border-gray-800' : '')}>
      <footer className="relative mb-2 flex items-center justify-between">
        <div className="flex items-center">
          <p className="text-md mr-3 inline-flex items-center font-semibold text-gray-900 dark:text-white">
            <img className="mr-2 h-6 w-6 rounded-full" src={comment.user.imageUrl} alt={comment.user.username} />
            {comment.user.username}
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

        <Dropdown
          isOpen={isDropdownOpen}
          options={dropdownOptions}
          ref={dropdownRef}
          isOwner={authUserId ? (authUserId == comment.userId ? true : false) : false}
        />
      </footer>

      <p className="text-gray-400">{comment.content}</p>
    </article>
  );
};

export default Comment;
