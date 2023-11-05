import clsx from 'clsx';
import FieldWrapper, { WrapperPassThroughProps } from './FieldWrapper';

export interface IOption {
  label: React.ReactNode;
  value: string | number;
}

interface SelectProps extends React.InputHTMLAttributes<HTMLSelectElement>, WrapperPassThroughProps {
  options: IOption[];
  className?: string;
}

function Select({ className = '', labelValue, options, ...rest }: SelectProps) {
  return (
    <FieldWrapper labelValue={labelValue}>
      <select
        className={clsx(
          'bg-gray-50 border border-gray-300 text-gray-900 focus:ring-primary-600 focus:border-primary-600 text-sm rounded-lg block w-full p-2.5',
          className,
        )}
        {...rest}
      >
        <option disabled={true} selected={true} value="">
          -- Select --
        </option>
        {options.map(({ label, value }) => (
          <option key={label?.toString()} value={value}>
            {label}
          </option>
        ))}
      </select>
    </FieldWrapper>
  );
}

export default Select;
