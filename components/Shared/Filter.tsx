import React, { useEffect } from "react"

const btns = [
   { label: "All", value: 0 },
   { label: "Men", value: "men" },
   { label: "Women", value: "women" },
]

export default function Filter({ items, setFiltered, active, setActive }: any) {
   useEffect(() => {
      if (active === 0) {
         setFiltered(items)
         return
      }

      const fitred = items.filter((item: any) => item.category.includes(active))

      setFiltered(fitred)
   }, [active, items, setFiltered])

   return (
      <div className="filter-container space-x-4 mb-5">
         {btns.map((item, i) => (
            <button
               key={i}
               onClick={() => setActive(item.value)}
               className={`${
                  item.value === active
                     ? "bg-black text-white  hover:opacity-80"
                     : " text-gray-600 hover:border-black hover:text-black"
               } px-8 py-2 border rounded-3xl font-semibold `}
            >
               {item.label}
            </button>
         ))}
      </div>
   )
}
