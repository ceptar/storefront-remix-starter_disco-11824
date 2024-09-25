import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import DiscoFilter from "../svgs/DiscoFilter";

interface FramerModalToggleProps {
  menuOpen: boolean;
  setMenuOpen: (_: boolean) => void;
}

const FramerModalToggle: React.FC<FramerModalToggleProps> = ({
  menuOpen,
  setMenuOpen,
}) => {

  return (
<DiscoFilter className="w-10 h-10 cursor-pointer bg-discogray backdrop-blur-md rounded-full text-discoyellow-200 opacity-85 bg-blend-difference p-1" onClick={() => setMenuOpen(!menuOpen)}/>
  );
};

export default FramerModalToggle;
