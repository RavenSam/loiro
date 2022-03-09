import { ElementType } from "react"
import { IconType } from "react-icons"

export type LinkTypes = {
   label: string
   path: string
   icon?: IconType
   color?: string
   children?: LinkTypes[]
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

export interface Product {
   id: string
   name: string
   description?: string
   price: number
   previous_price?: number
   quantity: number
   slug: string
   type: string
   variants: Variant[]
   categories: Categories[]
   images: any[]
   thumbnail: Thumbnail
}

export interface Categories {
   Categories_id: Category
}

export interface Category {
   name: string
   id: string
   slug: string
   thumbnail?: Thumbnail
}

export interface Thumbnail {
   id: string
}

export interface Variant {
   color: string
   size: Size
   inventory?: number
}

// export enum Status {
//    Archived = "archived",
//    Draft = "draft",
//    Published = "published",
// }

export enum Size {
   ExtraLarge = "Extra Large",
   Large = "Large",
   Medium = "Medium",
   Small = "Small",
}
