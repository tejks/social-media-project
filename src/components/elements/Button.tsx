import clsx from 'clsx';

const colors = {
  primary: 'bg-fuchsia-700 text-white',
  inverse: 'bg-white text-fuchsia-700',
};

const sizes = {
  sm: 'py-2 px-4 text-sm',
  md: 'py-2 px-6 text-md',
  lg: 'py-2 px-8 text-lg',
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  color?: keyof typeof colors;
  size?: keyof typeof sizes;
  type?: 'button' | 'submit';
  className?: string;
}

function Button({
  children,
  onClick,
  color = 'primary',
  size = 'md',
  type = 'button',
  className = '',
  ...rest
}: ButtonProps) {
  return (
    <button
      type={type}
      className={clsx(
        'inline-block px-5 py-3 text-sm font-medium text-white bg-fuchsia-700 rounded hover:bg-fuchsia-800 focus:outline-none focus:ring',
        colors[color],
        sizes[size],
        className,
      )}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
