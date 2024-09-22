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
<path fill-rule="evenodd" clip-rule="evenodd" d="M240 445C352.639 445 444 354.236 444 241.981V239.019C444 126.764 352.639 40 240 40C127.415 40 36.2939 126.764 36.2939 239.019V241.981C36.2939 354.236 127.415 445 240 445ZM411.981 240.5C411.981 335.752 335.577 413.5 240 413.5C144.468 413.5 66.0001 335.752 66.0001 240.5C66.0001 145.248 144.468 70.5 240 70.5C335.577 70.5 411.981 145.248 411.981 240.5Z"
 fill="white"/>
<path d="M268.022 238.883L163.976 341.578C175.167 356.406 188.707 369.392 204.034 380L340 238.883L204.192 97.3612C188.8 108.094 175.205 121.226 163.976 136.188L268.022 238.883Z"
 fill="white"/>

</svg>
)

export default DiscoPfeilRechts