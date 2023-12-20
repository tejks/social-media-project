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
      <label className={clsx('ml-5 block text-sm font-normal text-white', className)}>{labelValue}</label>
      {children}
      {error?.message && (
        <div role="alert" aria-label={error.message} className="ml-5 mt-1 text-xs font-semibold text-red-600">
          {error.message}
        </div>
      )}
    </div>
  );
}

export type WrapperPassThroughProps = Omit<WrapperProps, 'className' | 'children'>;
export default FieldWrapper;
