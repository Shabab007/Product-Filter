import { ProductData } from '../components/ProductList/types';
import { useQuery } from '@tanstack/react-query';
import ProductLayout from '../Layout/ProductLayout/ProductLayouts';
import { mainURl } from '../constants/url';

const fetchData = async (url: string) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }
  const data = await response.json();
  return data;
};
const Home = () => {
  const {
    data: products,
    isLoading,
    isError,
  } = useQuery<ProductData[], Error>({
    queryKey: ['products'],
    queryFn: () => fetchData(mainURl + 'products'),
  });

  const {
    data: categories,
    isError: categoryError,
    isLoading: categoryLoading,
  } = useQuery<string[], Error>({
    queryKey: ['categories'],
    queryFn: () => fetchData(mainURl + 'products/categories'),
  });

  const loading = isLoading || categoryLoading;
  const error = isError || categoryError;

  if (loading) {
    return <>loading...</>;
  }
  if (error) {
    return <>Please check your internet connection</>;
  }
  if (products && categories) {
    return <ProductLayout products={products} categories={categories} />;
  }
};

export default Home;
