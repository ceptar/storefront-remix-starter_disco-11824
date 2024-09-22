import * as React from "react";
import type { SVGProps } from "react";

const DiscoPfeilLinks = ({ width = 480, height = 480, fill = "white", ...props }) => (
    <svg
      width={width}
      height={height}
      fill="currentColor"
      viewBox="0 0 480 480"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      >
<path d="M460 240C460 361.503 361.503 460 240 460C118.497 460 20 361.503 20 240C20 118.497 118.497 20 240 20C361.503 20 460 118.497 460 240Z" fill="black"/>
<path d="M302.687 115V156.339L203.312 239.016L303 321.693V365L178 259.685V218.018L302.687 115Z" fill="white"/>

</svg>
)

export default DiscoPfeilLinks