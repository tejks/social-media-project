import { useCallback, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { AuthUser } from '@/common/API/models/user.model';
import { useLikePostMutation, useUnlikePostMutation } from '@/common/API/services/post';
import { IPost } from '@common/API/models/post.model';
import clsx from 'clsx';
import Dropdown, { IDropdownOption } from './Dropdown';

interface PostElementProps {
  post: IPost;
  auth: AuthUser | null;
  onPostDelete?: (id: string) => void;
  route?: boolean;
}

const PostElement: React.FC<PostElementProps> = ({ post, route = true, auth, onPostDelete }) => {
  const navigate = useNavigate();

  const [isLiked, setIsLiked] = useState(false);
  const [numberOfLikes, setNumberOfLikes] = useState(post.likes);
  const [isCopied, setIsCopied] = useState(false);

  const [likePost] = useLikePostMutation();
  const [unlikePost] = useUnlikePostMutation();

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
        onPostDelete ? onPostDelete(post.id) : null;
        setIsDropdownOpen(false);
      },
    },
  ];

  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const getFullDate = useCallback((date: Date) => {
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: 'numeric',
      minute: 'numeric',
    });
  }, []);

  const onLikeClick = async () => {
    if (!auth) return navigate('/login');

    try {
      if (isLiked) {
        await unlikePost(post.id);
        setNumberOfLikes(numberOfLikes - 1);
      } else {
        await likePost(post.id);
        setNumberOfLikes(numberOfLikes + 1);
      }

      setIsLiked(!isLiked);
    } catch (error) {
      console.error(error);
    }
  };

  const copyTextToClipboard = async (text: string) => {
    if ('clipboard' in navigator) {
      return await navigator.clipboard.writeText(text);
    }
  };

  const onShareClick = () => {
    copyTextToClipboard(`${window.location.origin}/posts/${post.id}`).then(() => {
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 1000);
    });
  };

  useEffect(() => {
    setIsLiked(post.isLiked);
    setNumberOfLikes(post.likes);
  }, [post]);

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
    <div className="post-element__context my-4 grid grid-cols-10 gap-3 rounded-lg border border-[#1c5c7585] bg-[#1c5c7521] px-3 py-4 text-sm sm:px-4 sm:py-4">
      <div className="post-element__image-box hidden justify-center sm:col-start-1 sm:col-end-1 sm:flex">
        <img
          className="h-8 w-8 rounded-full object-cover shadow sm:h-12 sm:w-12"
          src={post.user.imageUrl}
          alt="avatar"
        />
      </div>

      <div className="post-element__content-box col-start-1 col-end-11 sm:col-start-2 sm:col-end-11">
        <div className={clsx(route ? 'cursor-pointer' : '')} onClick={() => (route ? navigate(`${post.id}`) : null)}>
          <div className="relative flex items-center justify-start">
            <img
              className="mr-3 h-8 w-8 rounded-full object-cover shadow sm:hidden"
              src={post.user.imageUrl}
              alt="avatar"
            />
            <div className="post-element__info pt-1">
              <h2 className="text-md font-semibold text-white">{post.user.username}</h2>
              <p className="text-gray-400">{getFullDate(new Date(post.createdAt))}</p>
            </div>

            {!route ? (
              <div className="post-element__dropdown ml-auto flex items-center">
                <button
                  id="dropdownComment1Button"
                  data-dropdown-toggle="dropdownComment1"
                  className="items-center rounded-lg p-2 text-center text-sm font-medium text-gray-400  hover:bg-gray-700"
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
                  isOwner={auth ? (auth.userId == post.userId ? true : false) : false}
                />
              </div>
            ) : null}
          </div>

          <div className="mt-3 overflow-hidden text-gray-100">{post.content}</div>
        </div>
        <div className="mt-3 flex items-center sm:mt-6">
          <div className="mr-3 flex cursor-pointer text-sm text-gray-400 sm:mr-4">
            <svg
              fill="none"
              viewBox="0 0 24 24"
              className={clsx(
                'mr-1 h-3.5 w-3.5 sm:h-4 sm:w-4',
                isLiked ? 'text-red-500 hover:text-gray-400' : 'text-gray-400 hover:text-red-500',
              )}
              stroke="currentColor"
              onClick={onLikeClick}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
            <span>{numberOfLikes}</span>
          </div>
          <div className="mr-3 flex text-sm text-gray-400 sm:mr-4">
            <svg fill="none" viewBox="0 0 24 24" className="mr-1 h-3.5 w-3.5 sm:h-4 sm:w-4" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
              />
            </svg>
            <span>{post.comments}</span>
          </div>
          <div className="mr-3 flex cursor-pointer text-sm text-gray-400 sm:mr-4" onClick={onShareClick}>
            <svg
              fill="none"
              viewBox="0 0 24 24"
              className={clsx('mr-1 h-3.5 w-3.5 hover:text-sky-400 sm:h-4 sm:w-4', isCopied ? 'text-sky-400' : '')}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
              />
            </svg>
            <span className="text-xs text-sky-400">{isCopied ? 'Copied' : ''}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostElement;
