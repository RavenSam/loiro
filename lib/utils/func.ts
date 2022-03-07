import { Dispatch, SetStateAction } from "react"

export const changeState = (setState: Dispatch<SetStateAction<string[]>>, e: any) => {
   if (e.target.checked) {
      setState((state) => [...state, e.target.value])
   } else {
      setState((state) => state.filter((x) => x !== e.target.value))
   }
}
