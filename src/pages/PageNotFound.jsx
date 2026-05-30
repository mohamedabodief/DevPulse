import { cn } from '../utils/cn';

const erorrStyles = cn(
  'flex h-screen w-full items-center justify-center',
  'text-4xl font-bold',
  'bg-gray-200 dark:bg-gray-600',
  'text-gray-800 dark:text-gray-200',
);

function PageNotFound() {
  return <div className={erorrStyles}>Page Not Found</div>;
}

export default PageNotFound;
