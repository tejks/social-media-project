import clsx from 'clsx';
import { forwardRef } from 'react';

interface DropdownProps {
  isOpen: boolean;
  options: IDropdownOption[];
}

interface IDropdownOption {
  label: string;
  color?: string;
  requiredOwner?: boolean;
  dropdownEvent?: () => void;
}

const Dropdown = forwardRef<HTMLDivElement, DropdownProps>(({ options, isOpen }, ref) => {
  return (
    <div
      id="dropdown"
      ref={ref}
      className={clsx(
        'absolute top-10 right-0 z-10 divide-y divide-gray-100 rounded-lg shadow w-32 bg-gray-700',
        !isOpen ? 'hidden' : '',
      )}
    >
      <ul className="py-1.5 text-sm text-gray-200" aria-labelledby="dropdownDefaultButton">
        {options.map(({ label, color }, index) => (
          <li key={index}>
            <p
              className={clsx(
                'block px-4 py-1.5 hover:bg-gray-600 hover:text-white cursor-pointer',
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

// import React, { useState, useRef, useEffect, ForwardRefExoticComponent } from 'react';

// export default function withClickOutside(WrappedComponent: ForwardRefExoticComponent<any>) {
//   const Component = (props: any) => {
//     const [open, setOpen] = useState(false);

//     const ref = useRef<HTMLDivElement>();

//     useEffect(() => {
//       const handleClickOutside = (event: React.MouseEvent<HTMLDivElement>) => {
//         if (ref.current && ref.current.contains(event.target)) {
//           setOpen(false);
//         }
//       };
//       document.addEventListener('mousedown', handleClickOutside);

//       return () => {
//         document.removeEventListener('mousedown', handleClickOutside);
//       };
//     }, [ref]);

//     return <WrappedComponent open={open} setOpen={setOpen} ref={ref} {...props} />;
//   };

//   return Component;
// }
