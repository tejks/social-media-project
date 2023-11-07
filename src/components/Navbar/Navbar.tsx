/* eslint-disable no-constant-condition */
import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useTypedSelector } from '../../common/store';
import { selectCurrentUser } from '../../common/store/authSlice';
import SearchBar from './SearchBar';
import UserProfile from './UserProfile';

interface NavbarMenuElement {
  name: string;
  url: string;
  isActive: boolean;
}

const Navbar: React.FC = () => {
  const location = useLocation();
  const user = useTypedSelector(selectCurrentUser);

  const [navbarMenu, setNavbarMenu] = useState<NavbarMenuElement[]>([
    { name: 'Home', url: '/', isActive: true },
    { name: 'Posts', url: '/posts', isActive: false },
    { name: 'Albums', url: '/albums', isActive: false },
  ]);

  useEffect(() => {
    const newNavbarMenu = navbarMenu.map((element) => {
      if (element.url === location.pathname) {
        element.isActive = true;
      } else {
        element.isActive = false;
      }

      return element;
    });

    setNavbarMenu(newNavbarMenu);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <nav className="bg-gray-950">
      <div className="flex justify-between p-5">
        <div className="flex flex-1 justify-start items-center">
          <a href="https://flowbite.com/">
            <img src="https://flowbite.com/docs/images/logo.svg" alt="Flowbite Logo" />
          </a>

          <div className="ml-5" id="navbar-default">
            <ul className="font-normal flex">
              {navbarMenu.map((element) => (
                <li key={element.name}>
                  <NavLink
                    to={element.url}
                    className={clsx(
                      'block py-2 pl-3 pr-4 bg-blue-700 rounded bg-transparent',
                      element.isActive ? 'text-white' : 'text-gray-500',
                    )}
                    aria-current="page"
                  >
                    {element.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <SearchBar />

        {!user ? (
          <div className="flex flex-1 items-center justify-end">
            <Link
              to={'/login'}
              type="button"
              className="text-blue-300 h-9 bg-blue-800 hover:bg-blue-800 font-medium rounded-2xl text-sm px-4 py-2 text-center me-3"
            >
              Login
            </Link>
          </div>
        ) : (
          <UserProfile name={user.name} email={user.email} />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
