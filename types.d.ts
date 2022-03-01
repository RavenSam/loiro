import { ElementType } from "react"
import { IconType } from "react-icons"

export type LinkTypes = {
   label: string
   path: string
   icon?: IconType
   color?: string
}

export type MovieItemTypes = {
   title: string
   description: string
   image: string | StaticImageData
}

export type CollectionTypes = {
   name: string
   image: string | StaticImageData
   path: string
   class: string
   desc?: string
}
