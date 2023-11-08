import clsx from 'clsx';

interface WrapperProps {
  labelValue?: string;
  className?: string;
  children: React.ReactNode;
}

function FieldWrapper({ labelValue, className, children }: WrapperProps) {
  return (
    <div>
      <label className={clsx('block text-sm font-medium text-white', className)}>
        {labelValue}
        {children}
      </label>
    </div>
  );
}

export type WrapperPassThroughProps = Omit<WrapperProps, 'className' | 'children'>;
export default FieldWrapper;
