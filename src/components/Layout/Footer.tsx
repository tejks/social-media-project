import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="relative -z-20 mt-10 flex items-center justify-center border-t border-t-gray-600 p-3 shadow">
      <span className="block text-sm text-gray-400 sm:text-center">
        © 2023{' '}
        <a href="#" className="hover:underline">
          Tejks
        </a>
        . All Rights Reserved.
      </span>
    </footer>
  );
};

export default Footer;
