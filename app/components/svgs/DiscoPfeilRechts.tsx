import * as React from "react";
import type { SVGProps } from "react";

const DiscoPfeilRechts = ({ width = 480, height = 480, fill = "currentColor", ...props }) => (
    <svg
      width={width}
      height={height}
      viewBox="0 0 480 480"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      >
<path d="M20 240C20 118.497 118.497 20 240 20C361.503 20 460 118.497 460 240C460 361.503 361.503 460 240 460C118.497 460 20 361.503 20 240Z" fill="black"/>
<path d="M177.313 365V323.661L276.688 240.984L177 158.307V115L302 220.315V261.982L177.313 365Z" fill="white"/>

</svg>
)

export default DiscoPfeilRechts