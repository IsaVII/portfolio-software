const ClockCustomIcon = (props) => (
  <svg
    fill="none"
    stroke="currentColor"
    width="24px"
    height="24px"
    viewBox="0 0 192 192"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g transform="translate(16 16)">
      <circle
        cx="80"
        cy="80"
        r="74"
        strokeWidth="12"
        strokeLinejoin="round"
      />
      <path
        d="M80 30v50l40 32"
        strokeWidth="12"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  </svg>
);
export default ClockCustomIcon;
