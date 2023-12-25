import clsx from 'clsx';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  register: UseFormRegisterReturn;
  error?: FieldError | undefined;
  id?: string;
  className?: string;
  labelValue?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function Checkbox({ id, className = '', labelValue = 'Check me', register, error, ...rest }: CheckboxProps) {
  return (
    <div className="group flex items-center">
      <input
        id={id}
        type="checkbox"
        className={clsx('float-left h-4 w-4 cursor-pointer rounded border bg-gray-50  accent-sky-800', className)}
        {...register}
        {...rest}
      />
      <label htmlFor={id} className="mb-0.25 ml-2 cursor-pointer text-sm font-medium text-white">
        {labelValue}
      </label>
      {error?.message && (
        <div role="alert" aria-label={error.message} className="ml-2 mt-0.25 block text-xs font-semibold text-red-600">
          {error.message}
        </div>
      )}
    </div>
  );
}

export default Checkbox;
