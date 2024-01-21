import React, { createContext, useContext } from 'react';
import { FilterTypes } from '../../Layout/ProductLayout/types';

interface FilterContextProps {
  filters: FilterTypes;
  setFilters: React.Dispatch<React.SetStateAction<FilterTypes>>;
}

export const FilterContext = createContext<FilterContextProps | undefined>(
  undefined
);

export const useFilterContext = (): FilterContextProps => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error(
      'useProductContext must be used within a ProductContextProvider'
    );
  }
  return context;
};
