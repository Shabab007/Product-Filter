import { useMemo, useState } from 'react';
import Filters from '../../components/Filters';
import ProductList from '../../components/ProductList';
import { FilterTypes, ProductLayoutProps, SortTypes } from './types';
import { filterAndSortProducts } from '../../helpers/FilterHelper';

const ProductLayout = (props: ProductLayoutProps) => {
  const { products, categories } = props;
  const [filters, setFilters] = useState<FilterTypes>({
    productName: '',
    category: [],
    priceRange: '',
    rating: '',
    sortBy: SortTypes.NONE,
  });
  const filteredAndSortedProducts = useMemo(
    () => filterAndSortProducts(products, filters),
    [products, filters]
  );
  return (
    <div className="mx-auto max-w-2xl lg:max-w-7xl">
      <Filters
        filters={filters}
        setFilters={setFilters}
        categories={categories}
      >
        <ProductList products={filteredAndSortedProducts} />
      </Filters>
    </div>
  );
};

export default ProductLayout;
