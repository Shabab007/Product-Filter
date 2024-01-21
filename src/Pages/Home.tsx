import ProductLayout from '../Layout/ProductLayout';
import Loader from '../components/Loader';
import ProductContextProvider from '../context/FilterContext';
import { useProductHook } from '../hooks/useProductHook';
import ErrorPage from './Error';

const Home = () => {
  const { products, categories, loading, error, handleReload } =
    useProductHook();

  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <ErrorPage onReload={handleReload} />;
  }
  if (products && categories) {
    return (
      <ProductContextProvider>
        <ProductLayout />
      </ProductContextProvider>
    );
  }
};

export default Home;
