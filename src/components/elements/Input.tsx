import clsx from 'clsx';
import FieldWrapper, { WrapperPassThroughProps } from './FieldWrapper';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>, WrapperPassThroughProps {
  type?: 'text' | 'number' | 'email' | 'password';
  className?: string;
}

function Input({ type = 'text', className = '', labelValue, ...rest }: InputProps) {
  return (
    <FieldWrapper labelValue={labelValue}>
      <input
        type={type}
        className={clsx(
          'bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5',
          className,
        )}
        {...rest}
      />
    </FieldWrapper>
  );
}

export default Input;
