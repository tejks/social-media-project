import clsx from 'clsx';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from './elements/Button';
import IconButton from './elements/IconButton';

interface AddElementWithTextareaProps {
  name: string;
  isAuth: boolean;
  onAdd: (data: { text: string }) => void;
}

const AddElementWithTextarea: React.FC<AddElementWithTextareaProps> = ({ isAuth, onAdd, name }) => {
  const [textareaValue, setTextareaValue] = useState('');

  const context = (
    <div className={clsx(!isAuth ? 'opacity-80 blur-sm' : '')}>
      <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <label htmlFor={name} className="sr-only">
          Your {name}
        </label>
        <textarea
          id={name}
          rows={3}
          className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
          placeholder={`Write a ${name}...`}
          required
          value={textareaValue}
          onChange={(e) => setTextareaValue(e.target.value)}
        ></textarea>
      </div>
      <div className="flex">
        <Button type="button" onClick={() => onAdd({ text: textareaValue })}>
          {`Add ${name}`}
        </Button>
        <IconButton className="ml-4">
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 18"
          >
            <path
              fill="currentColor"
              d="M13 5.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM7.565 7.423 4.5 14h11.518l-2.516-3.71L11 13 7.565 7.423Z"
            />
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M18 1H2a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"
            />
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 5.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM7.565 7.423 4.5 14h11.518l-2.516-3.71L11 13 7.565 7.423Z"
            />
          </svg>
        </IconButton>
        <IconButton>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13.408 7.5h.01m-6.876 0h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM4.6 11a5.5 5.5 0 0 0 10.81 0H4.6Z"
            />
          </svg>
        </IconButton>
      </div>
    </div>
  );
  return (
    <form className="relative mb-14 mt-8 opacity-80">
      {!isAuth ? (
        <div className="w-full h-full absolute z-10 flex justify-center items-center">
          <Link to={'/login'} className="text-sky-500 font-bold">
            Sign in to {name}
          </Link>
        </div>
      ) : (
        ''
      )}
      {context}
    </form>
  );
};

export default AddElementWithTextarea;
