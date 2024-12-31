import React from 'react';
import type { SearchQuery } from '~/generated/graphql';
import { Price } from '~/components/products/Price';
import { Link } from '@remix-run/react';
import { Carousel, CarouselContent, CarouselItem } from './ui/carousel';

// interface Product {
//   id: string;
//   name: string;
//   slug: string;
//   images: string[];
//   // Add other product properties as needed
// }

// interface ProductGridProps {
//   featuredProducts: SearchQuery['search']['items'];
// }

export default function ProductGrid({ featuredProducts: products }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4 gap-2 w-full">
      {products.map((product, index) => (
        <div key={product.productId} className="w-full">
          <Carousel className="w-full rounded-none">
            <CarouselContent>
              {product.assets.map((asset, assetIndex) => (
                <CarouselItem key={`${product.productId}-${assetIndex}`}>
                  <div className="relative aspect-[4/6] w-full">
                    <img
                      src={asset.preview}
                      referrerPolicy="no-referrer-when-downgrade" // This is a workaround for a bug in Remix
                      crossOrigin="anonymous"
                      alt={`${product.productName} - Image ${assetIndex + 1}`}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <Link
            to={`/products/${product.slug}`}
            className="block mt-1 font-bold uppercase text-md text-center"
          >
            {product.productName}
          </Link>
        </div>
      ))}
    </div>
  );
}
