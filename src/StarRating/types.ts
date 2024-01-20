import { FilterProps } from '../components/FilterComponentWrapper/types';

export interface StarRatingProps extends FilterProps<number> {
  rating?: number;
  totalStars?: number;
  canChange?: boolean;
}
