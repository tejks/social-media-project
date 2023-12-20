import clsx from 'clsx';
import { UseFormRegisterReturn } from 'react-hook-form';
import FieldWrapper, { WrapperPassThroughProps } from './FieldWrapper';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>, WrapperPassThroughProps {
  register: UseFormRegisterReturn;
  type?: 'text' | 'number' | 'email' | 'password';
  className?: string;
}

function Input({ type = 'text', className = '', labelValue, register, error, ...rest }: InputProps) {
  return (
    <FieldWrapper labelValue={labelValue} error={error}>
      <div className="mt-1 rounded-3xl bg-gradient-to-r from-[#FB9D1F] to-[#1C5C75] p-0.5 text-center font-semibold text-white">
        <div className="rounded-3xl bg-black">
          <input
            type={type}
            className={clsx(
              'w-full rounded-3xl  bg-transparent px-5 py-3 text-base text-white placeholder-gray-400',
              className,
            )}
            {...register}
            {...rest}
          />
        </div>
      </div>
    </FieldWrapper>
  );
}

export default Input;
