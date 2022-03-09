import ProductDetails from "@components/sections/ProductDetails"
import ProductGallery from "@components/sections/ProductGallery"
import ProductInfo from "@components/sections/ProductInfo"
import ProductList from "@components/sections/ProductList"
import { NextPage } from "next"
import Head from "next/head"
import { Product } from "types"

const product = {
   id: "product_id",
   name: "Product Test One",
   price: 23,
   thumbnail: "/assets/img-1.jpeg",
   description: "<p>The Football Is Good For Training And Recreational Purposes</p>",
}

const Product: NextPage = () => {
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
            <ProductList title="Similar Products" />
         </section>
      </>
   )
}

export default Product
