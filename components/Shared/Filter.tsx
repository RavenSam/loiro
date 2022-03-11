import React, { Dispatch, PropsWithChildren, SetStateAction, useEffect } from "react"
import { motion } from "framer-motion"
import { Product } from "types"

const btns = [
   { label: "All", value: 0 },
   { label: "Men", value: 1 },
   { label: "Women", value: 2 },
]

interface FilterPropTypes {
   items: Product[]
   setFiltered: Dispatch<SetStateAction<Product[]>>
   active: number
   setActive: Dispatch<SetStateAction<number>>
}

export default function Filter(props: PropsWithChildren<FilterPropTypes>): JSX.Element {
   const { items, setFiltered, active, setActive } = props

   useEffect(() => {
      if (active === 0) {
         setFiltered(items)
         return
      }

      // const fitred = items.filter((item: Product) => item.category.includes(active))
      const fitred = items.filter((item: Product) => item.categories.some((cat) => +cat.Categories_id.id === active))

      setFiltered(fitred)
   }, [active, items, setFiltered])

   return (
      <div className="filter-container flex items-center mb-5 p-2 bg-black text-gray-300 w-fit rounded-lg space-x-1">
         {btns.map((item) => (
            <div key={item.value} className="relative rounded-lg overflow-hidden">
               {item.value === active ? <motion.div className="bgActive" layoutId="bgActive" /> : null}

               <button
                  onClick={() => setActive(item.value)}
                  className={`${
                     item.value === active ? "text-black" : "hover:bg-white hover:bg-opacity-10"
                  } relative py-2 px-6 rounded-lg font-medium outline-none`}
               >
                  {item.label}
               </button>
            </div>
         ))}
      </div>
   )
}
