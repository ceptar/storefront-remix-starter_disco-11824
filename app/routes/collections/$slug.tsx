import * as React from 'react';
import { useLoaderData, useSubmit, Form } from '@remix-run/react';
import { LoaderFunction } from '@remix-run/node';
import { sdk } from '~/graphqlWrapper';
import FramerModal from '~/components/framer-modal/FramerModal';
import { Link } from '@remix-run/react';
import { Price } from '~/components/products/Price';
import { CurrencyCode } from '~/generated/graphql';

export const loader: LoaderFunction = async ({ params, request }) => {
  const url = new URL(request.url);
  const term = url.searchParams.get('term') || '';
  const filterIds = url.searchParams.get('filterIds')?.split(',') || [];

  const { collection } = await sdk.collection({ slug: params.slug });
  const { search } = await sdk.search({
    input: {
      term,
      collectionSlug: params.slug,
      groupByProduct: true,
      facetValueFilters: filterIds.map(id => ({ and: id })),
    },
  });

  return { collection, search, term, filterIds };
};

export default function CollectionSlug() {
  const { collection, search, term, filterIds } = useLoaderData<typeof loader>();
  const submit = useSubmit();
  const [menuOpen, setMenuOpen] = React.useState(false);

  const handleFilterChange = (newFilterIds: string[]) => {
    submit({ filterIds: newFilterIds.join(','), term }, { method: 'get' });
  };

  return (
    <div className="w-full">
          <div className="absolut top-[5rem]">      

<FramerModal
      menuOpen={menuOpen}
      setMenuOpen={setMenuOpen}
      results={search.facetValues}
      filterIds={filterIds}
      updateFilterIds={handleFilterChange}
    />
    </div>
     

    <div className="px-4 relative h-[5rem] z-20 flex justify-center items-center mr-auto ml-auto w-full">
    <h2 id="category-heading" className="px-4 items-center justify-center flex leading-10 border-t border-b border-discogray">
      <span className="text-xl uppercase tracking-[0.25em] text-discogray p-2">
        {collection.name}
      </span>
    </h2>
  </div>


  <div className="relative px-4 h-full my-4 py-4"> 
<div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">        
  {search.items.map(({ productName, slug, priceWithTax, currencyCode, productAsset }) => (
          <div className="break-inside-avoid object-cover w-full mb-4" key={slug}>
            <Link to={`/products/${slug}`} prefetch="intent">
              <img
                className="object-cover"
                alt={productName}
                src={productAsset?.preview + '?preset=full'}
              />
                     <div className="relative w-full mx-auto bottom-0 left-0">
                     <div className="text-center bg-discogray absolute bottom-0 left-0 w-fit h-fit text-white text-md p-1 ">                <Price priceWithTax={priceWithTax} currencyCode={currencyCode as CurrencyCode} />               
                </div>
              </div>
              <div className="text-xl p-1 text-discogray uppercase tracking-wider whitespace-nowrap overflow-hidden">
                {productName}
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}


// import * as React from 'react';
// import { useLoaderData, useSubmit, Form } from '@remix-run/react';
// import { LoaderFunction } from '@remix-run/node';
// import { sdk } from '~/graphqlWrapper';
// import FramerModal from '~/components/framer-modal/FramerModal';
// import { Link } from '@remix-run/react';
// import { Price } from '~/components/products/Price';
// import { CurrencyCode } from '~/generated/graphql';

// export const loader: LoaderFunction = async ({ params, request }) => {
//   const url = new URL(request.url);
//   const term = url.searchParams.get('term') || '';
//   const filterIds = url.searchParams.get('filterIds')?.split(',') || [];

//   const { collection } = await sdk.collection({ slug: params.slug });
//   const { search } = await sdk.search({
//     input: {
//       term,
//       collectionSlug: params.slug,
//       groupByProduct: true,
//       facetValueFilters: filterIds.map(id => ({ and: id })),
//     },
//   });

//   return { collection, search, term, filterIds };
// };

// export default function CollectionSlug() {
//   const { collection, search, term, filterIds } = useLoaderData<typeof loader>();
//   const submit = useSubmit();
//   const [menuOpen, setMenuOpen] = React.useState(false);

//   const handleFilterChange = (newFilterIds: string[]) => {
//     submit({ filterIds: newFilterIds.join(','), term }, { method: 'get' });
//   };

//   return (
//     <div className="w-full">
//     <div className="px-4 relative h-[5rem] z-20 flex justify-center items-center mr-auto ml-auto w-full">
//     <h2 id="category-heading" className="px-4 items-center justify-center flex leading-10 border-t border-b border-discogray">
//       <span className="text-xl uppercase tracking-[0.25em] text-discogray p-2">
//         {collection.name}
//       </span>
//     </h2>
//   </div>

//     <div className="absolut ">      

//       <FramerModal
//             menuOpen={menuOpen}
//             setMenuOpen={setMenuOpen}
//             results={search.facetValues}
//             filterIds={filterIds}
//             updateFilterIds={handleFilterChange}
//           />

// <div className="top-[5rem] h-full px-4 my-4 py-4 grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">        
//   {search.items.map(({ productName, slug, priceWithTax, currencyCode, productAsset }) => (
//           <div className="break-inside-avoid object-cover w-full mb-4" key={slug}>
//             <Link to={`/products/${slug}`} prefetch="intent">
//               <img
//                 className="object-cover"
//                 alt={productName}
//                 src={productAsset?.preview + '?preset=full'}
//               />
//                      <div className="relative w-full mx-auto bottom-0 left-0">
//                      <div className="text-center bg-discogray absolute bottom-0 left-0 w-fit h-fit text-white text-md p-1 ">                <Price priceWithTax={priceWithTax} currencyCode={currencyCode as CurrencyCode} />               
//                 </div>
//               </div>
//               <div className="text-xl p-1 text-discogray uppercase tracking-wider whitespace-nowrap overflow-hidden">
//                 {productName}
//               </div>
//             </Link>
//           </div>
//         ))}
//       </div>
//     </div>
//     </div>
//   );
// }