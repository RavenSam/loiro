// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next"
import client from "@lib/config/apollo"
import { GET_PRODUCTS } from "@lib/gql/queries/getProducts"

type Data = {
   products: any
}

export default async (req: NextApiRequest, res: NextApiResponse<Data>) => {
   const { data } = await client.query({ query: GET_PRODUCTS })

   res.status(200).json({ products: data.products.nodes })
}
