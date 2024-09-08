import type { SearchQuery } from '~/generated/graphql';
import { Link } from '@remix-run/react';
import { Price } from './Price';

export type ProductCardProps = SearchQuery['search']['items'][number];

export function ProductCard({
  productAsset,
  productName,
  slug,
  priceWithTax,
  currencyCode,
}: ProductCardProps) {
  return (
    <div className="break-inside-avoid flex flex-col h-full">
      <Link
        className="flex-nowrap transition-all duration-300 ease-out hover:opacity-70"
        prefetch="intent"
        to={`/products/${slug}`}
      >
        <img
          className="object-cover "
          alt=""
          src={productAsset?.preview + '?preset=full'}
        />
        <div className="relative w-full mx-auto bottom-0 left-0">
          <div className="text-center absolute bottom-0 left-0 w-fit h-fit bg-discogray text-white text-md p-1 font-fw300">
            <Price priceWithTax={priceWithTax} currencyCode={currencyCode} />
          </div>
        </div>
        <div className="text-xl p-1 text-discogray uppercase tracking-wider font-fw300 whitespace-nowrap overflow-hidden">
          {productName}
        </div>

        <div className="text-lg p-1 font-fw600 text-discogray"></div>
      </Link>
    </div>
  );
}
