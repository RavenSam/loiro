import type { GetStaticProps, NextPage } from "next"
import Head from "next/head"
import client from "@lib/config/apollo"
import { GET_PRODUCTS } from "@lib/gql/queries/getProducts"
import { GET_CATEGORIES } from "@lib/gql/queries/getData"
import useWindowSize from "hooks/useWindowSize"
import { GET_SEARCH_PRODUCTS } from "@lib/gql/queries/getProducts"
import { useQuery } from "@apollo/client"
import { Category } from "types"
import { useState } from "react"

import SearchHero from "@components/sections/SearchHero"
import SearchFilters from "@components/sections/SearchFilters"
import SearchResults from "@components/sections/SearchResults"
import Breadcrumbs from "@components/Shared/Breadcrumbs"
import Newsletter from "@components/Shared/Newsletter"

interface SearchPropTypes {
   categories: Category[]
}

const Search: NextPage<SearchPropTypes> = ({ categories }) => {
   const [searchVariable, setSearchVariable] = useState("")
   const { data, loading, error } = useQuery(GET_SEARCH_PRODUCTS, {
      variables: { search: searchVariable },
   })

   const { width } = useWindowSize()

   return (
      <>
         <Head>
            <meta name="description" content="Search your products" />
            <title>Loiro | Search</title>
         </Head>

         <section>
            <SearchHero setSearchVariable={setSearchVariable} />
         </section>

         <div className=" max-w-7xl mx-auto ">
            <div className="px-4 py-6 md:py-10">
               <Breadcrumbs />
            </div>

            <div className="md:grid grid-cols-12 gap-4 pb-20">
               {width && width > 768 ? (
                  <section className="hidden md:block col-span-3 px-4">
                     <SearchFilters categories={categories} />
                  </section>
               ) : null}

               <section className="col-span-9 px-4 relative">
                  {error ? (
                     <p className="text-center px-4 py-6 text-gray-600 font-semibold">Something went wrong</p>
                  ) : loading ? (
                     <p className="text-center px-4 py-6 text-gray-600 font-semibold">Loading...</p>
                  ) : (
                     <SearchResults products={data.products} categories={categories} />
                  )}
               </section>
            </div>
         </div>

         <section className="mt-20">
            <Newsletter />
         </section>
      </>
   )
}

export const getStaticProps: GetStaticProps = async () => {
   const { data: category } = await client.query({ query: GET_CATEGORIES })

   return {
      props: {
         categories: category.Categories,
      },
   }
}

export default Search
