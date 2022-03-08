
export default function imgSrc(image_id:string){
	let url = process.env.NEXT_PUBLIC_WP_API + "/assets/" + image_id

	return url
}
