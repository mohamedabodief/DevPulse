import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import AppLayout from './ui/AppLayout';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import PageNotFound from './pages/PageNotFound';
import Home from './pages/Home';
import UserDetail from './features/users/UserDetail';
import About from './pages/About';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
      refetchOnWindowFocus: false, 
      retry: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route
              index
              element={<Navigate to="home" />}
            />
            <Route
              path="home"
              element={<Home />}
            />
            <Route
              path="*"
              element={<PageNotFound />}
            />
            <Route
              path="user/:username"
              element={<UserDetail />}
            />
          </Route>
          <Route
            path="/about"
            element={<About />}
          />
        </Routes>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: '8px' }}
        toastOptions={{
          success: { duration: 3000 },
          error: { duration: 5000 },
          style: {
            fontSize: '16px',
            maxWidth: '500px',
            padding: '16px 24px',
            backgroundColor: '#f3f4f6',
            color: '#111111',
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
