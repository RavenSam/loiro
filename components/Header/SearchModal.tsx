import {
   Input,
   Modal,
   ModalBody,
   ModalCloseButton,
   ModalContent,
   ModalHeader,
   ModalOverlay,
   useDisclosure,
} from "@chakra-ui/react"
import { BiSearchAlt2 } from "react-icons/bi"

export default function SearchModal(): JSX.Element {
   const { isOpen, onOpen, onClose } = useDisclosure()

   return (
      <>
         <button onClick={onOpen} aria-label="search" className="hover:text-violet-400 p-2 active:text-violet-800">
            <BiSearchAlt2 size={25} />
         </button>

         <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />

            <ModalContent>
               <ModalHeader>Search</ModalHeader>

               <ModalCloseButton />

               <ModalBody paddingY={5}>
                  <Input colorScheme="purple" autoFocus={true} variant="outline" placeholder="search a product" />
               </ModalBody>
            </ModalContent>
         </Modal>
      </>
   )
}
