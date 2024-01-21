import ProductLayout from '../Layout/ProductLayout/ProductLayouts';
import ProductContextProvider from '../context/FilterContext';
import { useProductHook } from '../hooks/useProductHook';

const Home = () => {
  const { products, categories, loading, error } = useProductHook();

  if (loading) {
    return <>loading...</>;
  }
  if (error) {
    return <>Please check your internet connection</>;
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
