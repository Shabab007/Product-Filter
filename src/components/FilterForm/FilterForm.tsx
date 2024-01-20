import React, { useCallback, useMemo } from 'react';
import { FilterFormProps } from './Types';
import FilterComponentWrapper from '../FilterComponentWrapper';
import Accordion from '../Accordion/Accordion';
import { filterOptions } from '../../constants/filterContstats';
import { SortTypes } from '../../Layout/ProductLayout/types';

const FilterForm = (props: FilterFormProps) => {
  const { categories, filters, setFilters, clasName } = props;

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

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setFilters(state => ({
        ...state,
        [e.target.name]: e.target.value,
      }));
    },
    [setFilters]
  );

  const categoryCheckboxes = useMemo(
    () =>
      categories.map((option, optionIdx) => (
        <div key={option} className="flex items-center">
          <input
            id={`filter-mobile-${option}-${optionIdx}`}
            name={option}
            defaultValue={option}
            onChange={selectCategory}
            type="checkbox"
            checked={filters.category.includes(option)}
            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
          />
          <label
            htmlFor={`filter-mobile-${option}-${optionIdx}`}
            className="ml-3 min-w-0 flex-1 text-gray-500"
          >
            {option}
          </label>
        </div>
      )),
    [categories, filters.category, selectCategory]
  );

  const accordionSections = useMemo(
    () =>
      filterOptions.map(section => (
        <Accordion key={section.id} section={section}>
          <FilterComponentWrapper
            key={section.id}
            {...section}
            value={filters[section.id] as string}
            onChange={handleChange}
          />
        </Accordion>
      )),
    [filters, handleChange]
  );

  return (
    <form className={clasName}>
      <h3 className="sr-only">Categories</h3>
      <ul
        role="list"
        className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900"
      >
        {categoryCheckboxes}
      </ul>

      {accordionSections}

      <div className="mt-4">
        <button
          type="button"
          className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
          onClick={handleResetFilter}
        >
          Reset Filter
        </button>
      </div>
    </form>
  );
};

export default FilterForm;