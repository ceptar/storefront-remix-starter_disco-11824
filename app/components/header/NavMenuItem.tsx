import { motion } from "framer-motion";
import React, { useState } from "react";
import DiscoLightningFill from "~/components/svgs/DiscoLightningFill";
import { arrowMotion, itemCoverMotion, itemContentMotion } from "~/utils/animations";

interface NavMenuItemProps {
  index: number;
  title: string;
  class: string;
  isOpen?: boolean;
}

const NavMenuItem: React.FC<NavMenuItemProps> = ({ index, title, class: className, isOpen }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <motion.li
      className={`cursor-pointer relative w-full ${
        isLoading ? "pointer-events-none" : "pointer-events-auto"
      }`}
      initial="initial"
      animate="animate"
      whileHover="hover"
      onAnimationComplete={() => setIsLoading(false)}
    >
      <div className="flex items-center relative w-full">
        {/* <motion.div variants={itemCoverMotion} 
                    className="absolute left-0 top-0 right-0 bottom-0 px-4"
        /> */}
        <motion.div className="px-4 " variants={arrowMotion}>
          <DiscoLightningFill className="fill-white" width={28} height={28} />
          {/* <DiscoLightningFill className="fill-secondary opacity-10 relative" width={28} height={28} /> */}
        </motion.div>
        <motion.div className={`${className} flex-1 flex items-center justify-between`} variants={itemContentMotion}>
          {title}
        </motion.div>
      </div>
    </motion.li> 
  );
};

export default NavMenuItem;