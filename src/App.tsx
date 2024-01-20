import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Suspense, lazy } from 'react';
const Home = lazy(() => import('./Pages/Home'));

const App: React.FC = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<p>Loading...</p>}>
        <Home />
      </Suspense>
    </QueryClientProvider>
  );
};

export default App;
