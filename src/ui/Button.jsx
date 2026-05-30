import { cn } from '../utils/cn';

const variants = {
  primary:
    'flex items-center justify-center rounded-2xl bg-gray-800 p-2 text-white hover:bg-gray-600 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-500',
  secondary:
    'flex items-center justify-center rounded-2xl bg-gray-200 p-2 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600',
  danger:
    'flex items-center justify-center rounded-2xl bg-red-500 p-2 text-white hover:bg-red-600',
};
function Button({
  text,
  onClick,
  type = 'button',
  variant = 'primary',
  className,
  ...props
}) {
  return (
    <button
      type={type}
      className={cn(variants[variant], className)}
      onClick={onClick}
      {...props}
    >
      {text}
    </button>
  );
}

export default Button;
