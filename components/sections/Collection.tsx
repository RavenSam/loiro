import Image from "next/image"
import React, { Key } from "react"
import { CollectionTypes } from "types"

import img_4 from "public/assets/img-4.jpg"
import img_5 from "public/assets/img-5.jpg"
import img_6 from "public/assets/img-6.jpg"

const collectionData: CollectionTypes[] = [
   {
      name: "Women",
      image: img_6,
      path: "/",
      class: "md:items-end md:text-right",
      desc: "Lorem, ipsum dolor sit amet",
   },
   { name: "New Arrivals", image: img_4, path: "/", class: "md:items-center", desc: "Lorem, ipsum dolor sit amet" },
   { name: "Men", image: img_5, path: "/", class: "md:items-start md:text-left", desc: "Lorem, ipsum dolor sit amet" },
]

export default function Collection(): JSX.Element {
   return (
      <div className="grid grid-cols-1 md:grid-cols-3">
         {collectionData.map((item, i: Key) => (
            <div key={i} className="group relative w-full h-52 lg:h-60 cursor-pointer overflow-hidden">
               <figure className="relative h-full w-full transition duration-[2s] md:group-hover:scale-125 ">
                  <Image src={item.image} alt={item.name} layout="fill" objectFit="cover" placeholder="blur" />
               </figure>

               <div className="absolute inset-0 bg-black bg-opacity-50 " />

               <div
                  className={`absolute inset-0 flex flex-col  justify-center md:justify-end text-center items-center text-white p-4 ${item.class}`}
               >
                  <h2 className="text-lg md:text-xl tracking-wide uppercase font-semibold md:translate-y-12 md:slide-up">
                     {item.name}
                  </h2>

                  <div className=" md:pop-up space-y-3 mt-2">
                     <p className="md:pop-up delay-75">{item.desc}</p>

                     <div className="md:pop-up delay-300">
                        <button className="btn-glass">Explore</button>
                     </div>
                  </div>
               </div>
            </div>
         ))}
      </div>
   )
}
