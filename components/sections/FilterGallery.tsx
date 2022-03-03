/* eslint-disable @next/next/no-img-element */
import Filter from "@components/Shared/Filter"
import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import ProductCard from "@components/Shared/ProductCard"

const items = [
   { id: 1, name: "Women T-Shirt  ", category: ["women"], image: ["/assets/p-2.png", "/assets/p-3.png"] },
   { id: 2, name: "Women T-Shirt  ", category: ["women"], image: ["/assets/p-2.png", "/assets/p-3.png"] },
   { id: 11, name: "Men T-Shirt  ", category: ["men"], image: ["/assets/p-4.png", "/assets/p-5.png"] },
   { id: 4, name: "Women T-Shirt  ", category: ["women"], image: ["/assets/p-2.png", "/assets/p-3.png"] },
   { id: 12, name: "Men T-Shirt  ", category: ["men"], image: ["/assets/p-4.png", "/assets/p-5.png"] },
   { id: 6, name: "Women T-Shirt  ", category: ["women"], image: ["/assets/p-2.png", "/assets/p-3.png"] },
   { id: 19, name: "Men T-Shirt  ", category: ["men"], image: ["/assets/p-4.png", "/assets/p-5.png"] },
   { id: 7, name: "Women T-Shirt  ", category: ["women"], image: ["/assets/p-2.png", "/assets/p-3.png"] },
   { id: 18, name: "Men T-Shirt  ", category: ["men"], image: ["/assets/p-4.png", "/assets/p-5.png"] },
   { id: 10, name: "Women T-Shirt  ", category: ["women"], image: ["/assets/p-2.png", "/assets/p-3.png"] },

   { id: 13, name: "Men T-Shirt  ", category: ["men"], image: ["/assets/p-4.png", "/assets/p-5.png"] },
   { id: 9, name: "Women T-Shirt  ", category: ["women"], image: ["/assets/p-2.png", "/assets/p-3.png"] },
   { id: 14, name: "Men T-Shirt  ", category: ["men"], image: ["/assets/p-4.png", "/assets/p-5.png"] },
   { id: 5, name: "Women T-Shirt  ", category: ["women"], image: ["/assets/p-2.png", "/assets/p-3.png"] },
   { id: 15, name: "Men T-Shirt  ", category: ["men"], image: ["/assets/p-4.png", "/assets/p-5.png"] },
   { id: 8, name: "Women T-Shirt  ", category: ["women"], image: ["/assets/p-2.png", "/assets/p-3.png"] },
   { id: 16, name: "Men T-Shirt  ", category: ["men"], image: ["/assets/p-4.png", "/assets/p-5.png"] },
   { id: 17, name: "Men T-Shirt  ", category: ["men"], image: ["/assets/p-4.png", "/assets/p-5.png"] },
   { id: 3, name: "Women T-Shirt  ", category: ["women"], image: ["/assets/p-2.png", "/assets/p-3.png"] },
   { id: 20, name: "Men T-Shirt  ", category: ["men"], image: ["/assets/p-4.png", "/assets/p-5.png"] },
]

export default function FilterGallery() {
   const [filtered, setFiltered] = useState([])
   const [active, setActive] = useState(0)

   return (
      <div className="max-w-6xl mx-auto px-4">
         <Filter items={items} setFiltered={setFiltered} active={active} setActive={setActive} />

         <motion.div layout className="popular-movies grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4">
            <AnimatePresence>
               {filtered.map((item: any) => (
                  <Item key={item.id} item={item} />
               ))}
            </AnimatePresence>
         </motion.div>
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
