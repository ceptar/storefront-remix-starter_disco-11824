import { motion } from "framer-motion";
import React, { useState } from "react";
import DiscoLightningFill from "~/components/svgs/DiscoLightningFill";
import { arrowMotion, itemCoverMotion, dividerMotion, itemContentMotion } from "~/utils/animations";

interface NavMenuItemProps {
  index: number;
  title: string;
  class: string;
}

const NavMenuItem: React.FC<NavMenuItemProps> = ({ index, title, class: className }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <motion.li
      className={`cursor-pointer relative w-full  ${
        isLoading ? "pointer-events-none" : "pointer-events-auto"
      }`}
      initial="initial"
      animate="animate"
      whileHover="hover"
      onAnimationComplete={() => setIsLoading(false)}
    >
      <div className="flex items-center relative w-full ">
        <motion.div variants={itemCoverMotion} 
                  className="absolute left-0 top-0 right-0 bottom-0 px-4"
/>
        <motion.div className="p-2" variants={arrowMotion}>
        <DiscoLightningFill className="fill-white absolute" width={24} height={24} />
          <DiscoLightningFill className="fill-secondary opacity-10 relative" width={24} height={24} />
        </motion.div>
        <motion.div className={`${className} flex-1 flex items-center justify-between`} variants={itemContentMotion}>
           {title}
        </motion.div>
      </div>
      <motion.div
        className="absolute bottom-0 h-[2px] bg-secondary-200 w-full origin-left"
        variants={dividerMotion}
      />
    </motion.li>
  );
};

export default NavMenuItem;