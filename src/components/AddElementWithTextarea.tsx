import clsx from 'clsx';
import EmojiPicker, { Theme } from 'emoji-picker-react';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from './elements/Button';
import IconButton from './elements/IconButton';

interface AddElementWithTextareaProps {
  name: string;
  isAuth: boolean;
  textareaRows?: number;
  onAdd: (data: { text: string }) => void;
}

const AddElementWithTextarea: React.FC<AddElementWithTextareaProps> = ({ isAuth, onAdd, name, textareaRows }) => {
  const [textareaValue, setTextareaValue] = useState('');

  const onKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      setTextareaValue('');
      onAdd({ text: textareaValue });
    }
  };

  const emojiPickerRef = useRef<HTMLDivElement>(null);
  const [isEmojiPickerOpen, setIsEmojiPickerOpen] = useState(false);

  useEffect(() => {
    const handler = (event: MouseEvent) => {
      if (!emojiPickerRef.current?.contains(event.target as Node)) {
        setIsEmojiPickerOpen(false);
      }
    };

    document.addEventListener('mousedown', handler);

    return () => {
      document.removeEventListener('mousedown', handler);
    };
  });

  const context = (
    <div className={clsx(!isAuth ? 'opacity-80 blur-sm' : '')}>
      <div className="mb-4 rounded-lg rounded-t-lg border border-gray-700 bg-gray-800 px-4 py-2">
        <label htmlFor={name} className="sr-only">
          Your {name}
        </label>
        <textarea
          id={name}
          rows={textareaRows ?? 3}
          className="w-full border-0 bg-gray-800 px-0 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-0"
          placeholder={`Write a ${name}...`}
          required
          value={textareaValue}
          onChange={(e) => setTextareaValue(e.target.value)}
          onKeyDown={onKeyDown}
        ></textarea>
      </div>

      <div className="flex">
        <Button
          size="sm"
          type="button"
          onClick={() => {
            setTextareaValue('');
            onAdd({ text: textareaValue });
          }}
        >
          {`Add ${name}`}
        </Button>

        <IconButton onClick={() => setIsEmojiPickerOpen(!isEmojiPickerOpen)} className="ml-4">
          <svg
            className="h-5 w-5"
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

      {isEmojiPickerOpen ? (
        <div ref={emojiPickerRef} className="relative">
          <EmojiPicker
            theme={Theme.DARK}
            onEmojiClick={(data) => {
              setTextareaValue(textareaValue + data.emoji);
              setIsEmojiPickerOpen(false);
            }}
            skinTonesDisabled={true}
            style={{ position: 'absolute', top: '-20px', right: '50px', zIndex: '100' }}
          />
        </div>
      ) : null}
    </div>
  );

  return (
    <form className="relative mb-14 mt-8">
      {!isAuth ? (
        <div className="absolute z-10 flex h-full w-full items-center justify-center">
          <Link to={'/login'} className="font-bold text-[#FB9D1F]">
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
