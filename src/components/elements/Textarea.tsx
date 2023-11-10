import clsx from 'clsx';
import FieldWrapper, { WrapperPassThroughProps } from './FieldWrapper';
import { UseFormRegisterReturn } from 'react-hook-form';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement>, WrapperPassThroughProps {
  register: UseFormRegisterReturn;
  className?: string;
}

function Textarea({ className = '', labelValue, register, error, ...rest }: TextareaProps) {
  return (
    <FieldWrapper labelValue={labelValue} error={error}>
      <textarea
        className={clsx(
          'block p-2.5 w-full rounded-lg text-sm border bg-gray-600 border-gray-500 placeholder-gray-400 text-white',
          className,
        )}
        {...register}
        {...rest}
      />
    </FieldWrapper>
  );
}

export default Textarea;
