import * as React from 'react';
import type { SVGProps } from 'react';
const DiscoSignIn = ({
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
d="M239.049 120C199.777 120 168 151.703 168 190.842C168 229.752 199.777 261.454 239.049 261.454C278.302 261.454 310.079 229.752 310.079 190.842C310.079 151.703 278.302 120 239.049 120Z"
fill="currentColor"
    />
    <path
d="M238.76 35.7424C126.121 35.7424 34.9806 126.673 34.9806 238.929C34.9806 350.528 126.121 441.454 238.76 441.454C351.345 441.454 442.486 350.528 442.486 238.929C442.486 126.673 351.345 35.7424 238.76 35.7424ZM66.9999 240.409C66.9999 145.157 144.335 68 239.912 68C335.444 68 412.78 145.157 412.78 240.409C412.78 302.3 379.745 356.697 330.186 386.959V360.147C330.186 310.343 289.928 270 240.197 270C190.443 270 150.186 310.343 150.186 360.147V387.311C100.292 357.12 66.9999 302.54 66.9999 240.409ZM239.049 120C199.777 120 168 151.703 168 190.842C168 229.752 199.777 261.454 239.049 261.454C278.302 261.454 310.079 229.752 310.079 190.842C310.079 151.703 278.302 120 239.049 120Z"
fill="currentColor"
    />
  </svg>
);
export default DiscoSignIn;