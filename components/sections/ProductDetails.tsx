import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const tabs = [
   { id: 1, title: "overview" },
   { id: 2, title: "specification" },
   { id: 3, title: "review" },
   { id: 4, title: "Q&A" },
   { id: 5, title: "shipment" },
]

export default function ProductDetails(): JSX.Element {
   const [selectedTab, setSelectedTab] = useState(tabs[0])

   return (
      <div className="max-w-4xl mx-auto p-4">
         <nav className="">
            <ul className="flex w-full items-center justify-center max-w-md mx-auto">
               {tabs.map((item) => (
                  <li
                     key={item.id}
                     className={`${
                        item === selectedTab ? "selected" : ""
                     } relative px-4 py-3 w-full capitalize font-semibold cursor-pointer`}
                     onClick={() => setSelectedTab(item)}
                  >
                     {item.title}
                     {item === selectedTab ? <motion.div className="underline" layoutId="underline" /> : null}
                  </li>
               ))}
            </ul>
         </nav>

         <main className="rounded-lg flex items-center justify-center w-full h-40">
            <AnimatePresence exitBeforeEnter>
               <motion.div
                  key={selectedTab ? selectedTab.id : "empty"}
                  animate={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 20 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.15 }}
               >
                  {selectedTab ? selectedTab.title : "😋"}
               </motion.div>
            </AnimatePresence>
         </main>
      </div>
   )
}
