import { Link } from '@remix-run/react';
import React from 'react';
import NavMenuItem from './NavMenuItem';
import { motion } from 'framer-motion';
import { easings } from '~/utils/animations';

interface Collection {
  id: string;
  name: string;
  parentId?: string;
  slug: string;
  parent?: {
    id: string;
    name: string;
    slug: string;
  };
}

interface CollectionsData {
  collections: Collection[];
}

const AnimatedCollectionsTreemenu: React.FC<{
  collectionsData: CollectionsData;
  index: number;
}> = ({ collectionsData, index }) => {
  const normalizeParent = (collection: Collection) => {
    if (collection.parent) {
      const parentName = collection.parent.name;
      const parentCollection = collectionsData.collections.find(
        (c) => c.name === parentName,
      );
      if (parentCollection) {
        collection = { ...collection, parentId: parentCollection.id };
      }
    }
    return collection;
  };

  const normalizedCollections =
    collectionsData.collections.map(normalizeParent);

  const buildTree = (
    collections: Collection[],
    parentId?: string,
  ): JSX.Element[] => {
    const result: JSX.Element[] = [];

    for (const collection of collections) {
      if (collection.parentId === parentId) {
        result.push(

          <div key={collection.id} >

              <Link
                to={`/collections/${collection.slug}`}
              >
                <NavMenuItem
                  index={collection.id.length}
                  title={collection.name}
                  class={`${collection.parentId ? 'child' : 'parent'}`}
                />
              </Link>
          {buildTree(collections, collection.id)}
</div>
          );
    }

  }

    
    

    return result;
  };

  return (
      
        <motion.nav
          className="flex flex-col justify-start z-50"
          initial={{ y: '-100%' }}
          animate={{
            y: 0,
            transition: { duration: 1, ease: easings.easeOutQuart },
          }}
          exit={{ y: '-100%', transition: { duration: 0.3 } }}
        >
         <motion.ul exit={{ opacity: 0, transition: { duration: 0 } }}>
          {buildTree(normalizedCollections)}
          </motion.ul>
        </motion.nav>

  );
};

export default AnimatedCollectionsTreemenu;
