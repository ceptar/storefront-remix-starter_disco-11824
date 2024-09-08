import gql from 'graphql-tag';
import { sdk } from '../../graphqlWrapper';
import { listedProductFragment } from '../products/products';
import type { CollectionListOptions } from '~/generated/graphql';

export async function getCollections(request, options = {}) {
  return sdk
    .collections({ options }, { request })
    .then((result) => result.collections?.items);
}
// Updated to accept options parameter, making it optional to ensure backward compatibility.

gql`
  query collections($options: CollectionListOptions) {
    collections(options: $options) {
      items {
        id
        name
        slug
        parent {
          id
          name
          slug
        }
        featuredAsset {
          id
          preview
          source
        }
      }
    }
  }
`;

gql`
  query collection($slug: String, $id: ID) {
    collection(slug: $slug, id: $id) {
      id
      name
      slug
      breadcrumbs {
        id
        name
        slug
      }
      children {
        id
        name
        slug
      }
    }
  }
`;
