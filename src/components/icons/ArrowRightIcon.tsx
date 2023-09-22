export default function ArrowRightIcon({ size = "30", color = "black" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 30 30"
      fill="none"
    >
      <path
        d="M25.9805 15.668L17.543 24.1055C17.3638 24.2787 17.1243 24.3756 16.875 24.3756C16.6257 24.3756 16.3862 24.2787 16.207 24.1055C16.031 23.9277 15.9322 23.6877 15.9322 23.4375C15.9322 23.1873 16.031 22.9473 16.207 22.7695L23.0508 15.9375H4.6875C4.43886 15.9375 4.2004 15.8387 4.02459 15.6629C3.84877 15.4871 3.75 15.2486 3.75 15C3.75 14.7514 3.84877 14.5129 4.02459 14.3371C4.2004 14.1613 4.43886 14.0625 4.6875 14.0625H23.0508L16.207 7.23046C16.0575 7.04831 15.9811 6.81706 15.9927 6.5817C16.0043 6.34634 16.1029 6.12369 16.2696 5.95707C16.4362 5.79044 16.6588 5.69175 16.8942 5.68019C17.1296 5.66863 17.3608 5.74503 17.543 5.89453L25.9805 14.332C26.1565 14.5098 26.2553 14.7498 26.2553 15C26.2553 15.2502 26.1565 15.4902 25.9805 15.668Z"
        fill={color}
      />
    </svg>
  );
}