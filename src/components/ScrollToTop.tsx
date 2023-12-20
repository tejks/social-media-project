import clsx from 'clsx';
import { useEffect, useState } from 'react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-4 right-4">
      <button
        type="button"
        onClick={scrollToTop}
        className={clsx(
          isVisible ? '' : 'hidden',
          'inline-flex items-center rounded-full bg-[#1C5C75] p-3 shadow-sm transition-opacity hover:bg-[#1c5c75]',
        )}
      >
        <svg
          className="h-6 w-6 text-[#FB9D1F]"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
        </svg>
      </button>
    </div>
  );
};

export default ScrollToTop;
