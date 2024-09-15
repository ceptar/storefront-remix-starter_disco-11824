import { useLoaderData } from '@remix-run/react';
// Import GraphQL functions from products provider
// import { sdk } from '../graphqlWrapper';
import { LoaderFunctionArgs, json } from '@remix-run/server-runtime';
// import FacetNew from '~/components/facet-filter/FacetNew';
// import Carousel from '../components/Carousel';
// import special from '~/../public/special.webp';
import { fetchCollectionProducts } from '~/providers/products/collectionProducts';
import Carousel from '~/components/carouselNew/Carousel';
export async function loader({ request }) {


  const { products, totalItems } = await fetchCollectionProducts(
    'featured-items',
    0,
    20,
  );

  return json({
    featuredProducts:products,
    totalItems,
  });
}

export default function Index() {
  const { featuredProducts, totalItems } =
    useLoaderData<typeof loader>();


  return (
    <>
      <div className="bg-hero" aria-label="[hero1]">
        <div className="h-full flex justify-end sm:justify-start items-end pl-4">
          <div className="mb-32 ml-4 mr-auto sm:w-full ">
            <div className="pr-[32px] w-[80vw] md:w-[calc(50vw-32px)]">
              <div className="filter p-[16px] bg-opacity-75 mix-blend-lighten border-[1px] border-white backdrop-blur-[4px]">
                <div className="filter p-[16px] bg-white bg-opacity-100 mix-blend-lighten border-[1px] border-black backdrop-blur-[4px]">
                  <span className="font-fw300 tracking-wider uppercase text-2xl sm:text-4xl lg:text-5xl xl:text-7xl">
                    <p className="py-1">life's too short</p>
                    <p>to wear</p>
                    <p className="py-1">boring jewelry</p>
                  </span>
                  <div className="flex flex-row-reverse font-fw300 tracking-wider uppercase text-2xl sm:text-4xl lg:text-5xl xl:text-7xl">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[calc(100vh-80px)] relative"></div>
      <div className="h-8"></div>
      <div className="relative h-20 z-20 flex justify-center items-center mr-auto ml-auto w-full">
        <h2

          className="px-8 items-center justify-center flex leading-10 border-t border-b border-discogray"
        >
          <span className="text-xl text-center uppercase tracking-[0.25em] font-fw300 text-discogray p-2">
            Featured Items
          </span>
        </h2>
      </div>
      <div className="justify-center items-center">
      <div className="pl-[16px] pr-[16px] mx-auto">
      {/* <Carousel featuredProducts={featuredProducts} /> */}

      <div className="container mx-auto py-8">
      <Carousel featuredProducts={featuredProducts} slideWidth="1/2" />
    </div>



      </div>
      </div>
    </>
  );
}

