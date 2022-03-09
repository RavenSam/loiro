import ProductQuantity from "@components/Shared/ProductQuantity"
import React, { PropsWithChildren, useState } from "react"
import { Product, Variant } from "types"
import { BsStar } from "react-icons/bs"

interface ProductInfoTypes {
   product: Product
}

// const sizes = ["L", "M", "S", "XL", "XXL"]
// const colors = ["Black", "Blue", "Olive", "Maroon", "Brown", "White", "Gray"]

export default function ProductInfo({ product }: PropsWithChildren<ProductInfoTypes>): JSX.Element {
   return (
      <>
         <div className="space-y-6">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">{product.name}</h1>

            <div className="flex items-center">
               <div className="flex items-center text-gray-600">
                  {[1, 2, 3, 4, 5].map((x) => (
                     <BsStar key={x} size={25} />
                  ))}
               </div>

               <span className="font-semibold ml-2">Reviews(0)</span>
            </div>

            <h2 className="text-lg md:text-xl lg:text-2xl font-semibold flex items-center">
               <span className="line-through text-gray-500 mr-2 scale-75">${product.previous_price}</span>
               <span>${product.price}</span>
            </h2>
            <div className="">
               <h3 className="md:text-lg uppercase font-semibold">description</h3>
               <p className="text-gray-600 m-2 font-light">
                  <div dangerouslySetInnerHTML={{ __html: product.description! }} />
               </p>
            </div>

            {product.variants.length > 0 && (
               <>
                  {/* SIZE */}
                  <VariantsSize variant={product.variants} />

                  {/* COLOR */}
                  <VariantsColor variant={product.variants} />
               </>
            )}

            <div className="pb-4 flex items-center flex-wrap">
               <div className="min-w-[130px]">
                  <ProductQuantity quantity={product.quantity} />
               </div>
               <button className="btn-black justify-center md:py-3 flex-1 m-1">Add To Card</button>
            </div>
         </div>
      </>
   )
}

const VariantsColor = ({ variant }: { variant: Variant[] }) => {
   const [selectedColor, setSelectedColor] = useState(variant[0].color)

   return (
      <div className="">
         <h3 className="md:text-lg uppercase font-semibold">Color</h3>
         <div className="">
            {variant.map(({ color }) => (
               <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  style={{
                     backgroundColor: color,
                     outlineColor: selectedColor === color ? color : "transparent",
                  }}
                  className={`${
                     selectedColor === color ? "w-7 h-7" : "w-8 h-8"
                  }  rounded-lg  m-4 shadow-lg outline outline-2  outline-offset-4 transition-all duration-300`}
                  aria-label="color button"
               ></button>
            ))}
         </div>
      </div>
   )
}

const VariantsSize = ({ variant }: { variant: Variant[] }) => {
   const [selectedSize, setSelectedSize] = useState("M")

   return (
      <div className="">
         <h3 className="md:text-lg uppercase font-semibold">Size</h3>
         <div className="">
            {variant.map(({ size }) => (
               <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`${
                     selectedSize === size
                        ? "bg-black border-black text-white outline outline-2 outline-black outline-offset-4"
                        : "bg-white text-black"
                  } w-12 h-12 rounded-lg  border shadow text-center outline-none m-4 transition-all duration-300`}
               >
                  {size}
               </button>
            ))}
         </div>
      </div>
   )
}
