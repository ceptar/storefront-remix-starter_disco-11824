// import { Link } from '@remix-run/react';
// import React, { useState } from 'react';
// import NavMenuItem from './NavMenuItem';
// import { motion, AnimatePresence } from 'framer-motion';
// import { easings } from '~/utils/animations';

// interface Collection {
//   id: string;
//   name: string;
//   parentId?: string;
//   slug: string;
//   parent?: {
//     id: string;
//     name: string;
//     slug: string;
//   };
// }

// interface CollectionsData {
//   collections: Collection[];
// }

// const AnimatedCollectionsTreemenu: React.FC<{
//   collectionsData: CollectionsData;
//   index: number;
// }> = ({ collectionsData, index }) => {
//   const [openAccordions, setOpenAccordions] = useState<string[]>([]);

//   const normalizeParent = (collection: Collection) => {
//     if (collection.parent) {
//       const parentName = collection.parent.name;
//       const parentCollection = collectionsData.collections.find(
//         (c) => c.name === parentName,
//       );
//       if (parentCollection) {
//         return { ...collection, parentId: parentCollection.id };
//       }
//     }
//     return collection;
//   };

//   const normalizedCollections = collectionsData.collections.map(normalizeParent);

//   const toggleAccordion = (event: React.MouseEvent, id: string) => {
//     event.stopPropagation();
//     setOpenAccordions(prev =>
//       prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
//     );
//   };

//   const buildTree = (
//     collections: Collection[],
//     parentId?: string,
//   ): JSX.Element[] => {
//     const result: JSX.Element[] = [];
  
//     for (const collection of collections) {
//       if (collection.parentId === parentId) {
//         const hasChildren = collections.some(c => c.parentId === collection.id);
//         const isOpen = openAccordions.includes(collection.id);
  
//         const navMenuItem = (
//           <NavMenuItem
//             index={collection.id.length}
//             title={collection.name}
//             class={`${collection.parentId ? 'child' : 'parent'}`}
//             isOpen={isOpen}
//             hasChildren={hasChildren} // Pass the hasChildren prop
//           />
//         );
  
//         result.push(
//           <div key={collection.id}>
//             {hasChildren ? (
//               <div onClick={(e) => toggleAccordion(e, collection.id)}>
//                 {navMenuItem}
//               </div>
//             ) : (
//               <Link to={`/collections/${collection.slug}`}>
//                 {navMenuItem}
//               </Link>
//             )}
//             <AnimatePresence>
//               {isOpen && (
//                 <motion.div
//                   initial={{ height: 0, opacity: 0 }}
//                   animate={{ height: 'auto', opacity: 1 }}
//                   exit={{ height: 0, opacity: 0 }}
//                   transition={{ duration: 0.3, ease: easings.easeOutQuart }}
//                 >
//                   {buildTree(collections, collection.id)}
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </div>
//         );
//       }
//     }
  
//     return result;
//   };
  
//   return (
//     <motion.nav
//       className="flex flex-col justify-start z-50"
//       initial={{ y: '-100%' }}
//       animate={{
//         y: 0,
//         transition: { duration: 1, ease: easings.easeOutQuart },
//       }}
//       exit={{ y: '-100%', transition: { duration: 0.3 } }}
//     >
//       <motion.ul exit={{ opacity: 0, transition: { duration: 0 } }}>
//         {buildTree(normalizedCollections)}
//       </motion.ul>
//     </motion.nav>
//   );
// };

// export default AnimatedCollectionsTreemenu;