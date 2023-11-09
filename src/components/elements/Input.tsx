import clsx from 'clsx';
import FieldWrapper, { WrapperPassThroughProps } from './FieldWrapper';
import { UseFormRegisterReturn } from 'react-hook-form';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>, WrapperPassThroughProps {
  register: UseFormRegisterReturn;
  type?: 'text' | 'number' | 'email' | 'password';
  className?: string;
}

function Input({ type = 'text', className = '', labelValue, register, error, ...rest }: InputProps) {
  return (
    <FieldWrapper labelValue={labelValue} error={error}>
      <input
        type={type}
        className={clsx(
          'border text-sm rounded-lg block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white',
          className,
        )}
        {...register}
        {...rest}
      />
    </FieldWrapper>
  );
}

export default Input;
