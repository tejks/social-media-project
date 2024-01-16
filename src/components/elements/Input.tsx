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
      <div
        className={clsx(
          'mt-1 rounded-3xl bg-gradient-to-r from-[#FB9D1F] to-[#1C5C75] p-0.5 text-center font-semibold text-white',
          ...className,
        )}
      >
        <div className="rounded-3xl bg-black">
          <input
            type={type}
            className="w-full rounded-3xl bg-transparent px-3 py-2 text-sm font-normal text-white placeholder-gray-400 placeholder:italic placeholder:text-slate-400 lg:px-5 lg:py-3 lg:text-base"
            {...register}
            {...rest}
          />
        </div>
      </div>
    </FieldWrapper>
  );
}

export default Input;
