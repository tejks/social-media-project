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
        'inline-flex justify-center p-2 rounded-lg cursor-pointer text-sky-100 hover:text-white hover:bg-gray-600',
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
