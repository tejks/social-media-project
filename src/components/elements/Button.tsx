import clsx from 'clsx';
import { useNavigate } from 'react-router-dom';

const colors = {
  primary: '',
  outline: '',
};

const sizes = {
  sm: 'py-2 px-6 text-sm font-medium',
  md: 'py-3 px-8 text-sm font-medium',
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
  // color = 'primary',
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
        'inline-block rounded-3xl bg-gradient-to-r from-[#FB9D1F] to-[#1C5C75] font-bold text-white shadow-2xl duration-200 ease-in hover:shadow-sky-300/50',
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
