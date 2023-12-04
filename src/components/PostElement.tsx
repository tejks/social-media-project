import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { IPost } from '@common/API/models/post.model';

interface PostElementProps {
  post: IPost;
}

const PostElement: React.FC<PostElementProps> = ({ post }) => {
  const navigate = useNavigate();

  const getFullDate = useCallback((date: Date) => {
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: 'numeric',
      minute: 'numeric',
    });
  }, []);

  return (
    <div className="post-element__context grid grid-cols-10 gap-3 sm:gap-4 px-3 py-4 sm:py-4 sm:px-4 my-4 text-xs sm:text-sm bg-gray-800 border border-gray-700 rounded-lg shadow  ">
      <div className="post-element__image-box hidden sm:col-start-1 sm:col-end-1 sm:flex justify-center">
        <img
          className="w-8 h-8 sm:w-12 sm:h-12 rounded-full object-cover shadow"
          src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
          alt="avatar"
        />
      </div>

      <div className="post-element__content-box col-start-1 col-end-11 sm:col-start-2 sm:col-end-11">
        <div className="cursor-pointer" onClick={() => navigate(`${post.id}`)}>
          <div className="flex items-center justify-start relative">
            <img
              className="w-8 h-8 sm:hidden rounded-full object-cover shadow mr-3"
              src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
              alt="avatar"
            />
            <div className="post-element__info pt-1">
              <h2 className="text-md font-semibold text-white">Brad Adams </h2>
              <p className="text-gray-400">{getFullDate(new Date())}</p>
            </div>

            <div className="post-element__dropdown flex items-center">
              {/* <button
                  id="dropdownComment1Button"
                  data-dropdown-toggle="dropdownComment1"
                  className="items-center p-2 text-sm font-medium text-center text-gray-400 rounded-lg  hover:bg-gray-700 "
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
                <Dropdown isOpen={isDropdownOpen} options={dropdownOptions} ref={dropdownRef} /> */}
            </div>
          </div>

          <p className="mt-3 text-gray-100">{post.body}</p>
        </div>
        <div className="mt-3 sm:mt-6 flex items-center">
          <div className="flex mr-3 sm:mr-4 text-gray-400 text-sm cursor-pointer">
            {Math.random() >= 0.5 ? (
              <svg fill="none" viewBox="0 0 24 24" className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            ) : (
              <svg
                fill="none"
                viewBox="0 0 24 24"
                className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1 text-red-500"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            )}
            <span>12</span>
          </div>
          <div className="flex mr-3 sm:mr-4 text-gray-400 text-sm cursor-pointer">
            <svg fill="none" viewBox="0 0 24 24" className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
              />
            </svg>
            <span>8</span>
          </div>
          <div className="flex mr-3 sm:mr-4 text-gray-400 text-sm cursor-pointer">
            <svg fill="none" viewBox="0 0 24 24" className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
              />
            </svg>
            <span>10</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostElement;
