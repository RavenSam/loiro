import { Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, useDisclosure } from "@chakra-ui/react"
import { BiMenuAltRight } from "react-icons/bi"

export default function MenuDrawer({ navLinks }): JSX.Element {
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
                  <button className="btn-ghost">
                     Button
                  </button>
               </DrawerBody>
            </DrawerContent>
         </Drawer>
      </>
   )
}
