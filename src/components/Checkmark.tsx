const Checkmark = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-auto w-auto"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle cx="12" cy="12" r="12" fill="var(--turquoise)" />
      <path strokeWidth={3} d="M5 13l4 4L19 7" fill="none" stroke="white" />
    </svg>
  );
};

export default Checkmark;
