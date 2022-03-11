import Image from "next/image"
import React, { PropsWithChildren, useEffect, useState } from "react"
import { Product, Thumbnail } from "types"
import imgSrc from "@lib/utils/imgSrc"

import SwiperCore, { Navigation } from "swiper"
import { SwiperSlide, Swiper } from "swiper/react"

interface ProductInfoTypes {
   product: Product
}

export default function ProductGallery({ product }: PropsWithChildren<ProductInfoTypes>): JSX.Element {
   const [selectedImg, setSelectedImg] = useState<Thumbnail>(product.thumbnail)
   SwiperCore.use([Navigation])


   useEffect(()=>{
      setSelectedImg(product.thumbnail)
   },[product.thumbnail])

   return (
      <>
         <div className="styledArrow mdArrow">
            <figure className=" text-center relative rounded-lg overflow-hidden min-h-[500px] max-h-[80vh]">
               <Image src={imgSrc(selectedImg.id)} alt={product.name} objectFit="contain" layout="fill" />
            </figure>

            {product.images.length > 0 && (
               <Swiper className="py-8" grabCursor={true} navigation={true} slidesPerView="auto" spaceBetween={20}>
                  {product.images.map((item) => (
                     <SwiperSlide
                        onClick={() => setSelectedImg(item.image)}
                        className={`${
                           selectedImg.id === item.image.id
                              ? "scale-110 shadow-lg rounded-xl transition duration-300"
                              : ""
                        } w-28`}
                        key={item.image.id}
                     >
                        <figure className={` relative rounded-xl shadow-lg overflow-hidden w-full aspect-square`}>
                           <Image
                              src={imgSrc(item.image.id)}
                              alt={item.image.id}
                              width={80}
                              height={80}
                              layout="responsive"
                              objectFit="cover"
                           />
                        </figure>
                     </SwiperSlide>
                  ))}
               </Swiper>
            )}
         </div>
      </>
   )
}
