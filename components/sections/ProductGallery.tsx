import Image from "next/image"
import React, { PropsWithChildren, useState } from "react"
import { Product } from "types"
import imgSrc from "@lib/utils/imgSrc"

import SwiperCore, { Navigation } from "swiper"
import { SwiperSlide, Swiper } from "swiper/react"

interface ProductInfoTypes {
   product: Product
}

const items = [
   { id: 1, img: "/assets/p-2.png" },
   { id: 2, img: "/assets/p-3.png" },
   { id: 3, img: "/assets/p-2.png" },
   { id: 4, img: "/assets/p-3.png" },
   { id: 5, img: "/assets/p-2.png" },
   { id: 6, img: "/assets/p-3.png" },
]

export default function ProductGallery({ product }: PropsWithChildren<ProductInfoTypes>): JSX.Element {
   const [selectedImg, setSelectedImg] = useState(items[0])

   SwiperCore.use([Navigation])

   return (
      <>
         <div className="styledArrow mdArrow">
            <figure className=" text-center relative rounded-lg overflow-hidden min-h-[500px] max-h-[80vh]">
               <Image src={selectedImg.img} alt={product.name} objectFit="contain" layout="fill" />
            </figure>

            <Swiper className="py-8" grabCursor={true} navigation={true} slidesPerView="auto" spaceBetween={20}>
               {items.map((item) => (
                  <SwiperSlide
                     onClick={() => setSelectedImg(item)}
                     className={`${
                        selectedImg.id === item.id ? "scale-110 shadow-lg rounded-xl transition duration-300" : ""
                     } w-28`}
                     key={item.id}
                  >
                     <figure className={` relative rounded-xl shadow-lg overflow-hidden w-full aspect-square`}>
                        <Image
                           src={item.img}
                           alt={item.img}
                           width={80}
                           height={80}
                           layout="responsive"
                           objectFit="cover"
                        />
                     </figure>
                  </SwiperSlide>
               ))}
            </Swiper>
         </div>
      </>
   )
}