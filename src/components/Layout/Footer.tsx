import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="rounded-lg shadow m-5">
      <hr className="my-6 sm:mx-auto border-gray-700 lg:my-5" />
      <span className="block text-sm sm:text-center text-gray-400">
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
