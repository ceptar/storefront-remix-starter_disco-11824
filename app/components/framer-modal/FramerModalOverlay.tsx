import { motion } from "framer-motion";
import React from "react";
import { FacetValueFilters } from "~/components/facet-filter/FacetValueFilters";

import { easings } from "~/utils/animations";

const FramerModalOverlay = ({
  results,
  filterIds,
  updateFilterIds
}: {
  results: any[];
  filterIds: string[];
  updateFilterIds: (ids: string[]) => void;
}) => {
  return (
    <motion.div
    className="fixed bottom-0 h-[calc(100vh-5rem)] w-full sm:w-[50vw] bg-black bg-opacity-85 backdrop-blur-[4px] justify-end py-4 pl-4 pr-20 z-50"
    initial={{ y: "100%" }}
      animate={{
        y: 0,
        transition: { duration: 1, ease: easings.easeOutQuart },
      }}
      exit={{ y: "100%", transition: { duration: 0.3 } }}
      >
      <motion.div>
        <FacetValueFilters
          results={results}
          filterIds={filterIds}
          updateFilterIds={updateFilterIds}
        />
      </motion.div>
    </motion.div>
  );
};

export default FramerModalOverlay;
