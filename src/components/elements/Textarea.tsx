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
          'block w-full rounded-lg border border-gray-500 bg-gray-600 p-2.5 text-sm text-white placeholder-gray-400',
          className,
        )}
        {...register}
        {...rest}
      />
    </FieldWrapper>
  );
}

export default Textarea;
