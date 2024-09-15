import React, { useState, useEffect } from 'react';
import { SearchQueryVariables, SearchResult } from '~/generated/graphql';
import { sdk } from '~/graphqlWrapper';
import { search } from '~/providers/products/products';

export function getCollectionProducts(slug: string, skip: number = 0, take: number = 10) {
  return sdk.GetCollectionProducts({ slug, skip, take });
}
const GET_COLLECTION_PRODUCTS = /*GraphQL*/ `
query GetCollectionProducts($slug: String!, $skip: Int!, $take: Int!) {
  collection(slug: $slug) {
    id
    name
    description
    featuredAsset {
      id
      preview
    }
  }
  search(
    input: {
      collectionSlug: $slug,
      groupByProduct: true,
      skip: $skip,
      take: $take }
  ) {
    totalItems
    items {
      productName
      slug
      productAsset {
        id
        preview
      }
      priceWithTax {
        ... on SinglePrice {
          value
        }
        ... on PriceRange {
          min
          max
        }
      }
      currencyCode
    }
  }
}
`;



// export async function fetchCollectionProducts(slug: string, skip: number = 0, take: number = 10) {
//   try {
//     const data = await sdk.GetCollectionProducts({ slug, skip, take });
//     console.log(data);
//     return {
//       products: data.search.items,
//       totalItems: data.search.totalItems,
//   };
//   } catch (error) {
//     console.error('Error fetching collection products:', error);
//     throw error;
//   } finally {
//     console.log('Query execution completed');
//   }
// }