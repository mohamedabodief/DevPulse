import { cn } from '../utils/cn';
import FeatureCard from './FeatureCard';

const gridStyles = cn(
  'mt-20 grid grid-cols-1 gap-8 md:grid-cols-3',
  'w-full max-w-5xl',
);
function Features({ data }) {
  return (
    <div className={gridStyles}>
      {data.map((feature) => (
        <FeatureCard
          key={feature.title}
          title={feature.title}
          description={feature.description}
          className={feature.className}
        />
      ))}
    </div>
  );
}

export default Features;
