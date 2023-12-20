import { faker } from '@faker-js/faker';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import { useAppDispatch } from '@common/store';
import { logout } from '@common/store/authSlice';

interface UserProfileProps {
  name: string;
  email: string;
  isMobile?: boolean;
}

const UserProfile: React.FC<UserProfileProps> = ({ email, name, isMobile }: UserProfileProps) => {
  const dispatch = useAppDispatch();

  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const dropDownList = [
    { name: 'Dashboard', url: '/dashboard' },
    { name: 'Settings', url: '/settings' },
  ];

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

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const avatar = useMemo(() => faker.image.avatar(), [name]);

  if (isMobile)
    return (
      <div>
        <img className="w-20 rounded-full" src={avatar} alt="Bordered avatar" />
      </div>
    );

  if (!isMobile)
    return (
      <div className="flex flex-1 items-center justify-end">
        <button
          type="button"
          className="mr-3 flex rounded-full bg-gray-800 text-sm"
          id="user-menu-button"
          aria-expanded="false"
          data-dropdown-toggle="user-dropdown"
          data-dropdown-placement="bottom"
          onClick={() => {
            setIsDropdownOpen(!isDropdownOpen);
          }}
        >
          <span className="sr-only">Open user menu</span>

          <img
            className="h-10 w-10 rounded-full p-1 ring-2 ring-gray-300 dark:ring-gray-500"
            src={avatar}
            alt="Bordered avatar"
          />
        </button>

        {isDropdownOpen ? (
          <div
            className="absolute right-5 top-14 z-50 my-4 list-none divide-y divide-gray-600 rounded-lg bg-gray-700 text-base shadow"
            id="user-dropdown"
            ref={dropdownRef}
          >
            <div className="px-4 py-3">
              <span className="block text-sm text-white">{name}</span>
              <span className="block truncate text-sm text-gray-400">{email}</span>
            </div>
            <ul className="py-2" aria-labelledby="user-menu-button">
              {dropDownList.map((element) => (
                <li key={element.name}>
                  <Link
                    to={element.url}
                    className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-600 hover:text-white"
                  >
                    {element.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="py-1">
              <Link
                to={'/'}
                onClick={() => dispatch(logout())}
                className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-600 hover:text-white"
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
