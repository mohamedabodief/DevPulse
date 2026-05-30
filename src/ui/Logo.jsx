import { Link } from 'react-router-dom';
import { cn } from '../utils/cn';

const logoStyles = cn('text-2xl font-bold', 'text-gray-800 dark:text-gray-200','md:text-3xl');
function Logo() {
  return (
    <Link
      to="/"
      className={logoStyles}
    >
      DevPulse
    </Link>
  );
}

export default Logo;
