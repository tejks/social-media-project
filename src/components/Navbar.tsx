import clsx from 'clsx';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

interface NavbarMenuElement {
  name: string;
  url: string;
  isActive: boolean;
}

const Navbar: React.FC = () => {
  const [navbarMenu, setNavbarMenu] = useState<NavbarMenuElement[]>([
    { name: 'Home', url: '/', isActive: true },
    { name: 'Posts', url: '/posts', isActive: false },
    { name: 'Albums', url: '/albums', isActive: false },
  ]);

  const changeActiveMenu = (url: string) => {
    const newNavbarMenu = navbarMenu.map((element) => {
      if (element.url === url) {
        element.isActive = true;
      } else {
        element.isActive = false;
      }

      return element;
    });

    setNavbarMenu(newNavbarMenu);
  };

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-950 flex">
      <div className="flex flex-1 justify-between p-2 ">
        <div className="flex flex-1 p-4 items-center justify-start">
          <a href="https://flowbite.com/" className="flex">
            <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" />
          </a>

          <div className="pl-5 items-start" id="navbar-default">
            <ul className="font-normal flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              {navbarMenu.map((element) => (
                <li key={element.name}>
                  <NavLink
                    to={element.url}
                    className={clsx(
                      'block py-2 pl-3 pr-4 bg-blue-700 rounded md:bg-transparent md:p-0 dark:text-whit',
                      element.isActive ? 'text-white' : 'text-gray-500',
                    )}
                    aria-current="page"
                    onClick={() => changeActiveMenu(element.url)}
                  >
                    {element.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-2 items-center justify-evenly w-1/4">
          <div className="relative md:block w-full">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-600 dark:text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path stroke="currentColor" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
              <span className="sr-only">Search icon</span>
            </div>
            <input
              type="text"
              id="search-navbar"
              className="block w-full p-2 pl-10 text-sm text-gray-900 border-2 border-gray-300 rounded-xl bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-500 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search..."
            />
          </div>
        </div>

        <div className="flex flex-1 items-center justify-end">
          <button
            type="button"
            className="text-blue-300 h-9 bg-blue-800 hover:bg-blue-800 font-medium rounded-2xl text-sm px-4 py-2 text-center me-3"
          >
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
