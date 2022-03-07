import { BsChevronExpand } from "react-icons/bs"
import { FiltersDrawer } from "./SearchFilters"
import { AnimatePresence, motion } from "framer-motion"
import ProductCard from "@components/Shared/ProductCard"
import SortBy from "@components/Shared/SortBy"

const items = [
   { id: 1, name: "Women T-Shirt  ", category: ["women"], image: ["/assets/p-2.png", "/assets/p-3.png"] },
   { id: 3, name: "Men T-Shirt  ", category: ["men"], image: ["/assets/p-4.png", "/assets/p-5.png"] },
   { id: 2, name: "Women T-Shirt  ", category: ["women"], image: ["/assets/p-2.png", "/assets/p-3.png"] },
   { id: 11, name: "Men T-Shirt  ", category: ["men"], image: ["/assets/p-4.png", "/assets/p-5.png"] },
   { id: 4, name: "Women T-Shirt  ", category: ["women"], image: ["/assets/p-2.png", "/assets/p-3.png"] },
   { id: 12, name: "Men T-Shirt  ", category: ["men"], image: ["/assets/p-4.png", "/assets/p-5.png"] },
   { id: 6, name: "Women T-Shirt  ", category: ["women"], image: ["/assets/p-2.png", "/assets/p-3.png"] },
   { id: 19, name: "Men T-Shirt  ", category: ["men"], image: ["/assets/p-4.png", "/assets/p-5.png"] },
]

export default function SearchResults() {
   return (
      <div>
         <div className="flex items-center justify-between mb-8">
            <div className="md:hidden">
               <FiltersDrawer />
            </div>

            <h2 className="hidden md:block text-xl md:text-2xl text-black font-medium">All</h2>

            <SortBy />
         </div>

         <div className="">
            <motion.div layout className="popular-movies grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4">
               <AnimatePresence>
                  {items.map((item: any) => (
                     <Item key={item.id} item={item} />
                  ))}
               </AnimatePresence>
            </motion.div>
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
