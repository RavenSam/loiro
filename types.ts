export type navList = {
   name: string
   href: string
   children: navList[]
}

export interface MenuProps {
   navLists: navList[]
}
