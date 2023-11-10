import clsx from 'clsx';
import { FieldError } from 'react-hook-form';

interface WrapperProps {
  children: React.ReactNode;
  labelValue?: string;
  className?: string;
  error?: FieldError | undefined;
}

function FieldWrapper({ labelValue, className, error, children }: WrapperProps) {
  return (
    <div>
      <label className={clsx('block text-sm font-medium text-white', className)}>
        {labelValue}
        {children}
      </label>
      {error?.message && (
        <div role="alert" aria-label={error.message} className=" mt-1 text-xs font-semibold text-red-600">
          {error.message}
        </div>
      )}
    </div>
  );
}

export type WrapperPassThroughProps = Omit<WrapperProps, 'className' | 'children'>;
export default FieldWrapper;
