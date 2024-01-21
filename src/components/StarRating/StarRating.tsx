import React from 'react';
import { StarRatingProps } from './types';
import Star from './Star';

const StarRating: React.FC<StarRatingProps> = ({
  value = 1,
  totalStars = 5,
  onChange,
  name = 'rating',
  canChange = true,
}) => {
  const stars = Array.from({ length: totalStars }, (_, index) => index + 1);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (canChange && onChange) {
      onChange(e);
    }
  };
  return (
    <div className="flex">
      {stars.map(star => (
        <label key={star} className="cursor-pointer">
          <input
            type="radio"
            name={name}
            value={star}
            checked={star === value}
            onChange={handleChange}
            className="sr-only"
          />
          <Star
            className={`h-5 w-5 ${
              star <= value ? 'text-yellow-500' : 'text-gray-300'
            }`}
          />
        </label>
      ))}
    </div>
  );
};

export default StarRating;
