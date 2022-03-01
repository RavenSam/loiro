import Image from "next/image"
import React, { Key } from "react"
import { CollectionTypes } from "types"

const collectionData: CollectionTypes[] = [
   { name: "Men", image: "/assets/img-1.jpeg", path: "/" },
   { name: "Women", image: "/assets/img-1.jpeg", path: "/" },
   { name: "Accessories", image: "/assets/img-1.jpeg", path: "/" },
]

export default function Collection(): JSX.Element {
   return (
      <div className="max-w-5xl w-full mx-auto px-4">
         <h2 className="text-2xl md:text-3xl uppercase text-center mb-8">OUR COLLECTION</h2>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {collectionData.map((item, i: Key) => (
               <CollectionItem item={item} key={i} />
            ))}
         </div>
      </div>
   )
}

interface ItemProps {
   item: CollectionTypes
}

const CollectionItem = ({ item }: ItemProps) => {
   return (
      <div className="group relative w-full h-40 md:h-52 cursor-pointer overflow-hidden rounded">
         <figure className="relative h-full w-full transition duration-[2s] md:group-hover:scale-125 ">
            <Image src={item.image} alt={item.name} layout="fill" objectFit="cover" />
         </figure>

         <div className="absolute inset-0 bg-black bg-opacity-50 " />

         <div className="absolute inset-0 flex items-center justify-center text-white  md:translate-y-4 md:opacity-0 transition duration-500 group-hover:opacity-100 group-hover:translate-y-0">
            <h3 className="text-lg md:text-xl tracking-wide uppercase">{item.name}</h3>
         </div>
      </div>
   )
}
