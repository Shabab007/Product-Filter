import { useFilterHooks } from '../../hooks/useFilterHooks';

const Search = () => {
  const { productName, handleFilterChange } = useFilterHooks();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleFilterChange(e);
  };

  return (
    <div className="relative mb-10 w-full flex  items-center justify-between rounded-md">
      <svg
        className="absolute left-2 block h-5 w-5 text-gray-400"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="8" className=""></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65" className=""></line>
      </svg>
      <input
        type="name"
        name="productName"
        value={productName}
        className="w-full bg-red text-[.7rem] md:text-xl h-12 cursor-text rounded-md border border-gray-100 bg-gray-100 py-4 pr-2 pl-12 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
        placeholder="Search"
        onChange={handleChange}
      />
    </div>
  );
};

export default Search;
