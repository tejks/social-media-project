import clsx from 'clsx';
import { useNavigate } from 'react-router-dom';

interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string | JSX.Element;
  type?: 'button' | 'submit';
  to?: string;
  className?: string;
}

const IconButton: React.FC<IconButtonProps> = ({
  children,
  onClick,
  type = 'button',
  className = '',
  to,
  ...rest
}: IconButtonProps) => {
  const navigate = useNavigate();

  return (
    <button
      type={type}
      className={clsx(
        'inline-flex cursor-pointer justify-center rounded-lg p-2 text-sky-100 hover:bg-gray-600 hover:text-white',
        className,
      )}
      onClick={to ? () => navigate(to) : onClick}
      {...rest}
    >
      {children}
    </button>
  );
};

export default IconButton;
