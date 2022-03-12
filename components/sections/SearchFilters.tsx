import {
   Drawer,
   DrawerBody,
   DrawerCloseButton,
   DrawerContent,
   DrawerHeader,
   DrawerOverlay,
   useDisclosure,
} from "@chakra-ui/react"
import { changeState } from "@lib/utils/func"
import { useRouter } from "next/router"
import React, { PropsWithChildren, useState } from "react"
import { BsSliders } from "react-icons/bs"
import { HiX } from "react-icons/hi"
import { Category } from "types"

type filterTypes = "category" | "price" | "color"

const prices = [
   "Under $50",
   "$50 to $100",
   "$100 to $150",
   "$150 to $200",
   "$200 to $300",
   "$300 to $500",
   "$500 to $1000",
   "Over $1000",
]

const colors = ["Black", "Blue", "Olive", "Maroon", "Brown", "White", "Gray"]

interface FiltersTypes {
   categories: Category[]
}

export default function SearchFilters({ categories }: PropsWithChildren<FiltersTypes>): JSX.Element {
   const [categoryFilters, setCategoryFilters] = useState<string[]>([])
   const [priceFilters, setPriceFilters] = useState<string[]>([])
   const [colorFilters, setColorFilters] = useState<string[]>([])

   const { pathname, query, push } = useRouter()
   const { sort_by } = query

   const removeSorting = () => {
      delete query.sort_by

      push({ pathname, query })
   }

   const handleFiters = (val: filterTypes) => (e: any) => {
      switch (val) {
         case "category":
            changeState(setCategoryFilters, e)
            break

         case "price":
            changeState(setPriceFilters, e)
            break

         case "color":
            changeState(setColorFilters, e)
            break
      }
   }

   return (
      <>
         <div className="">
            <div className="flex items-center justify-between">
               <h2 className="text-xl md:text-2xl text-black font-medium">Filters</h2>

               <button className="text-gray-700 font-semibold text-sm tracking-wider hover:tracking-tight transition-all duration-200">
                  Clear All
               </button>
            </div>

            <div className="h-7 my-3">
               {sort_by ? (
                  <span className="h-full w-fit pr-4 pl-1 gap-0 flex items-center rounded-lg shadow-sm border border-gray-400 font-normal text-xs">
                     <button
                        onClick={removeSorting}
                        className="hover:bg-black hover:bg-opacity-10  p-2 rounded-lg mr-1"
                     >
                        <HiX />
                     </button>

                     {sort_by}
                  </span>
               ) : null}
            </div>

            <hr className="mb-8" />

            <div className="space-y-3 mb-8">
               <h3 className="text-lg md:text-xl text-black">Category</h3>

               <ul className="space-y-2">
                  {categories.map((cat) => (
                     <li key={cat.id} className="flex items-center space-x-2 text-gray-600 hover:text-black">
                        <input type="checkbox" id={cat.id} value={cat.id} onClick={handleFiters("category")} />
                        <label htmlFor={cat.id} className="capitalize ">
                           {cat.name}
                        </label>
                     </li>
                  ))}
               </ul>
            </div>

            <div className="space-y-3 mb-8">
               <h3 className="text-lg md:text-xl text-black">Price</h3>

               <ul className="space-y-2">
                  {prices.map((price) => (
                     <li key={price} className="flex items-center space-x-2 text-gray-600 hover:text-black">
                        <input type="checkbox" id={price} value={price} onClick={handleFiters("price")} />
                        <label htmlFor={price} className=" ">
                           {price}
                        </label>
                     </li>
                  ))}
               </ul>
            </div>

            <div className="space-y-3 mb-8">
               <h3 className="text-lg md:text-xl text-black">Color</h3>

               <ul className="space-y-2">
                  {colors.map((color) => (
                     <li key={color} className="flex items-center space-x-2 text-gray-600 hover:text-black">
                        <input type="checkbox" id={color} value={color} onClick={handleFiters("color")} />
                        <label htmlFor={color} className="capitalize  flex items-center gap-2">
                           <span
                              style={{ backgroundColor: color }}
                              className="w-5 h-5 inline-block rounded-full"
                           ></span>
                           <span>{color}</span>
                        </label>
                     </li>
                  ))}
               </ul>
            </div>
         </div>
      </>
   )
}

export const FiltersDrawer = ({ categories }: PropsWithChildren<FiltersTypes>): JSX.Element => {
   const { isOpen, onOpen, onClose } = useDisclosure()

   return (
      <>
         <button onClick={onOpen} className="btn-white border font-medium shadow-sm gap-2">
            <BsSliders size={18} />
            Filters
         </button>

         <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay />

            <DrawerContent>
               <DrawerCloseButton />

               <DrawerHeader pb={9}></DrawerHeader>

               <DrawerBody>
                  <SearchFilters categories={categories} />
               </DrawerBody>
            </DrawerContent>
         </Drawer>
      </>
   )
}
