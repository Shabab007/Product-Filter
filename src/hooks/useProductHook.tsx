import { useProductContext } from '../context/ApiContext/ApiContext';

export const useProductHook = () => {
  const {
    products,
    categories,
    isLoadingProducts,
    isErrorProducts,
    isLoadingCategories,
    isErrorCategories,
    refetchCategories,
    refetchProducts,
  } = useProductContext();

  const handleReload = () => {
    refetchCategories();
    refetchProducts();
  };
  return {
    loading: isLoadingProducts || isLoadingCategories,
    error: isErrorCategories || isErrorProducts,
    products,
    categories,
    handleReload,
  };
};
