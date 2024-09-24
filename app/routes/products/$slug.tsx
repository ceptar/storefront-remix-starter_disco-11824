import { DataFunctionArgs, json } from '@remix-run/server-runtime';
import { useState } from 'react';
import { Price } from '~/components/products/Price';
import { getProductBySlug } from '~/providers/products/products';
import {
  FetcherWithComponents,
  ShouldRevalidateFunction,
  useLoaderData,
  useOutletContext,
  MetaFunction,
} from '@remix-run/react';
import { CheckIcon, HeartIcon, PhotoIcon } from '@heroicons/react/24/solid';
import { Breadcrumbs } from '~/components/Breadcrumbs';
import { APP_META_TITLE } from '~/constants';
import { CartLoaderData } from '~/routes/api/active-order';
import { getSessionStorage } from '~/sessions';
import { ErrorCode, ErrorResult } from '~/generated/graphql';
import Alert from '~/components/Alert';
import { generateGradient } from '~/components/facet-filter/GenerateGradient';
import { ColorSwatches } from '~/components/facet-filter/ColorSwatches';
import { StockLevelLabel } from '~/components/products/StockLevelLabel';
import CarouselSingle from '~/components/CarouselSingle';
// import TopReviews from '~/components/products/TopReviews';
import { ScrollableContainer } from '~/components/products/ScrollableContainer';
// import { useTranslation } from 'react-i18next';
import { Button } from '~/components/Button';

export const meta: MetaFunction = ({ data }) => {
  return [
    {
      title: data?.product?.name
        ? `${data.product.name} - ${APP_META_TITLE}`
        : APP_META_TITLE,
    },
  ];
};

export async function loader({ params, request }: DataFunctionArgs) {
  const { product } = await getProductBySlug(params.slug!, { request });
  if (!product) {
    throw new Response('Not Found', {
      status: 404,
    });
  }
  const sessionStorage = await getSessionStorage();
  const session = await sessionStorage.getSession(
    request?.headers.get('Cookie'),
  );
  const error = session.get('activeOrderError');
  return json(
    { product: product!, error },
    {
      headers: {
        'Set-Cookie': await sessionStorage.commitSession(session),
      },
    },
  );
}

export const shouldRevalidate: ShouldRevalidateFunction = () => true;

export default function ProductSlug() {
  const { product, error } = useLoaderData<typeof loader>();
  const { activeOrderFetcher } = useOutletContext<{
    activeOrderFetcher: FetcherWithComponents<CartLoaderData>;
  }>();
  const { activeOrder } = activeOrderFetcher.data ?? {};
  const addItemToOrderError = getAddItemToOrderError(error);
  // const { t } = useTranslation();

  if (!product) {
    return <div>Product not found!</div>;
  }

  const findVariantById = (id: string) =>
    product.variants.find((v) => v.id === id);

  const [selectedVariantId, setSelectedVariantId] = useState(
    product.variants[0].id,
  );
  const selectedVariant = findVariantById(selectedVariantId);
  if (!selectedVariant) {
    setSelectedVariantId(product.variants[0].id);
  }

  const qtyInCart =
    activeOrder?.lines.find((l) => l.productVariant.id === selectedVariantId)
      ?.quantity ?? 0;

  const asset = product.assets[0];
  const brandName = product.facetValues.find(
    (fv) => fv.facet.code === 'brand',
  )?.name;

  const colorFacetValues = product.facetValues.filter(
    (fv) => fv.facet.code.toLowerCase() === 'colors',
  );

  const [featuredAsset, setFeaturedAsset] = useState(
    selectedVariant?.featuredAsset,
  );
  const productAsset = product.assets.map((asset) => asset.preview + '?w=full');
  console.log('productImages', productAsset);
  return (
    <div className="w-full">
      <div className="h-28 w-full"></div>
      <div className="w-full flex justify-center">
        <div className="w-auto sm:max-w-none flex justify-center items-center">
          {/* Image container */}
          <div className="flex flex-col sm:flex-row">
            <div className="w-full flex-row sm:flex-col sm:w-1/2 py-4 pl-4 pr-4 sm:pr-2 flex sm:justify-end">
              <div className="h-full w-fit border-discogray border-4 overflow-hidden">
                <CarouselSingle productAsset={productAsset} />
              </div>
            </div>

            {/* Product info */}
            <div className="w-full sm:w-1/2 py-4 pr-4 pl-4 sm:pl-2">
              {/* Product info content */}
              <h2 className="uppercase font-metrothin1 tracking-[0.15em] text-4xl py-1">
                {product.name}
              </h2>
              <div className="flex flex-col justify-center items-center"></div>
              <div className="">
                <h3 className="sr-only">Description</h3>

                <div
                  className="text-base text-discogray"
                  dangerouslySetInnerHTML={{
                    __html: product.description,
                  }}
                />
              </div>
              <activeOrderFetcher.Form method="post" action="/api/active-order">
                <input type="hidden" name="action" value="addItemToOrder" />
                {1 < product.variants.length ? (
                  <div className="mt-4">
                    <label
                      htmlFor="option"
                      className="block text-sm font-metromed1 tracking-tight text-discopink-300"
                    >
                      Select option
                    </label>
                    <select
                      className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-discogray focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                      id="productVariant"
                      value={selectedVariantId}
                      name="variantId"
                      onChange={(e) => {
                        setSelectedVariantId(e.target.value);

                        const variant = findVariantById(e.target.value);
                        if (variant) {
                          setFeaturedAsset(variant!.featuredAsset);
                        }
                      }}
                    >
                      {product.variants.map((variant) => (
                        <option key={variant.id} value={variant.id}>
                          {variant.name}
                        </option>
                      ))}
                    </select>
                  </div>
                ) : (
                  <input
                    type="hidden"
                    name="variantId"
                    value={selectedVariantId}
                  ></input>
                )}
                {/* Product price */}
                <div className="flex flex-col">
                  <div className="uppercase font-black text-lg py-4 ">
                    <Price
                      priceWithTax={selectedVariant?.priceWithTax}
                      currencyCode={selectedVariant?.currencyCode}
                    ></Price>
                  </div>

                  {/* ADD TO CART  */}
                  <div className="relative w-full">

                    <button
                      type="submit"
                      className={`
      relative w-full h-12 text-sm uppercase tracking-[0.2em] 
      text-black bg-black border-[3px] border-black
      py-2.5 px-5 my-2 cursor-pointer shadow-[3px_3px_black]
      active:translate-x-[3px] active:translate-y-[3px] active:shadow-none
      transition-all duration-100 ease-in-out
      ${activeOrderFetcher.state !== 'idle' ? 'opacity-50' : ''}
      ${qtyInCart === 0 ? 'hover:bg-opacity-80' : 'hover:bg-opacity-80'}
    `}
                      disabled={activeOrderFetcher.state !== 'idle'}
                      style={{
                        background: generateGradient({
                          colors: colorFacetValues,
                        }),
                        backgroundSize: '600% 100%',
                        animation: 'gradient 16s ease infinite',
                      }}
                    >
                      {qtyInCart ? (
                        <span className="flex items-center justify-center">
                          <CheckIcon className="w-5 h-5 mr-1" /> {qtyInCart} in
                          cart
                        </span>
                      ) : (
                        'Add to cart'
                      )}
                    </button>

                  </div>
                </div>
                <div className="mt-4 flex items-center">
                  <span className="text-gray-500 pr-2">
                    {selectedVariant?.sku}
                  </span>
                  <StockLevelLabel stockLevel={selectedVariant?.stockLevel} />
                </div>
                {addItemToOrderError && (
                  <div className="mt-4">
                    <Alert message={addItemToOrderError} />
                  </div>
                )}

                <div className="mt-4 pt-4 text-xs">
                  <h3 className="text-gray-600 font-bold mb-2">
                    Shipping & Returns
                  </h3>
                  <div className=" text-discogray-600 space-y-1">
                    <p>
                      Standard shipping: 3 - 5 working days. Express shipping: 1
                      - 3 working days.
                    </p>
                    <p>
                      Shipping costs depend on delivery address and will be
                      calculated during checkout.
                    </p>
                    <p>
                      Returns are subject to terms. Please see the{' '}
                      <span className="underline">returns page</span> for
                      further information.
                    </p>
                  </div>
                  <div className="sm:justify-self-end mt-4 pt-4">
                    {/* ... existing image code ... */}
                    <ColorSwatches colors={colorFacetValues} />
                  </div>
                </div>
              </activeOrderFetcher.Form>
            </div>
          </div>
        </div>
      </div>

      <div className="h-12 w-full"></div>
    </div>
  );
}

{
  /* 
        <div className="mt-24">
          <TopReviews></TopReviews>
        </div> */
}
{
  /* <div className="h-[2rem]"></div>
        <Breadcrumbs
          items={
            product.collections[product.collections.length - 1]?.breadcrumbs ??
            []
          }
        ></Breadcrumbs>
      */
}

export function CatchBoundary() {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-gray-900 my-8">
        Product not found!
      </h2>
      <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start mt-4 md:mt-12">
        {/* Image gallery */}
        <div className="w-full max-w-2xl mx-auto sm:block lg:max-w-none">
          <span className="overflow-hidden">
            <div className="w-full h-96 bg-slate-200 flex content-center justify-center">
              <PhotoIcon className="w-48 text-white"></PhotoIcon>
            </div>
          </span>
        </div>

        {/* Product info */}
        <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
          <div className="">We couldn't find any product at that address!</div>
          <div className="flex-1 space-y-3 py-1">
            <div className="h-2 bg-slate-200"></div>
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-4">
                <div className="h-2 bg-slate-200 col-span-2"></div>
                <div className="h-2 bg-slate-200 col-span-1"></div>
              </div>
              <div className="h-2 bg-slate-200"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function getAddItemToOrderError(error?: ErrorResult): string | undefined {
  if (!error || !error.errorCode) {
    return undefined;
  }
  switch (error.errorCode) {
    case ErrorCode.OrderModificationError:
    case ErrorCode.OrderLimitError:
    case ErrorCode.NegativeQuantityError:
    case ErrorCode.InsufficientStockError:
      return error.message;
  }
}
