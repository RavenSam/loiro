import { BsChevronExpand } from "react-icons/bs"
import { FiltersDrawer } from "./SearchFilters"
import { AnimatePresence, motion } from "framer-motion"
import { PropsWithChildren } from "react"
import { Category, Product } from "types"

import ProductCard from "@components/Shared/ProductCard"
import SortBy from "@components/Shared/SortBy"

interface ResultsTypes {
   categories: Category[]
   products: Product[]
}

export default function SearchResults({ categories, products }: PropsWithChildren<ResultsTypes>): JSX.Element {
   if (products.length === 0) {
      return <p className="text-center px-4 py-6 text-gray-600 font-semibold">No Results Found</p>
   }

   return (
      <div>
         <div className="flex items-center justify-between mb-8">
            <div className="md:hidden">
               <FiltersDrawer categories={categories} />
            </div>

            <h2 className="hidden md:block text-xl md:text-2xl text-black font-medium">All</h2>

            <SortBy />
         </div>

         <div className="">
            <div className="popular-movies grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4">
               <AnimatePresence>
                  {products.map((item) => (
                     <Item key={item.id} item={item} />
                  ))}
               </AnimatePresence>
            </div>
         </div>

         <div className="">
            <button className="btn-white border font-medium shadow-sm gap-4 mx-auto">More</button>
         </div>
      </div>
   )
}

const Item = ({ item }: any) => {
   return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} layout>
         <ProductCard item={item} />
      </motion.div>
   )
}
