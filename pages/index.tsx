import Collection from "@components/sections/Collection"
import HeroSlide from "@components/sections/HeroSlide"
import Policy from "@components/sections/Policy"
import type { NextPage } from "next"
import Head from "next/head"

const Home: NextPage = () => {
   return (
      <>
         <Head>
            <meta name="description" content="Generated by create next app" />
            <title>Loiro | Home</title>
         </Head>

         <section className="w-full">
            <HeroSlide />
         </section>

         <section className="">
            <Collection />
         </section>

         <section className="mt-20">
            <Policy />
         </section>
      </>
   )
}

export default Home
