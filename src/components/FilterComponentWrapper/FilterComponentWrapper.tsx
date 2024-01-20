import React from 'react';
import { FilterDefinition } from './types';

const FilterComponentWrapper: React.FC<FilterDefinition<any>> = ({
  id,
  Component,
  value,
  onChange,
}) => {
  return (
    <div key={id}>
      <Component name={id} value={value} onChange={onChange} />
    </div>
  );
};

export default FilterComponentWrapper;
