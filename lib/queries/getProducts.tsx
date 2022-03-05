import { gql } from '@apollo/client';

// https://github.com/w3bdesign/nextjs-woocommerce/blob/master/utils/gql/GQL_QUERIES.js

export const GET_PRODUCTS = gql`
query MyProducts {
  products {
    nodes {
      id
      databaseId
      slug
      name
      onSale
      image {
        sourceUrl(size: WOOCOMMERCE_SINGLE)
      }
      galleryImages {
        nodes {
          sourceUrl(size: WOOCOMMERCE_SINGLE)
        }
      }
      productCategories {
        edges {
          node {
            id
            name
            databaseId
          }
        }
      }
      ... on SimpleProduct {
        price
        regularPrice
        salePrice
      }
      ... on VariableProduct {
        id
        name
        price
        regularPrice
        salePrice
        variations {
          nodes {
            price
            regularPrice
            salePrice
            image {
              sourceUrl(size: WOOCOMMERCE_SINGLE)
            }
            attributes {
              nodes {
                value
                name
              }
            }
          }
        }
      }
    }
  }
}
`