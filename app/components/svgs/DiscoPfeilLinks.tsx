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
<path fill-rule="evenodd" clip-rule="evenodd" 
d="M240 35C127.361 35 36 125.764 36 238.019V240.981C36 353.236 127.361 440 240 440C352.585 440 443.706 353.236 443.706 240.981V238.019C443.706 125.764 352.585 35 240 35ZM68.0193 239.5C68.0193 144.248 144.423 66.5 240 66.5C335.532 66.5 414 144.248 414 239.5C414 334.752 335.532 409.5 240 409.5C144.423 409.5 68.0193 334.752 68.0193 239.5Z"
 fill="white"/>
<path 
d="M211.978 241.117L316.024 138.422C304.833 123.594 291.293 110.608 275.966 100L140 241.117L275.808 382.639C291.2 371.906 304.795 358.774 316.024 343.812L211.978 241.117Z"
 fill="white"/>
</svg>
)

export default DiscoPfeilLinks