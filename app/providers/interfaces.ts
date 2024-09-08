// ./interfaces/index.ts (or another file of your choice)

import { CurrencyCode } from "~/generated/graphql";

export interface ProductAsset {
    id: string;
    preview: string;
  }
  
  export interface PriceWithTax {
    value?: number;
    min?: number;
    max?: number;
  }
  
  export interface ProductItem {
    productId: string;
    productName: string;
    slug: string;
    productAsset: ProductAsset;
    priceWithTax: PriceWithTax;
    currencyCode: CurrencyCode;
  }
  
  export interface Collection {
    id: string;
    name: string;
    description: string;
    featuredAsset?: ProductAsset | null;
  }
  
  export interface SearchResults {
    totalItems: number;
    items: ProductItem[];
  }

  export interface SearchItem {
    productName: string;
    slug: string;
    productAsset?: ProductAsset;
    priceWithTax?: PriceWithTax;
    currencyCode: string;
  }
  
  export interface GetOneCollectionsProductsData {
    collection: Collection;
    search: SearchResults;
  }

  export interface CollectionPageProps {
    collection: {
      id: string;
      name: string;
      description: string;
      featuredAsset?: ProductAsset;
    };
    products: SearchItem[];
    totalItems: number;
    facetValues: any[]; // Define according to your facetValues structure
  }