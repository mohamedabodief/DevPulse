import { Outlet } from 'react-router-dom';
import { cn } from '../utils/cn';
import Header from './Header';
import Footer from './Footer';

const appLayoutStyles = cn(
  'flex flex-col min-h-screen',
);

const outletStyles = cn('flex-1 w-full max-w-6xl mx-auto p-4');

function AppLayout() {
  return (
    <div className={appLayoutStyles}>
      <Header />
      <Outlet className={outletStyles} />
      <Footer />
    </div>
  );
}

export default AppLayout;
