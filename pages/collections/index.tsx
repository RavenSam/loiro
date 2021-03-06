import { NextPage, GetStaticProps } from "next"
import Head from "next/head"
import { useEffect, useState } from "react"
import client from "@lib/config/apollo"
import { GET_PRODUCTS } from "@lib/gql/queries/getProducts"

const Collections: NextPage<{ products: [] }> = ({ products }) => {
   // console.log(products);

   return (
      <>
         <Head>
            <meta name="description" content="Generated by create next app" />
            <title>Loiro | Collections</title>
         </Head>

         <div>Collections</div>
      </>
   )
}

// export const getStaticProps:GetStaticProps = async ()=> {
//    const res = await client.query({ query: GET_PRODUCTS });

//    return {
//       props: {
//          products: res.data.products.nodes,
//       },
//    };
// }

export default Collections
