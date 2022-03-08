import { NextPage } from "next";
import Head from "next/head";

import MultiStepForm from "@components/sections/MultiStepForm" 

const Checkout: NextPage = () => {
	return (
		<>
			<Head>
				<meta name="description" content="your Checkout" />
				<title>Loiro | Checkout</title>
			</Head>

			<h1 className="mt-32" >Checkout</h1>

			<MultiStepForm />
		</>
	);
};

export default Checkout;
