import Stepper from "@components/Shared/Stepper"
import StepperControl from "@components/Shared/StepperControl"

export default function MultiStepForm():JSX.Element{
	return(
		<div className="md:1/2 mx-auto shadow-xl rounded-lg pb-2 bg-white">
			
			<div className="container mt-5 horizontal">
				<Stepper />
			</div>

			<StepperControl/>

		</div>
	)
} 
