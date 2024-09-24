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
<DiscoFilter className="w-9 h-9 cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}/>
  );
};

export default FramerModalToggle;
