import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="m-5 rounded-lg shadow">
      <hr className="my-6 border-gray-700 sm:mx-auto lg:my-5" />
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
