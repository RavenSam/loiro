import React, { useEffect } from "react"

const btns = [
   { label: "All", value: 0 },
   { label: "Comedy", value: 35 },
   { label: "Action", value: 28 },
]

export default function Filter({ items, setFiltered, active, setActive }: any) {
   useEffect(() => {
      if (active === 0) {
         setFiltered(items)
         return
      }

      const fitred = items.filter((item: any) => item.genre_ids.includes(active))

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
                     ? "bg-violet-500 text-white  hover:bg-violet-700"
                     : "hover:border-violet-500 hover:text-violet-500 text-gray-600"
               } px-8 py-2 border-2 rounded-3xl font-bold `}
            >
               {item.label}
            </button>
         ))}
      </div>
   )
}
