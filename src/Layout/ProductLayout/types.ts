export enum SortTypes {
  HIGH_TO_LOW_PRICE = 'Price: High to Low',
  LOW_TO_HIGH_PRICE = 'Price: Low to High',
  BEST_RATING = 'Best Rating',
  NONE = '',
}
import { ProductData } from '../../components/ProductList/types';

// }
export interface FilterTypes {
  productName: string;
  category: string[];
  priceRange: string;
  rating: string;
  sortBy: SortTypes;
  [key: string]: string | string[];
}
export interface FilterBarProps {
  filters: FilterTypes;
  setFilters: React.Dispatch<React.SetStateAction<FilterTypes>>;
  categories: string[];
}

export interface ProductLayoutProps {
  products: ProductData[];
  categories: string[];
}
