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
<path d="M387 152.198V184.485H92V152.198H387Z" fill="currentColor"/>
<path d="M92 296.392V328.679H387V296.392H92Z" fill="currentColor"/>
  </svg>
);
export default Hamburger;
