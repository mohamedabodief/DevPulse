import { cn } from '../utils/cn';
import { useDarkMode } from '../hooks/useDarkMode';
import SearchUser from './../features/users/SearchUser';
import Logo from './Logo';
import Button from './Button';

const headerStyles = cn(
  'flex h-16 w-full items-center justify-between p-4',
  'bg-gray-300 dark:bg-gray-800',
  'text-gray-800 dark:text-gray-200',
  'transition-colors duration-300',
);

const controlsContainerStyles = cn('flex items-center gap-4');

function Header() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <header className={headerStyles}>
      <Logo />

      <div className={controlsContainerStyles}>
        <SearchUser />

        <Button
          onClick={toggleDarkMode}
          text={isDarkMode ? '☀️ Light' : '🌙 Dark'}
          aria-label="Toggle Dark Mode"
        />
      </div>
    </header>
  );
}

export default Header;
