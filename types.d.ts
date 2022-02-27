import { ElementType } from "react"
import { IconType } from "react-icons"

export type LinkTypes = {
   label: string
   path: string
   icon?: IconType
}

export type MovieItemTypes = {
   title: string
   description: string
   image: string | StaticImageData
}
