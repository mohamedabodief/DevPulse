import { cn } from '../utils/cn';
import Button from './Button';

const heroContainerStyles = cn('max-w-3xl space-y-8');

const titleStyles = cn(
  'text-4xl font-extrabold tracking-tight sm:text-6xl whitespace-nowrap',
  'text-gray-900 dark:text-gray-100',
);

const highlightStyles = cn('text-blue-600 dark:text-blue-500');

const descriptionStyles = cn(
  'mx-auto max-w-xl text-lg leading-relaxed',
  'text-gray-600 dark:text-gray-400',
);

const buttonGroupStyles = cn('flex justify-center gap-4 pt-6');

const buttonSizeStyles = cn(
  'px-7 py-3 text-base font-medium',
  'md:px-10 md:py-4 md:text-lg md:font-semibold',
);

function Hero({ onGetStarted, onLearnMore }) {
  return (
    <section className={heroContainerStyles}>
      <h1 className={titleStyles}>
        Discover the Pulse of <br />
        <span className={highlightStyles}>GitHub Developers</span>
      </h1>

      <p className={descriptionStyles}>
        DevPulse is your professional gateway to explore open-source
        contributions, analyze profiles, and stay connected with the tech
        ecosystem.
      </p>

      <div className={buttonGroupStyles}>
        <Button
          text="Get Started"
          className={buttonSizeStyles}
          onClick={onGetStarted}
        />
        <Button
          text="Learn More"
          variant="secondary"
          className={buttonSizeStyles}
          onClick={onLearnMore}
        />
      </div>
    </section>
  );
}

export default Hero;
