import { gql } from "@apollo/client";

// https://github.com/w3bdesign/nextjs-woocommerce/blob/master/utils/gql/GQL_QUERIES.js

export const GET_PRODUCTS = gql`
  query MyProducts {
    products(filter: { status: { _eq: "published" } }) {
      id
      name
      price
      quantity
      slug
      type
      variants
      categories {
        Categories_id {
          name
          id
          slug
        }
      }
      images {
        image {
          id
        }
      }
      thumbnail {
        id
      }
    }
  }
`;
