import * as React from 'react';
import type { SVGProps } from 'react';
const Hamburger = ({ fill = "currentColor", ...props }: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ color: fill }} {...props}
  >
    <path
      d="M62 17C61.9894 17.0007 61.9788 17.0015 61.9683 17.0024H2V22H62V17Z"

      fill="currentColor"
    />
    <path
      d="M62 43C61.9894 43.0007 61.9788 43.0015 61.9683 43.0024H2V48H62V43Z"
     
      fill="currentColor"
    />
    <path
      d="M62 30C61.9894 30.0007 61.9788 30.0015 61.9683 30.0024H2V35H62V30Z"
      
      fill="currentColor"
    />

  </svg>
);
export default Hamburger;
