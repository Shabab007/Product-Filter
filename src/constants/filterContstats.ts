import StarRating from '../StarRating';
import Range from '../components/Range';

export const sortOptions = [
  { name: 'Best Rating', href: '#', current: false },
  { name: 'Price: Low to High', href: '#', current: false },
  { name: 'Price: High to Low', href: '#', current: false },
];

export const filterOptions = [
  {
    id: 'priceRange',
    name: 'Price Range',
    Component: Range,
  },
  {
    id: 'rating',
    name: 'Rating',
    Component: StarRating,
  },
];
