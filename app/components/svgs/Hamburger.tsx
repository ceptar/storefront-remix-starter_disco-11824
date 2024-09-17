import * as React from 'react';
import type { SVGProps } from 'react';
const Hamburger = ({
  fill = 'currentColor',
  ...props
}: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 480 480"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ color: fill }}
    {...props}
  >
    <path
      d="M99.25 128.693L99.2501 179.307L380.75 179.142L380.75 128.693H99.25Z"
      fill="currentColor"
    />
    <path
      d="M99.2501 214.652V265.101L380.75 264.936L380.75 214.487L99.2501 214.652Z"
      fill="currentColor"
    />
    <path
      d="M100.25 300.693V351.307L380.75 351.142L380.75 300.528L100.25 300.693Z"
      fill="currentColor"
    />
  </svg>
);
export default Hamburger;
