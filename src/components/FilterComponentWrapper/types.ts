export interface FilterProps<T> {
  value: T;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
}

export interface SelectOption {
  value: string;
  label: string | JSX.Element | JSX.Element[];
}

export interface SelectProps extends FilterProps<string> {
  options?: SelectOption[];
}

export interface RangeProps extends FilterProps<string> {}
export interface FilterDefinition<T> {
  id: string;
  name: string;
  Component: React.FC<FilterProps<T>>;
  value: T;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
