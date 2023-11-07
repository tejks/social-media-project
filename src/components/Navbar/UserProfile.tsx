import React from 'react';

interface UserProfileProps {
  name: string;
  email: string;
}

const UserProfile: React.FC<UserProfileProps> = ({ email, name }: UserProfileProps) => {
  const [isOpen, setIsOpen] = React.useState(false);

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
        <div className="relative w-10 h-10 overflow-hidden rounded-full bg-gray-600">
          <svg
            className="absolute w-12 h-12 text-gray-400 -left-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
          </svg>
        </div>
      </button>

      {isOpen ? (
        <div
          className="z-50 absolute right-5 top-14 my-4 text-base list-none rounded-lg shadow bg-gray-700 divide-gray-600"
          id="user-dropdown"
        >
          <div className="px-4 py-3">
            <span className="block text-sm text-white">{name}</span>
            <span className="block text-sm truncate text-gray-400">{email}</span>
          </div>
          <ul className="py-2" aria-labelledby="user-menu-button">
            <li>
              <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-600 text-gray-200 hover:text-white">
                Settings
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-600 text-gray-200 hover:text-white">
                Sign out
              </a>
            </li>
          </ul>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default UserProfile;
