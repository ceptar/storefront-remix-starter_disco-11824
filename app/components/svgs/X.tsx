import * as React from 'react';
import type { SVGProps } from 'react';
const X = ({
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
d="M274.989 239.664L379.034 342.36C367.806 357.321 354.211 370.454 338.819 381.186L239.433 275.454L139.614 380.866C124.242 370.064 110.683 356.86 99.5055 341.825L203.01 239.664L99.5044 137.502C110.644 122.601 124.149 109.543 139.456 98.8664L239.433 203.875L338.976 98.5474C354.303 109.155 367.844 122.141 379.034 136.969L274.989 239.664Z"
fill="currentColor"
    />
    <path
d="M139.456 98.8664C124.149 109.543 110.644 122.601 99.5044 137.502L203.01 239.664L99.5055 341.825C110.683 356.86 124.242 370.064 139.614 380.866L239.433 275.454L338.819 381.186C354.211 370.454 367.806 357.321 379.034 342.36L274.989 239.664L379.034 136.969C367.844 122.141 354.303 109.155 338.976 98.5474L239.433 203.875L139.456 98.8664Z"
fill="currentColor"
    />
  </svg>
);
export default X;
