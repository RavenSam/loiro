import type { ComponentStyleConfig } from "@chakra-ui/theme"
import { extendTheme } from "@chakra-ui/react"

const primaryColor = "#8B5CF6"

const Button: ComponentStyleConfig = {
   defaultProps: {
      colorScheme: primaryColor,
   },

   baseStyle: {
      _focus: {
         boxShadow: `none`,
      },
      _focusVisible: {
         outline: `2px solid ${primaryColor}`,
         outlineOffset: "3px",
      },
      _active: {
         boxShadow: `none`,
         transform: `scale(0.9)`,
      },
   },

   variants: {
      solid: {
         background: primaryColor,
         color: "white",
         borderRadius: "25px",
         padding: ".8rem 1.5rem",
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
