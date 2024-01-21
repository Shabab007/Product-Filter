import { createContext, useContext } from 'react';
import { ProductData } from '../../components/ProductList/types';
// Import your data fetching function

export interface ProductContextProps {
  products: ProductData[] | undefined;
  categories: string[] | undefined;
  isLoadingProducts: boolean;
  isErrorProducts: boolean;
  isLoadingCategories: boolean;
  isErrorCategories: boolean;
}

export const ProductContext = createContext<ProductContextProps | undefined>(
  undefined
);

export const useProductContext = (): ProductContextProps => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error(
      'useProductContext must be used within a ProductContextProvider'
    );
  }
  return context;
};
