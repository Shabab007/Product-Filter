import { useQuery } from '@tanstack/react-query';
import { ProductData } from '../../components/ProductList/types';
import { mainURl } from '../../constants/url';
import { ProductContext, ProductContextProps } from './ApiContext';
export const fetchData = async (url: string) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }
  const data = await response.json();
  return data;
};

export const ProductContextProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const {
    data: products,
    isLoading: isLoadingProducts,
    isError: isErrorProducts,
  } = useQuery<ProductData[], Error>({
    queryKey: ['products'],
    queryFn: () => fetchData(mainURl + 'products'),
  });

  const {
    data: categories,
    isLoading: isLoadingCategories,
    isError: isErrorCategories,
  } = useQuery<string[], Error>({
    queryKey: ['categories'],
    queryFn: () => fetchData(mainURl + 'products/categories'),
  });

  const value: ProductContextProps = {
    products,
    categories,
    isLoadingProducts,
    isErrorProducts,
    isLoadingCategories,
    isErrorCategories,
  };

  //   useEffect(() => {
  //     // Additional logic after fetching initial data
  //   }, [products, categories]);

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
