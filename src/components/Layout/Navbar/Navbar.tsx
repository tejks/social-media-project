/* eslint-disable no-constant-condition */
import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

import { useTypedSelector } from '@common/store';
import { selectCurrentUser } from '@common/store/authSlice';

import Button from '@components/elements/Button';
import UserProfile from './UserProfile';

import { useSignoutMutation } from '@/common/API/services/auth';
import backgroundElement1 from '@assets/background-element-1.png';
import backgroundElement2 from '@assets/background-element-2.png';
import logo from '@assets/logo.jpg';

interface NavbarMenuElement {
  name: string;
  url: string;
  isActive: boolean;
  isMobile?: boolean;
}

const Navbar: React.FC = () => {
  const location = useLocation();
  const user = useTypedSelector(selectCurrentUser);
  const [signOut] = useSignoutMutation();

  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [navbarMenu, setNavbarMenu] = useState<NavbarMenuElement[]>([
    { name: 'Home', url: '/', isActive: true },
    { name: 'Posts', url: '/posts', isActive: false },
    { name: 'Albums', url: '/albums', isActive: false },
    { name: 'Photos', url: '/photos', isActive: false },
    { name: 'Sign in', url: '/login', isActive: false, isMobile: true },
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
    <nav className="fixed z-20 w-full bg-[#020204]">
      <div className="hidden justify-between p-4 lg:flex">
        <div className="flex flex-1 items-center justify-start">
          <Link to={'/'}>
            <img src={logo} alt="wolf logo" width={50} />
          </Link>

          <div className="ml-5" id="navbar-default">
            <ul className="flex font-normal">
              {navbarMenu
                .filter(({ isMobile }) => !isMobile)
                .map((element) => (
                  <li key={element.name}>
                    <NavLink
                      to={element.url}
                      className={clsx(
                        'block bg-transparent py-2 pl-3 pr-4 font-semibold',
                        element.isActive
                          ? 'bg-gradient-to-r from-[#FB9D1F] to-[#1C5C75] bg-clip-text text-transparent'
                          : 'text-gray-500 hover:text-[#1C5C75]',
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

        {!user ? (
          <div className="mx-5 flex flex-1 items-center justify-end">
            <Button type="button" size="sm" to="/login">
              Sign in
            </Button>
          </div>
        ) : (
          <UserProfile email={user.email} />
        )}
      </div>

      <div className="flex justify-end px-5 py-3 lg:hidden">
        <div className="absolute left-0 top-0 z-10 w-full rotate-180 opacity-70">
          <img src={backgroundElement2} alt="" width={400} />
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          className={clsx('relative z-10 w-14 cursor-pointer', isNavbarOpen ? 'hidden' : '')}
          onClick={() => setIsNavbarOpen(!isNavbarOpen)}
        >
          <path
            stroke="#FB9D1F"
            strokeLinecap="round"
            strokeMiterlimit="10"
            strokeWidth="32"
            d="M80 160h352M80 256h352M80 352h352"
          />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          className={clsx('relative z-10 w-14 cursor-pointer', !isNavbarOpen ? 'hidden' : '')}
          onClick={() => setIsNavbarOpen(!isNavbarOpen)}
        >
          <path
            stroke="#FB9D1F"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="32"
            d="M368 368L144 144M368 144L144 368"
          />
        </svg>

        <div
          className={clsx(
            'fixed left-0 top-0 flex h-screen w-full items-center justify-center bg-[#020204]',
            !isNavbarOpen ? 'hidden' : '',
          )}
        >
          <nav className="h-1/2">
            <div className="flex justify-center">{user ? <UserProfile email={user.email} isMobile={true} /> : ''}</div>
            <ul className="mt-5 flex h-3/4 flex-col items-center justify-evenly">
              {navbarMenu
                .filter((element) => !(element.name === 'Sign in' && user))
                .map((element) => (
                  <li key={element.name}>
                    <NavLink
                      to={element.url}
                      className={clsx(
                        'block rounded-3xl bg-transparent  py-5 text-2xl font-semibold',
                        element.isActive
                          ? 'bg-gradient-to-r from-[#FB9D1F] to-[#1C5C75] bg-clip-text text-transparent'
                          : 'text-gray-500',
                      )}
                      aria-current="page"
                      onClick={() => setIsNavbarOpen(false)}
                    >
                      {element.name}
                    </NavLink>
                  </li>
                ))}
              {user ? (
                <NavLink
                  to={location}
                  onClick={() => {
                    setIsNavbarOpen(false);
                    signOut();
                  }}
                  className={clsx('block bg-transparent py-5 text-2xl font-semibold text-gray-500')}
                  aria-current="page"
                >
                  Sign out
                </NavLink>
              ) : null}
            </ul>
          </nav>

          <div className="absolute bottom-0 right-0 -z-10 rotate-180 opacity-70">
            <img src={backgroundElement1} alt="" width={200} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
