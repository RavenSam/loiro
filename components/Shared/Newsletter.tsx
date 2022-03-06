

export default function Newsletter(){
	return(
		<div className="">
				
				<div className="max-w-6xl mx-auto px-4 py-10 flex flex-col gap-8 md:gap-2 items-center justify-center md:flex-row md:justify-between">
					
					<div className="space-y-4 text-center md:text-left">
						<h2 className="text-xl md:text-2xl font-semibold">Get Expert Tips In Your Inbox</h2>
						<p className="text-gray-600">Subscribe to our newsletter and stay updated</p>
					</div>

					<div className="flex items-center space-x-2">
						<input type="text" name="newsletter" id="newsletter" placeholder="Write your email here" className="w-full onFocus max-w-md border py-3 px-5 rounded-lg" />
						<button className="btn-black py-3 px-5">Subscribe</button>
					</div>

				</div>


		</div>

	)
}
