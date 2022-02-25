import type { ComponentStyleConfig } from "@chakra-ui/theme"
import { extendTheme } from "@chakra-ui/react"

const primaryColor = "#8B5CF6"

const Button: ComponentStyleConfig = {
   defaultProps: {
      colorScheme: primaryColor,
   },

   baseStyle: {
      _focus: {
         boxShadow: `0 0 1px 2px ${primaryColor}`,
      },
      _active: {
         boxShadow: `0 0 1px 2px ${primaryColor}`,
      },
   },
}

const Input: ComponentStyleConfig = {
   defaultProps: {
      colorScheme: primaryColor,
      focusBorderColor: primaryColor,
   },
}

const theme = extendTheme({
   components: {
      Button,
      Input,
      CloseButton: Button,
   },

   colors: {
      primary: primaryColor,
   },
})

export default theme
