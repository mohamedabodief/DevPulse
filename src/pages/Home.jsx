import { useNavigate } from 'react-router-dom';
import { cn } from '../utils/cn';
import Hero from '../ui/Hero';
import Features from '../ui/Features';

const mainLayoutStyles = cn(
  'flex flex-1 flex-col items-center justify-center',
  'p-6 text-center transition-colors duration-300',
);

const featuresData = [
  {
    title: 'Real-time Insights',
    description:
      'Fetch live data directly from GitHub API with optimized React Query hooks.',
    className: '',
  },
  {
    title: 'Clean Engineering',
    description:
      'Built with a feature-based architecture for maximum scalability and maintainability.',
    className: 'shadow-lg md:scale-110',
  },
  {
    title: 'Adaptive UI',
    description:
      'Fully responsive design with a seamless Dark Mode experience out of the box.',
    className: '',
  },
];

function Home() {
  const navigate = useNavigate();
  const handleGetStarted = () => {
    document.querySelector('input')?.focus();
  };

  const handleLearnMore = () => {
    navigate('/about');
  };

  return (
    <main className={mainLayoutStyles}>
      <Hero
        onGetStarted={handleGetStarted}
        onLearnMore={handleLearnMore}
      />

      <Features data={featuresData} />
    </main>
  );
}

export default Home;
