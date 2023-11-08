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
          'border text-sm rounded-lg block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white',
          className,
        )}
        {...rest}
      />
    </FieldWrapper>
  );
}

export default Input;
