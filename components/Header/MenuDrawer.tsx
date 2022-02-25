import { Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, useDisclosure } from "@chakra-ui/react"
import { BiMenuAltRight } from "react-icons/bi"

export default function MenuDrawer(): JSX.Element {
   const { isOpen, onOpen, onClose } = useDisclosure()

   return (
      <>
         {/* <Button colorScheme="blue" onClick={onOpen}>
            Open
         </Button> */}

         <button onClick={onOpen} aria-label="menu button" className="active:text-violet-800">
            <BiMenuAltRight size={30} />
         </button>

         <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay />

            <DrawerContent>
               <DrawerHeader borderBottomWidth="1px">Basic Drawer</DrawerHeader>

               <DrawerBody>
                  <p>Some contents...</p>
                  <p>Some contents...</p>
                  <p>Some contents...</p>
               </DrawerBody>
            </DrawerContent>
         </Drawer>
      </>
   )
}
