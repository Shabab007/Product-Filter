import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Suspense, lazy } from 'react';
import { ProductContextProvider } from './context/ApiContext/ApiContextProvider';
const Home = lazy(() => import('./Pages/Home'));

const App: React.FC = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ProductContextProvider>
        <Suspense fallback={<p>Loading...</p>}>
          <Home />
        </Suspense>
      </ProductContextProvider>
    </QueryClientProvider>
  );
};

export default App;
