import { useLoaderData } from '@remix-run/react';
// Import GraphQL functions from products provider
import { sdk } from '../graphqlWrapper';
import { LoaderFunctionArgs, json } from '@remix-run/server-runtime';
import Carousel from '../components/Carousel';
import { getCollectionProducts } from '~/providers/products/collectionProducts';

export async function loader({ request }:LoaderFunctionArgs) {


  const products = await sdk.GetCollectionProducts({
    slug: 'featured-items',
    skip: 0,
    take: 20
  
});

  return json({
    featuredProducts: products.search.items,
    totalitems: products.search.totalItems,
  });
}

export default function Index() {
  const { featuredProducts, totalitems } =
    useLoaderData<typeof loader>();


  return (
    <>
<div 
  className="w-full h-screen bg-cover bg-right-center bg-no-repeat"
  style={{backgroundImage: "url('/banner4fin.webp')"}}
>
          <div className="h-full flex justify-end sm:justify-start items-end pl-4">
          <div className="flex pb-24 mr-auto sm:w-full ">
            <div className="pr-[32px] w-[80vw] md:w-[calc(50vw-32px)]">
              <div className="filter p-[16px] bg-opacity-75 mix-blend-lighten border-[2px] border-white backdrop-blur-[4px]">
                <div className="filter p-[16px] bg-white bg-opacity-100 mix-blend-lighten border-[2px] border-black backdrop-blur-[4px]">
                  <span className="font-fw300 tracking-wider uppercase text-2xl sm:text-4xl lg:text-5xl xl:text-7xl">
                    <p className="py-1">life's too short</p>
                    <p>to wear</p>
                    <p className="py-1">boring jewelry</p>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-8"></div>
      <div className="h-20 flex justify-center items-center mx-auto w-full">
        <h2

          className="px-8 items-center justify-center flex leading-10 border-t border-b border-discogray"
        >
          <span className="text-xl text-center uppercase tracking-[0.25em] font-fw300 text-discogray p-2">
            Featured Items
          </span>
        </h2>
      </div>


      <div className="w-full flex flex-col items-center justify-center mt-8">
          <Carousel featuredProducts={featuredProducts} />

      </div>
    
      <div className="h-12">
      </div>
    </>
  );
}

