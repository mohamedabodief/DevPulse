import { cn } from '../utils/cn';
import Button from './Button';

const containerStyles = cn(
  'max-w-xl mx-auto my-16 p-8 text-center space-y-6 rounded-2xl border',
  'border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900',
);

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div className="flex min-h-[80vh] items-center justify-center p-4">
      <div className={containerStyles}>
        <span className="text-4xl">⚠️</span>

        <h1 className="text-2xl font-bold text-gray-950 dark:text-gray-50">
          Something went wrong
        </h1>

        <p className="max-h-40 overflow-auto rounded-lg bg-gray-50 p-3 text-left font-mono text-sm text-gray-600 dark:bg-gray-950 dark:text-gray-400">
          {error.message}
        </p>

        <div className="pt-2">
          <Button
            text="Try Again"
            variant="primary"
            className="px-6 py-2.5 font-medium"
            onClick={resetErrorBoundary}
          />
        </div>
      </div>
    </div>
  );
}

export default ErrorFallback;
