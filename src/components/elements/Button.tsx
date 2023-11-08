import clsx from 'clsx';
import { useNavigate } from 'react-router-dom';

const colors = {
  primary: 'bg-sky-800 text-sky-200 hover:bg-sky-900',
  inverse: 'text-sky-200 bg-sky-800',
};

const sizes = {
  sm: 'py-2 px-4 text-sm font-medium',
  md: 'py-3 px-6 text-sm font-medium',
  lg: 'py-3 px-8 text-sm font-medium',
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  color?: keyof typeof colors;
  size?: keyof typeof sizes;
  type?: 'button' | 'submit';
  to?: string;
  className?: string;
}

function Button({
  children,
  onClick,
  color = 'primary',
  size = 'sm',
  type = 'button',
  className = '',
  to,
  ...rest
}: ButtonProps) {
  const navigate = useNavigate();

  return (
    <button
      type={type}
      className={clsx(
        'inline-block ease-in duration-200 shadow-2xl hover:shadow-sky-300/50 rounded-2xl',
        colors[color],
        sizes[size],
        className,
      )}
      onClick={to ? () => navigate(to) : onClick}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
