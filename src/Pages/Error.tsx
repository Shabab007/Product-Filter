interface ErrorPageProps {
  onReload: () => void;
}

const ErrorPage: React.FC<ErrorPageProps> = ({ onReload }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <p className="text-red-500 mb-4">
        Oops! Something went wrong. Please check your internet connection.
      </p>
      <button
        onClick={onReload}
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
      >
        Reload
      </button>
    </div>
  );
};

export default ErrorPage;
