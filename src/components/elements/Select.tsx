import clsx from 'clsx';
import FieldWrapper, { WrapperPassThroughProps } from './FieldWrapper';
import { UseFormRegisterReturn } from 'react-hook-form';

export interface Option {
  label: React.ReactNode;
  value: string | number;
}

interface SelectProps extends React.InputHTMLAttributes<HTMLSelectElement>, WrapperPassThroughProps {
  register: UseFormRegisterReturn;
  options: Option[];
  className?: string;
}

function Select({ className = '', labelValue, options, register, error, ...rest }: SelectProps) {
  return (
    <FieldWrapper labelValue={labelValue} error={error}>
      <select
        defaultValue={""}
        className={clsx(
          'border bg-gray-600 border-gray-500 placeholder-gray-400 text-white focus:ring-primary-600 focus:border-primary-600 text-sm rounded-lg block w-full p-2.5',
          className,
        )}
        {...register}
        {...rest}
      >
        <option disabled={true} value="">
          Select...
        </option>
        {options.map(({ label, value }, index) => (
          <option key={index} value={value}>
            {label}
          </option>
        ))}
      </select>
    </FieldWrapper>
  );
}

export default Select;
