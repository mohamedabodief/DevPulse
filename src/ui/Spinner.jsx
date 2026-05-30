import { cn } from '../utils/cn';

const spinnerWrapperStyles = cn(
  'flex items-center justify-center'
);

const spinnerTrackStyles = cn(
  'animate-spin rounded-full border-t-blue-600 dark:border-t-blue-500',
  'border-gray-200 dark:border-gray-700'
);

function Spinner({ size = 'medium', className }) {
  const sizes = {
    small: 'w-5 h-5 border-2',
    medium: 'w-10 h-10 border-4',
    large: 'w-16 h-16 border-4',
  };

  return (
    <div className={spinnerWrapperStyles}>
      <div 
        className={cn(spinnerTrackStyles, sizes[size], className)} 
      />
    </div>
  );
}

export default Spinner;