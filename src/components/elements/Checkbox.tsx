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
    <div className="flex group items-center">
      <input
        id={id}
        type="checkbox"
        className={clsx('w-4 h-4 border rounded bg-gray-50 accent-sky-800 cursor-pointer  float-left', className)}
        {...register}
        {...rest}
      />
      <label htmlFor={id} className="text-sm font-medium text-white cursor-pointer ml-2 mb-0.25">
        {labelValue}
      </label>
      {error?.message && (
        <div role="alert" aria-label={error.message} className="block text-xs font-semibold text-red-600 ml-2 mt-0.25">
          {error.message}
        </div>
      )}
    </div>
  );
}

export default Checkbox;
