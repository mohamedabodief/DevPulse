import { cn } from '../utils/cn';

const cardStyles =
  'rounded-xl border border-gray-200 p-6 bg-white transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-800/50';

const titleStyles = cn('mb-2 font-bold text-gray-800 dark:text-gray-200');
const descStyles = cn('text-sm text-gray-500 dark:text-gray-400');

function FeatureCard({ title, description, className }) {
  return (
    <div className={cn(cardStyles, className)}>
      <h3 className={titleStyles}>{title}</h3>
      <p className={descStyles}>{description}</p>
    </div>
  );
}

export default FeatureCard;
