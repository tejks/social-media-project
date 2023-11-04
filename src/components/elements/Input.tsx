import clsx from 'clsx';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    type?: "text" | "number" | "email" | "password";
    className?: string;
}

// What about wrapper with div and label?
function Input({ type = "text", className = "", ...rest}: Props){
    return (
        <input 
            type={type} 
            className={clsx(
                "bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5",
                className
            )}
            {...rest}
        />
    )
}

export default Input;