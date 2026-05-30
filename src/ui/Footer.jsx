import { cn } from '../utils/cn';

const footerStyles = cn(
  'flex h-10 w-full items-center justify-center p-4 text-lg font-bold',
  'bg-gray-300 dark:bg-gray-800',
  'text-gray-800 dark:text-gray-200',
);
function Footer() {
  return <footer className={footerStyles}>copyright &copy; 2026</footer>;
}

export default Footer;
