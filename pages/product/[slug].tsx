import { NextPage, GetStaticPaths, GetStaticProps } from "next"
import Head from "next/head"
import { useRouter } from "next/router"
import { Product } from "types"
import client from "@lib/config/apollo"
import { GET_PRODUCT_WITH_SLUG, GET_PRODUCTS_SLUG, GET_PRODUCTS } from "@lib/gql/queries/getProducts"

import ProductDetails from "@components/sections/ProductDetails"
import ProductGallery from "@components/sections/ProductGallery"
import ProductInfo from "@components/sections/ProductInfo"
import ProductList from "@components/sections/ProductList"
import Policy from "@components/sections/Policy"

interface ProductPropTypes {
   product: Product
   similarProducts: Product[]
}

const Product: NextPage<ProductPropTypes> = ({ product, similarProducts }) => {
   // handcrafted-fresh-gloves
   // unbranded-wooden-sausages

   const router = useRouter()

   if (router.isFallback) {
      return <div>Loading...</div>
   }

   return (
      <>
         <Head>
            <meta name="description" content="your product" />
            <title>Loiro | Product</title>
         </Head>

         <div>Product</div>

         <section className="max-w-6xl mx-auto pt-20">
            <div className="md:grid grid-cols-2 gap-4">
               <section className="p-4">
                  <ProductGallery product={product} />
               </section>

               <section className="p-4">
                  <ProductInfo product={product} />
               </section>
            </div>
         </section>

         <section className="mt-10">
            <ProductDetails />
         </section>

         <section className="mt-28">
            <ProductList products={similarProducts} title="Similar Products" />
         </section>

         <section className="mt-20">
            <Policy />
         </section>
      </>
   )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
   const { data } = await client.query({ query: GET_PRODUCT_WITH_SLUG, variables: { slug: params?.slug } })
   const { data: similarProducts } = await client.query({ query: GET_PRODUCTS })

   if (!data.products.length) {
      return {
         notFound: true,
      }
   }

   return {
      props: {
         product: data.products[0],
         similarProducts: similarProducts.products,
      },
   }
}

export const getStaticPaths: GetStaticPaths = async () => {
   const res = await client.query({ query: GET_PRODUCTS_SLUG })
   const paths = res.data.products.map((item: { slug: string }) => ({ params: { slug: item.slug } }))

   return {
      paths,
      fallback: "blocking",
   }
}

export default Product
