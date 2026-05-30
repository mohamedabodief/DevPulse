import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './ui/ErrorFallback.jsx';
import { QueryCache } from '@tanstack/react-query';

const queryCache = new QueryCache();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => {
        queryCache.clear();
        window.location.replace('/');
      }}
    >
      <App />
    </ErrorBoundary>
  </StrictMode>,
);
