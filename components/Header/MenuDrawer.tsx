import {
   Drawer,
   DrawerBody,
   DrawerCloseButton,
   DrawerContent,
   DrawerHeader,
   DrawerOverlay,
   Input,
   InputGroup,
   InputRightElement,
   useDisclosure,
} from "@chakra-ui/react"
import { Key, PropsWithChildren } from "react"
import { BiMenuAltRight, BiSearch } from "react-icons/bi"
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
               <DrawerCloseButton />

               <DrawerHeader minH="10"></DrawerHeader>

               <DrawerBody>
                  <InputGroup size="md">
                     <Input variant="outline" placeholder="search a product" />

                     <InputRightElement overflow="hidden">
                        <button className="h-full px-3 text-violet-500" aria-label="menu button">
                           <BiSearch size={20} />
                        </button>
                     </InputRightElement>
                  </InputGroup>

                  <div className="py-5">
                     {navLinks.map((item, i: Key) => (
                        <button key={i} className="btn-ghost w-full">
                           {item.label}
                        </button>
                     ))}
                  </div>
               </DrawerBody>
            </DrawerContent>
         </Drawer>
      </>
   )
}
