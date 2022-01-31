import Link from "next/link";
import Image from "next/image";

const Banner = ({ imgUrl, purpose, title1, title2, desc1, desc2, linkName, buttonText }) => (
	<div className="flex flex-col flex-wrap items-center justify-center h-screen">
		<img src={imgUrl} alt="RentMe Banner" className="w-1/2" />
		<div className="p-5">
			<p className="text-gray-500 text-sm font-medium">{purpose}</p>
			<p className="text-3xl font-bold">{title1} <br />{title2}</p>
			<p className="text-gray-700 text-lg px-1">{desc1}<br />{desc2}</p>
			<button className="text-xl bg-white">
				<Link href={linkName}>{buttonText}</Link>
			</button>
		</div>
	</div>
)

export default function Home() {
	return (
		<>
			<Banner
				imgUrl={'https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4'}
				purpose={'Rent a House'}
				title1={'Rental Homes for'}
				title2={'Everyone'}
				desc1={'Rent a house for your family, friends, or yourself. We have a wide variety of rental homes for you to choose from.'}
				desc2={'We have a wide variety of rental homes for you to choose from.'}
				linkName={'/search?purpose=rent'}
				buttonText={'Rent a House'}
			/>
		</>
	)
}
