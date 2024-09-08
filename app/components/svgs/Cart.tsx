// Logo.tsx
import * as React from "react";
import type { SVGProps } from "react";

const Cart = ({ fill = "currentColor", ...props }: SVGProps<SVGSVGElement>) => (
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={{ color: fill }} {...props}>


<path id="Union" fillRule="evenodd" 
d="M7.68982 7.256c0 -2.14986 1.74281 -3.89267 3.89268 -3.89267 1.189 0 2.2534 0.53306 2.9675 1.37322l0.1073 -0.38556 2.1383 0.27201c-0.9626 -1.90206 -2.9356 -3.20601 -5.2131 -3.20601 -3.2248 0 -5.83902 2.61422 -5.83902 5.83901v1.21647H3.17091L1 22.5834h21.1649l-1.177 -7.6501 -3.066 2.0366 -4.7763 -7.19041 0.364 -1.30702H7.68982V7.256ZM15.725 5.95828l-0.994 3.5696 3.5991 5.41832L23 11.8443l-3.5992 -5.4184 -3.6758 -0.46762Z" 
clipRule="evenodd" strokeWidth="1" fill="currentColor" /></svg>
);
export default Cart;
