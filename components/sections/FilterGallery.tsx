/* eslint-disable @next/next/no-img-element */
import Filter from "@components/Shared/Filter"
import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

const api_url = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_API}&language=en-US`

export default function FilterGallery() {
   const [items, setItems] = useState([])
   const [filtered, setFiltered] = useState([])
   const [active, setActive] = useState(0)

   // useEffect(() => {
   //    fecthData()
   // }, [])

   const fecthData = async () => {
      const res = await fetch(api_url)
      const data = await res.json()
      setItems(data.results)
      setFiltered(data.results)
   }

   return (
      <div className="max-w-5xl mx-auto px-4">
         <Filter items={items} setFiltered={setFiltered} active={active} setActive={setActive} />

         {/* <motion.div layout className="popular-movies grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4">
            <AnimatePresence>
               {filtered.map((item, i) => (
                  <Item key={item.id} item={item} />
               ))}
            </AnimatePresence>
         </motion.div> */}
      </div>
   )
}

const Item = ({ item }: any) => {
   return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} layout className="">
         <h2>{item.title}</h2>
         <img
            src={"https://image.tmdb.org/t/p/w500" + item.backdrop_path}
            alt=""
            className="rounded-md object-cover w-full h-52"
         />
      </motion.div>
   )
}
