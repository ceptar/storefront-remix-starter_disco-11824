import { motion } from "framer-motion";
import React, { useState } from "react";
import DiscoLightningFill from "~/components/svgs/DiscoLightningFill";
import { arrowMotion, itemCoverMotion, itemContentMotion } from "~/utils/animations";

interface NavMenuItemProps {
  index: number;
  title: string;
  class: string;
  isOpen?: boolean;
  hasChildren?: boolean; // Add this prop
}

const NavMenuItem: React.FC<NavMenuItemProps> = ({ index, title, class: className, isOpen, hasChildren }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <motion.li
      className={`cursor-pointer relative w-full ${isLoading ? "pointer-events-none" : "pointer-events-auto"}`}
      initial="initial"
      animate="animate"
      whileHover="hover"
      onAnimationComplete={() => setIsLoading(false)}
    >
      <div className=" flex items-center relative w-full">

        <motion.div className={`${className} flex-1 flex items-center justify-between`} variants={itemContentMotion}>
          {title}
        </motion.div>
        {hasChildren && ( // Conditionally render the icon only if it's a parent item

            <motion.div className="p-1" variants={arrowMotion}>
            <DiscoLightningFill className="fill-white " width={32} height={32} />
          </motion.div>

        )}
      </div>
    </motion.li>
  );
};

export default NavMenuItem;