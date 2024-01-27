import clsx from 'clsx';
import { forwardRef } from 'react';

interface DropdownProps {
  isOpen: boolean;
  isOwner: boolean;
  options: IDropdownOption[];
}

export interface IDropdownOption {
  label: string;
  color?: string;
  location?: string;
  requiredOwner?: boolean;
  dropdownEvent?: () => void;
}

const Dropdown = forwardRef<HTMLDivElement, DropdownProps>(({ options, isOpen, isOwner }, ref) => {
  return (
    <div
      id="dropdown"
      ref={ref}
      className={clsx(
        'absolute right-0 top-10 z-10 w-32 divide-y divide-gray-100 rounded-lg bg-gray-700 shadow',
        !isOpen ? 'hidden' : '',
      )}
    >
      <ul className="py-1.5 text-sm text-gray-200" aria-labelledby="dropdownDefaultButton">
        {options
          .filter((e) => !e.requiredOwner || isOwner)
          .map(({ label, color, dropdownEvent }, index) => (
            <li
              key={index}
              onClick={() => {
                if (dropdownEvent) dropdownEvent();
              }}
            >
              <p
                className={clsx(
                  'block cursor-pointer px-4 py-1.5 hover:bg-gray-600 hover:text-white',
                  color ? color : '',
                )}
              >
                {label}
              </p>
            </li>
          ))}
      </ul>
    </div>
  );
});

export default Dropdown;
