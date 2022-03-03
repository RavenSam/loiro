import { useEffect, useState } from "react"
import ProductCard from "@components/Shared/ProductCard"

import { SwiperSlide, Swiper } from "swiper/react"

const products = [
   { name: "Product Card  ", image: "/assets/p-2.png" },
   { name: "Product Card", image: "/assets/p-2.png" },
   { name: "Product Card", image: "/assets/p-2.png" },
   { name: "Product Card", image: "/assets/p-2.png" },
   { name: "Product Card", image: "/assets/p-2.png" },
   { name: "Product Card", image: "/assets/p-2.png" },
   { name: "Product Card", image: "/assets/p-2.png" },
   { name: "Product Card", image: "/assets/p-2.png" },
   { name: "Product Card", image: "/assets/p-2.png" },
   { name: "Product Card", image: "/assets/p-2.png" },
   { name: "Product Card", image: "/assets/p-2.png" },
]

export default function ProductList() {
   return (
      <div className="w-full max-w-6xl mx-auto px-4">
         <Swiper
            breakpoints={{ 640: { slidesPerView: 2 }, 768: { slidesPerView: 3 }, 1024: { slidesPerView: 4 } }}
            spaceBetween={10}
         >
            {products.map((item, i) => (
               <SwiperSlide className="" key={i}>
                  <ProductCard item={item} />
               </SwiperSlide>
            ))}
         </Swiper>
      </div>
   )
}
