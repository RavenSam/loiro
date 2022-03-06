import Image from "next/image"
import React from "react"

export default function SearchHero() {
   return (
      <div className="w-full relative max-h-[50vh] overflow-hidden">
         <figure className="w-full h-full">
            <Image
               src="/assets/cover.jpg"
               alt="cover image"
               width={1024}
               height={550}
               layout="responsive"
               objectFit="cover"
            />

            <div className="absolute inset-0 bg-black bg-opacity-40" />
         </figure>

         <div className="absolute inset-0 flex items-center justify-center px-4">
            <div className="w-full max-w-lg rounded-lg p-4 bg-white text-white bg-opacity-20 shadow-xl space-y-4">
               <h1 className="text-lg md:text-3xl font-bold text-center">Search</h1>
               <form className="flex items-center space-x-1">
                  <input
                     placeholder="Search..."
                     type="text"
                     className="w-full bg-white bg-opacity-30 py-2 px-5 rounded-lg outline-none focus:outline focus:outline-white"
                  />
                  <button className="btn-glass outline-none focus:outline focus:outline-white">Search</button>
               </form>
            </div>
         </div>
      </div>
   )
}
