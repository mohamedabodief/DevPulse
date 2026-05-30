import { useNavigate } from 'react-router-dom';
import { cn } from '../utils/cn';
import Button from '../ui/Button';

const containerStyles = cn(
  'max-w-4xl mx-auto my-12 p-6 w-full text-center space-y-12 animate-fade-in',
);

const headerStyles = cn('space-y-3 pt-6');

const subtitleStyles = cn(
  'text-xs font-bold tracking-widest text-blue-600 dark:text-blue-400',
  'uppercase bg-blue-50 dark:bg-blue-950/40 px-3 py-1.5 rounded-full inline-block',
);

const titleStyles = cn(
  'text-4xl font-black tracking-tight sm:text-6xl pb-2',
  'bg-gradient-to-r from-gray-900 via-blue-900 to-gray-950 bg-clip-text text-transparent',
  'dark:from-white dark:via-blue-400 dark:to-gray-200',
);

const heroCardStyles = cn(
  'relative p-8 rounded-2xl border text-center transition-all duration-300',
  'border-gray-200 bg-gradient-to-b from-white to-gray-50/50 shadow-sm',
  'dark:border-gray-800/80 dark:bg-gradient-to-b dark:from-gray-900/50 dark:to-gray-950/30',
  'hover:shadow-md hover:border-gray-300 dark:hover:border-gray-700',
);

const descriptionStyles = cn(
  'text-lg sm:text-xl leading-relaxed text-gray-600 dark:text-gray-300 font-normal max-w-3xl mx-auto',
);

const techGridStyles = cn('grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4');

const techCardStyles = cn(
  'p-4 rounded-xl border transition-all duration-200',
  'border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-800/20',
  'flex flex-col items-center justify-center gap-2 hover:border-blue-500 dark:hover:border-blue-400',
);

const architectureSectionStyles = cn(
  'p-6 rounded-2xl bg-gray-50 dark:bg-gray-800/10 text-left border border-gray-100 dark:border-gray-800/40 space-y-4',
);

function About() {
  const navigate = useNavigate();

  const techStack = [
    { name: 'React 19', desc: 'Component-Based UI', icon: '⚛️' },
    { name: 'React Query', desc: 'State & Cache Mgmt', icon: '🔄' },
    { name: 'Tailwind CSS', desc: 'Utility-First Styling', icon: '🎨' },
    { name: 'React Hook Form', desc: 'Optimized Form Handling', icon: '📝' },
  ];

  return (
    <main className={containerStyles}>
      <div className={headerStyles}>
        <span className={subtitleStyles}>About The Project</span>
        <h1 className={titleStyles}>DevPulse</h1>
      </div>

      <div className={heroCardStyles}>
        <div className="pointer-events-none absolute left-1/2 top-0 hidden h-48 w-48 -translate-x-1/2 rounded-full bg-blue-500/5 blur-3xl dark:block" />

        <p className={descriptionStyles}>
          An advanced GitHub profiling application built for developers to
          seamlessly explore open-source contributions, analyze repositories,
          and visualize ecosystem pulse in real-time.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500">
          Built With Modern Tech Stack
        </h3>
        <div className={techGridStyles}>
          {techStack.map((tech) => (
            <div
              key={tech.name}
              className={techCardStyles}
            >
              <span className="text-2xl">{tech.icon}</span>
              <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                {tech.name}
              </h4>
              <p className="text-center text-xs text-gray-400 dark:text-gray-500">
                {tech.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className={architectureSectionStyles}>
        <h3 className="flex items-center gap-2 text-base font-bold text-gray-900 dark:text-gray-100">
          🏗️ Architectural Highlights
        </h3>
        <ul className="list-inside list-disc space-y-2 text-sm text-gray-600 dark:text-gray-400">
          <li>
            <span className="font-semibold text-gray-800 dark:text-gray-200">
              Feature-Based Directory:
            </span>{' '}
            Organized by scales and features for peak maintainability.
          </li>
          <li>
            <span className="font-semibold text-gray-800 dark:text-gray-200">
              Stale-While-Revalidate:
            </span>{' '}
            Zero lag UI transitions via React Query aggressive caching.
          </li>
          <li>
            <span className="font-semibold text-gray-800 dark:text-gray-200">
              Adaptive Dark Mode:
            </span>{' '}
            Smooth dark/light transitions with custom structural utils.
          </li>
        </ul>
      </div>

      <div className="pt-4">
        <Button
          text="Back to Dashboard"
          variant="secondary"
          className="px-8 py-3 text-sm font-semibold tracking-wide"
          onClick={() => navigate('/')}
        />
      </div>
    </main>
  );
}

export default About;
