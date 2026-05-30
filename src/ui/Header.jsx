import { cn } from '../utils/cn';
import { useDarkMode } from '../hooks/useDarkMode';
import SearchUser from './../features/users/SearchUser';
import Logo from './Logo';
import Button from './Button';

const headerStyles = cn(
  'flex flex-col gap-3 p-4 w-full items-center justify-center',

  'md:flex-row md:h-16 md:gap-0 md:justify-between',
);

const controlsContainerStyles = cn(
  'flex sm:flex-row items-center gap-3 w-full md:w-auto justify-center',
);

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
          className=" whitespace-nowrap shadow-sm"
        />
      </div>
    </header>
  );
}

export default Header;
