import Filter from "@components/Shared/Filter"
import { PropsWithChildren, useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import ProductCard from "@components/Shared/ProductCard"
import { Product } from "types"

interface GalleryPropTypes {
   products: Product[]
}

export default function FilterGallery({ products }: PropsWithChildren<GalleryPropTypes>): JSX.Element {
   const [filtered, setFiltered] = useState<Product[]>([])
   const [active, setActive] = useState(0)

   return (
      <div className="max-w-6xl mx-auto px-4">
         <Filter items={products} setFiltered={setFiltered} active={active} setActive={setActive} />

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

const Item = ({ item }: { item: Product }) => {
   return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} layout>
         <ProductCard item={item} />
      </motion.div>
   )
}
