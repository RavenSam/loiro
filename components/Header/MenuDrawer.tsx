import { Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, useDisclosure } from "@chakra-ui/react"
import { Key, PropsWithChildren } from "react"
import { BiMenuAltRight } from "react-icons/bi"
import { LinkTypes } from "types"

interface DrawerProps {
   navLinks: LinkTypes[]
}

export default function MenuDrawer({ navLinks }: PropsWithChildren<DrawerProps>): JSX.Element {
   const { isOpen, onOpen, onClose } = useDisclosure()

   return (
      <>
         <button onClick={onOpen} aria-label="menu button" className="active:text-violet-800">
            <BiMenuAltRight size={30} />
         </button>

         <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay />

            <DrawerContent>
               <DrawerHeader borderBottomWidth="1px">Basic Drawer</DrawerHeader>

               <DrawerBody>
                  {navLinks.map((item, i: Key) => (
                     <button key={i} className="btn-ghost w-full">
                        {item.label}
                     </button>
                  ))}
               </DrawerBody>
            </DrawerContent>
         </Drawer>
      </>
   )
}
