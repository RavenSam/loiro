import { useEffect, useState } from "react"
import Link from "next/link"
import ProductCard from "@components/Shared/ProductCard"

import SwiperCore, { Navigation } from "swiper"
import { SwiperSlide, Swiper } from "swiper/react"

const products = [
   { id: 1, name: "Women T-Shirt  ", category: ["women"], image: ["/assets/p-2.png", "/assets/p-3.png"] },
   { id: 2, name: "Women T-Shirt  ", category: ["women"], image: ["/assets/p-2.png", "/assets/p-3.png"] },
   { id: 11, name: "Men T-Shirt  ", category: ["men"], image: ["/assets/p-4.png", "/assets/p-5.png"] },
   { id: 4, name: "Women T-Shirt  ", category: ["women"], image: ["/assets/p-2.png", "/assets/p-3.png"] },
   { id: 12, name: "Men T-Shirt  ", category: ["men"], image: ["/assets/p-4.png", "/assets/p-5.png"] },
   { id: 6, name: "Women T-Shirt  ", category: ["women"], image: ["/assets/p-2.png", "/assets/p-3.png"] },
   { id: 19, name: "Men T-Shirt  ", category: ["men"], image: ["/assets/p-4.png", "/assets/p-5.png"] },
   { id: 3, name: "Men T-Shirt  ", category: ["men"], image: ["/assets/p-4.png", "/assets/p-5.png"] },
]

export default function ProductList({ title }: { title: string }) {
   SwiperCore.use([Navigation])

   return (
      <div className="styledArrow ArrowTop w-full max-w-6xl mx-auto px-4">
         <div className="flex items-center justify-between mb-6">
            <h2 className="section-title">{title}</h2>

            <Link href="/collections/products">
               <a className="font-semibold tracking-wider hover:tracking-tight transition-all duration-200">View All</a>
            </Link>
         </div>

         <Swiper
            navigation={true}
            breakpoints={{
               640: { slidesPerView: 2 },
               768: { slidesPerView: 3 },
               1024: { slidesPerView: 4 },
            }}
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
