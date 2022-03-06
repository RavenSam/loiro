import type { GetStaticProps, NextPage } from "next"
import Head from "next/head"

import SearchBox from "@components/sections/SearchBox"
import SearchHero from "@components/sections/SearchHero"
import SearchFilters from "@components/sections/SearchFilters"
import SearchResults from "@components/sections/SearchResults"
import Breadcrumbs from "@components/Shared/Breadcrumbs"

const Search: NextPage = () => {
   return (
      <>
         <Head>
            <meta name="description" content="Search your products" />
            <title>Loiro | Search</title>
         </Head>

         <section>
            <SearchHero />
         </section>

         <div className=" max-w-7xl mx-auto ">
            <div className="px-4 py-6 md:py-10">
               <Breadcrumbs />
            </div>

            <div className="md:grid grid-cols-12 gap-4">
               <section className="hidden md:block col-span-3 px-4">
                  <SearchFilters />
               </section>

               <section className="col-span-9 px-4">
                  <SearchResults />
               </section>
            </div>
         </div>
      </>
   )
}

export const getStaticProps: GetStaticProps = async () => {
   return {
      props: {
         products: [],
      },
   }
}

export default Search
