import { Fragment, useState, useCallback, useMemo } from 'react';
import { Dialog, Menu, Transition } from '@headlessui/react';
import {
  XMarkIcon,
  ChevronDownIcon,
  FunnelIcon,
} from '@heroicons/react/24/outline';
import Search from '../Search/Search';
import FilterForm from '../FilterForm';
import { sortOptions } from '../../constants/filterContstats';
import { FilterProps } from './types';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Filters(props: FilterProps) {
  const { children, filters, setFilters, categories } = props;
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const setFilterValue = useCallback((name: string, value: string) => {
    setFilters(state => ({
      ...state,
      [name]: value,
    }));
  }, []);

  const handleFilterChange = useCallback((e: any) => {
    switch (e.type) {
      case 'click': {
        setFilterValue(e.target.title, e.target.innerText);
        break;
      }
      default:
        setFilterValue(e.target.name, e.target.value);
    }
  }, []);

  // useCallback for toggleMobileFilters
  const toggleMobileFilters = useCallback(() => {
    setMobileFiltersOpen(prev => !prev);
  }, []);

  // useMemo for filterFormClass
  const filterFormClass = useMemo(() => 'p-4 hidden lg:block', []);

  return (
    <div className="bg-white">
      <Transition.Root show={mobileFiltersOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-40 lg:hidden"
          onClose={toggleMobileFilters}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                <div className="flex items-center justify-between px-4">
                  <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                  <button
                    type="button"
                    className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                    onClick={() => setMobileFiltersOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <p></p>

                {/* Filters */}

                <FilterForm
                  clasName={'p-4 mt-4 border-t border-gray-200'}
                  filters={filters}
                  categories={categories}
                  setFilters={setFilters}
                />
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex gap-4 items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
          <Search
            value={filters.productName}
            onChange={handleFilterChange}
            name="productName"
          />
          <div className="flex items-center">
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                  Sort
                  <ChevronDownIcon
                    className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                    aria-hidden="true"
                  />
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    {sortOptions.map(option => (
                      <Menu.Item key={option.name}>
                        {({ active }) => (
                          <div
                            title="sortBy"
                            id="sortBy"
                            onClick={handleFilterChange}
                            className={classNames(
                              option.current
                                ? 'font-medium text-gray-900'
                                : 'text-gray-500',
                              active ? 'bg-gray-100' : '',
                              'block px-4 py-2 text-sm'
                            )}
                          >
                            {option.name}
                          </div>
                        )}
                      </Menu.Item>
                    ))}
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
            <button
              type="button"
              className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
              onClick={toggleMobileFilters}
            >
              <span className="sr-only">Filters</span>
              <FunnelIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        <section aria-labelledby="products-heading" className="pb-24 pt-6">
          <h2 id="products-heading" className="sr-only">
            Products
          </h2>

          <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
            {/* Filters */}
            <FilterForm
              clasName={filterFormClass}
              filters={filters}
              categories={categories}
              setFilters={setFilters}
            />

            {/* Product grid */}
            <div className="lg:col-span-3">{children}</div>
          </div>
        </section>
      </main>
    </div>
  );
}