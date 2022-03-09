import { useState } from "react"

export default function ProductQuantity({ quantity = 50 }: { quantity?: number }) {
   const [qty, setQty] = useState(1)

   return (
      <div className="border rounded-lg overflow-hidden shadow !h-full flex items-center m-1 min-w-[100px]">
         <button
            className="border-l font-bold text-center text-lg h-full px-4 md:py-3 text-black bg-white hover:text-white hover:bg-black"
            onClick={() => qty > 1 && setQty(qty - 1)}
            aria-label="minus"
         >
            -
         </button>

         <p className="flex-1 text-center font-bold">{qty}</p>

         <button
            className="border-l font-bold text-center text-lg h-full px-4 md:py-3 text-black bg-white hover:text-white hover:bg-black"
            aria-label="plus"
            onClick={() => qty < quantity && setQty(qty + 1)}
         >
            +
         </button>
      </div>
   )
}
