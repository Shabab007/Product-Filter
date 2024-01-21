const Star = (props: { className: string }) => {
  const { className } = props;
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className={className}
      >
        <path
          fillRule="evenodd"
          d="M10 2a1 1 0 0 1 .755.35l2.822 3.465 5.698.83a1 1 0 0 1 .553 1.705l-4.083 3.15 1.54 5.688a1 1 0 0 1-1.497 1.054L10 15.066l-5.29 3.63a1 1 0 0 1-1.497-1.054l1.54-5.688-4.083-3.15a1 1 0 0 1 .553-1.705l5.698-.83L9.245 2.35A1 1 0 0 1 10 2z"
        />
      </svg>
    </div>
  );
};

export default Star;
