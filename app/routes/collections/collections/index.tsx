import { useLoaderData, Link } from '@remix-run/react';
import { getCollections } from '~/providers/collections/collections';
import { CollectionCard } from '~/components/collections/CollectionCard';
import { HomeIcon } from '@heroicons/react/24/solid';

export const loader = async ({ request }) => {
  const options = {
    filter: {
      parentId: {
        eq: '12', // Assuming "18" is the ID of the parent you want to filter by
      },
    },
    take: 20, // Limits the number of results
  };

  const collections = await getCollections(request, options);

  return { collections };
};

export default function CollectionsIndex() {
  const { collections } = useLoaderData();

  return (
    <div className=" w-full">
      <div className="">
       
        <div className="flex h-[2rem] relative"></div>
        <div className="relative h-[5rem] z-20 flex justify-center items-center mr-auto ml-auto w-full">
          <h2
            id="category-heading"
            className="px-8 items-center justify-center flex leading-10 border-t border-b border-discogray"
          >
            <span className="text-xl uppercase tracking-[0.25em] font-fw300 text-discogray p-2">
              Collections
            </span>
          </h2>
        </div>
        <div className="flex h-[2rem] relative"></div>

        {!collections || collections.length === 0 ? (
          <div>No collections found.</div>
        ) : (
          <div>
            {collections.map((collection) => (
              <CollectionCard key={collection.id} collection={collection} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
