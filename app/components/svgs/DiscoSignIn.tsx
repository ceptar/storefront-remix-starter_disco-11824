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
{/* <path d="M460 240C460 361.503 361.503 460 240 460C118.497 460 20 361.503 20 240C20 118.497 118.497 20 240 20C361.503 20 460 118.497 460 240Z" 
fill="currentColor"/> */}
{/* <path d="M238.863 106C199.591 106 167.814 137.704 167.814 176.842C167.814 215.752 199.591 247.454 238.863 247.454C278.117 247.454 309.893 215.752 309.893 176.842C309.893 137.704 278.117 106 238.863 106Z"
 fill="currentColor"/> */}
<path d="M238.863 106C199.591 106 167.814 137.704 167.814 176.842C167.814 215.752 199.591 247.454 238.863 247.454C278.117 247.454 309.893 215.752 309.893 176.842C309.893 137.704 278.117 106 238.863 106Z"
 fill="currentColor"/>
<path d="M240.012 256C190.258 256 150 296.343 150 346.147V373.311L330 372.959V346.147C330 296.343 289.742 256 240.012 256Z"
 fill="currentColor"/>
  </svg>
);
export default DiscoSignIn;
