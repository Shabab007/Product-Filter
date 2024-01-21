import { useMemo } from 'react';
import { FilterFormProps } from './Types';
import FilterComponentWrapper from '../FilterComponentWrapper';
import { filterOptions } from '../../constants/filterContstats';
import { useFilterHooks } from '../../hooks/useFilterHooks';
import { useProductHook } from '../../hooks/useProductHook';
import Category from '../Category';
import Accordion from '../Accordion';

const FilterForm = (props: FilterFormProps) => {
  const { clasName } = props;
  const { categories } = useProductHook();
  const { handleFilterChange, handleDynamcValue, handleResetFilter } =
    useFilterHooks();

  const categoryCheckboxes = useMemo(
    () =>
      categories?.map((option, optionIdx) => (
        <Category key={optionIdx} option={option} />
      )),
    [categories]
  );

  const accordionSections = useMemo(
    () =>
      filterOptions.map(section => (
        <Accordion key={section.id} section={section}>
          <FilterComponentWrapper
            key={section.id}
            {...section}
            value={handleDynamcValue(section.id) as string}
            onChange={handleFilterChange}
          />
        </Accordion>
      )),
    [handleDynamcValue, handleFilterChange]
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
