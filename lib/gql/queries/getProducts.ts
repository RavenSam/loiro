import { gql } from "@apollo/client"

export const GET_PRODUCTS = gql`
   query MyProducts {
      products(filter: { status: { _eq: "published" } }) {
         id
         name
         price
         previous_price
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
`

export const GET_PRODUCT_WITH_SLUG = gql`
   query MyProduct($slug: String!) {
      products(filter: { status: { _eq: "published" }, slug: { _eq: $slug } }) {
         id
         name
         description
         overview
         price
         previous_price
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
`

export const GET_SEARCH_PRODUCTS = gql`
   query MyProducts($search: String = "") {
      products(filter: { status: { _eq: "published" } }, search: $search) {
         id
         name
         price
         previous_price
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
`

export const GET_PRODUCTS_SLUG = gql`
   query MyProductsSlug {
      products(filter: { status: { _eq: "published" } }) {
         slug
      }
   }
`
