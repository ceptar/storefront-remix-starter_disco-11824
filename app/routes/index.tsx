import { useLoaderData } from '@remix-run/react';
import { LoaderFunctionArgs, json } from '@remix-run/server-runtime';
import ProductGrid from '~/components/ProductGrid';
import { PageTitle } from '~/components/PageTitle';
import { getCollectionProducts } from '~/providers/products/collectionProducts';

const PagetitleProps = {
  title: 'featured items',
};

export async function loader({ request }: LoaderFunctionArgs) {
  const products = await getCollectionProducts('featured-items', 0, 6);

  return json({
    featuredProducts: products.search.items,
    totalitems: products.search.totalItems,
  });
}

export default function Index() {
  const { featuredProducts, totalitems } = useLoaderData<typeof loader>();

  return (
    <>
      <div
        className="w-full h-screen bg-cover bg-right-center bg-no-repeat"
        style={{ backgroundImage: "url('/banner4fin.webp')" }}
      >
        <div className="h-full flex justify-end sm:justify-start items-end pl-4 leading-tight">
          <div className="flex pb-36 mr-auto md:w-full ">
            <div className="pr-[32px] w-[80vw] md:w-[calc(50vw-32px)]">
              <div className="flex flex-row p-[16px]">
                <div className="flex flex-col justify-center items-center py-3 ">
                  <div className="flex flex-row py-2"> </div>
                  <div className="flex flex-row flex-grow px-2 bg-primarytext">
                    {' '}
                  </div>
                  <div className="flex flex-row py-2"> </div>
                </div>
                <div className="flex flex-col p-[16px]">
                  <span className="text-[calc(1.5rem+2.5vw)] font-fw300 text-primarytext uppercase py-1">
                    <p className="">life's too short</p>
                    <p className="">to wear</p>
                    <p className="">boring </p>
                    <p className="">jewelry</p>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-8"></div>

      <PageTitle title={PagetitleProps.title} />

      <ProductGrid featuredProducts={featuredProducts} />
      <div className="h-12"></div>
    </>
  );
}
