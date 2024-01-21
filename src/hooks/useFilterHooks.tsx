import { useCallback } from 'react';
import { useFilterContext } from '../context/FilterContext/FilterContext';
import { SortTypes } from '../Layout/ProductLayout/types';

export const useFilterHooks = () => {
  const { filters, setFilters } = useFilterContext();

  const handleDynamcValue = (name: string) => {
    return filters[name];
  };

  const setFilterValue = useCallback((name: string, value: string) => {
    setFilters(state => ({
      ...state,
      [name]: value,
    }));
  }, []);

  const handleFilterChange = useCallback((e: any) => {
    switch (e.type) {
      case 'click': {
        setFilterValue(e.target.title, e.target.innerText);
        break;
      }
      default:
        setFilterValue(e.target.name, e.target.value);
    }
  }, []);

  const selectCategory = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setFilters(state => ({
        ...state,
        category: e.target.checked
          ? [...state.category, e.target.name]
          : state.category.filter(cat => cat !== e.target.name),
      }));
    },
    [setFilters]
  );

  const handleResetFilter = useCallback(() => {
    setFilters({
      productName: '',
      category: [],
      priceRange: '',
      rating: '',
      sortBy: SortTypes.NONE,
    });
  }, [setFilters]);

  return {
    productName: filters.productName,
    priceRange: filters.priceRange,
    handleFilterChange,
    handleResetFilter,
    selectCategory,
    selectedCategory: filters.category,
    rating: filters.rating,
    sortValue: filters.sortBy,
    handleDynamcValue,
  };
};
