import Link from "next/link";
import Image from "next/image";

import Property from "../components/Property";

import { baseURL, fetchApi } from "../utils/fetchApi";

const Banner = ({ imgUrl, purpose, title1, title2, desc1, desc2, linkName, buttonText }) => (
	<div className="flex flex-col flex-wrap items-center justify-center">
		<Image src={imgUrl} alt="RentMe Banner" width={500} height={300} />
		<div className="p-5">
			<p className="text-gray-500 text-sm font-medium">{purpose}</p>
			<p className="text-3xl font-bold">{title1} <br />{title2}</p>
			<p className="text-gray-700 text-lg px-1">{desc1}<br />{desc2}</p>
			<button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
				<Link href={linkName}>{buttonText}</Link>
			</button>
		</div>
	</div>
)

export default function Home({ propertiesForSale, propertiesForRent }) {

	console.log(propertiesForSale, propertiesForRent);

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
			<div className="flex flex-col flex-wrap items-center justify-center">
				{propertiesForRent.map((property) => <Property key={property.id} property={property} />)}
			</div>
			<Banner
				imgUrl={'https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4'}
				purpose={'Buy a House'}
				title1={'Buy a House'}
				title2={'For Your Family'}
				desc1={'Buy a house for your family, friends, or yourself. We have a wide variety of rental homes for you to choose from.'}
				desc2={'We have a wide variety of rental homes for you to choose from.'}
				linkName={'/search?purpose=buy'}
				buttonText={'Buy a House'}
			/>
			<div className="flex flex-col flex-wrap items-center justify-center">
				{propertiesForSale.map((property) => <Property key={property.id} property={property} />)}
			</div>
		</>
	)
}

export async function getStaticProps() {
	const propertyForSale = await fetchApi(`${baseURL}/properties/list?locationExternalIDs=5002&purpose=for-sale&page=1&hitsPerPage=6`);
	const propertyForRent = await fetchApi(`${baseURL}/properties/list?locationExternalIDs=5002&purpose=for-rent&page=1&hitsPerPage=6`);

	return {
		props: {
			propertiesForSale: propertyForSale?.hits,
			propertiesForRent: propertyForRent?.hits,
		}
	}
}
