import { ChangeEvent, useEffect, useState } from "react"
import { Menu, MenuButton, MenuItemOption, MenuList, MenuOptionGroup } from "@chakra-ui/react"
import { BsChevronExpand } from "react-icons/bs"
import { useRouter } from "next/router"

const sortOptions = [
   { label: "newest", value: "newest" },
   { label: "popularity", value: "popularity" },
   { label: "price: low to high", value: "low_to_high" },
   { label: "price: high to low", value: "high_to_low" },
]

export default function SortBy() {
   const [defaultSort, setDefaultSort] = useState("newest")
   const { pathname, query, push } = useRouter()

   useEffect(() => {
      if (query.sort_by && typeof query.sort_by === "string") {
         setDefaultSort(query.sort_by)
      }
   }, [query.sort_by])

   const handleSorting = (e: string | string[]) => {
      push({ pathname, query: { ...query, sort_by: e } })
   }

   return (
      <>
         <Menu isLazy>
            <MenuButton>
               <span className="btn-white border font-medium shadow-sm gap-4">
                  Sorting by
                  <BsChevronExpand size={20} />
               </span>
            </MenuButton>
            <MenuList>
               <MenuOptionGroup onChange={handleSorting} defaultValue={defaultSort} title="Sort by" type="radio">
                  {sortOptions.map((item) => (
                     <MenuItemOption textTransform={"capitalize"} key={item.value} value={item.value}>
                        {item.label}
                     </MenuItemOption>
                  ))}
               </MenuOptionGroup>
            </MenuList>
         </Menu>
      </>
   )
}
