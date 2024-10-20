const Checkmark = () => {
  return (
    <div className="ml-auto relative h-0 -top-1 -right-4 w-1/4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-[3vw] w-[3vw]"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="12" r="12" fill="var(--turquoise)" />
        <path strokeWidth={3} d="M5 13l4 4L19 7" fill="none" stroke="white" />
      </svg>
    </div>
  );
};

export default Checkmark;
