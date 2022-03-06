import {
   Input,
   InputGroup,
   InputRightElement,
   Modal,
   ModalBody,
   ModalCloseButton,
   ModalContent,
   ModalHeader,
   ModalOverlay,
   useDisclosure,
} from "@chakra-ui/react"
import { BiSearch, BiSearchAlt2 } from "react-icons/bi"

export default function SearchModal(): JSX.Element {
   const { isOpen, onOpen, onClose } = useDisclosure()

   return (
      <>
         <button onClick={onOpen} aria-label="search" className="btn-menu p-2">
            <BiSearchAlt2 size={25} />
         </button>

         <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />

            <ModalContent>
               <ModalHeader>Search</ModalHeader>

               <ModalCloseButton />

               <ModalBody paddingY={5} paddingBottom={10}>
                  <InputGroup size="md">
                     <Input autoFocus={true} variant="unstyled" placeholder="search a product" />

                     <InputRightElement>
                        <button className="h-full px-3 text-black" aria-label="menu button">
                           <BiSearch size={20} />
                        </button>
                     </InputRightElement>
                  </InputGroup>
               </ModalBody>
            </ModalContent>
         </Modal>
      </>
   )
}
