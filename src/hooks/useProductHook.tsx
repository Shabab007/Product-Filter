import { useProductContext } from '../context/ApiContext/ApiContext';

export const useProductHook = () => {
  const {
    products,
    categories,
    isLoadingProducts,
    isErrorProducts,
    isLoadingCategories,
    isErrorCategories,
  } = useProductContext();
  return {
    loading: isLoadingProducts || isLoadingCategories,
    error: isErrorCategories || isErrorProducts,
    products,
    categories,
  };
};
