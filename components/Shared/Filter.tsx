import React, { useEffect } from "react";
import { motion} from "framer-motion";

const btns = [
   { label: "All", value: 0 },
   { label: "Men", value: "men" },
   { label: "Women", value: "women" },
];

export default function Filter({ items, setFiltered, active, setActive }: any) {
   useEffect(() => {
      if (active === 0) {
         setFiltered(items);
         return;
      }

      const fitred = items.filter((item: any) =>
         item.category.includes(active)
      );

      setFiltered(fitred);
   }, [active, items, setFiltered]);

   return (
      <div className="filter-container flex items-center mb-5 p-2 bg-black text-gray-300 w-fit rounded-lg">
         {btns.map((item) => (
            <div key={item.value} className="relative rounded-lg overflow-hidden">
               {item.value === active ? (
                  <motion.div className="bgActive" layoutId="bgActive" />
               ) : null}

               <button
                  onClick={() => setActive(item.value)}
                  className={`${item.value === active ? "text-black" :"hover:bg-white hover:bg-opacity-10"} relative py-2 px-6 rounded-lg font-medium`}
               >
                  {item.label}
               </button>
            </div>
         ))}
      </div>
   );
}
