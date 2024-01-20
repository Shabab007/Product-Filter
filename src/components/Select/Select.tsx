// Select.tsx
import React from 'react';
import { SelectProps } from '../FilterComponentWrapper/FilterComponentWrapper';

const Select: React.FC<SelectProps> = ({ value, onChange, options, name }) => {
  const handleChange = (event: any) => {
    console.log(event.target.name);
    onChange(event);
  };
  return (
    <select
      value={value}
      name={name}
      onChange={handleChange}
      className="p-2 mr-2 rounded"
    >
      {options?.map(option => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
