import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { logout } from '../../common/store/authSlice';
import { useAppDispatch } from '../../common/store';
import { faker } from '@faker-js/faker';

interface UserProfileProps {
  name: string;
  email: string;
}

const UserProfile: React.FC<UserProfileProps> = ({ email, name }: UserProfileProps) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const dispatch = useAppDispatch();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const avatar = useMemo(() => faker.image.avatar(), [name]);

  return (
    <div className="flex flex-1 items-center justify-end">
      <button
        type="button"
        className="flex mr-3 text-sm bg-gray-800 rounded-full"
        id="user-menu-button"
        aria-expanded="false"
        data-dropdown-toggle="user-dropdown"
        data-dropdown-placement="bottom"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <span className="sr-only">Open user menu</span>

        <img
          className="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
          src={avatar}
          alt="Bordered avatar"
        />
      </button>

      {isOpen ? (
        <div
          className="z-50 absolute right-5 top-14 my-4 text-base divide-y list-none rounded-lg shadow bg-gray-700 divide-gray-600"
          id="user-dropdown"
        >
          <div className="px-4 py-3">
            <span className="block text-sm text-white">{name}</span>
            <span className="block text-sm truncate text-gray-400">{email}</span>
          </div>
          <ul className="py-2" aria-labelledby="user-menu-button">
            <li>
              <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-600 text-gray-200 hover:text-white">
                Dashboard
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-600 text-gray-200 hover:text-white">
                Settings
              </a>
            </li>
          </ul>
          <div className="py-1">
            <Link
              to={'/'}
              onClick={() => dispatch(logout())}
              className="block px-4 py-2 text-sm hover:bg-gray-600 text-gray-200 hover:text-white"
            >
              Sign out
            </Link>
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default UserProfile;
