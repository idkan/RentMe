import Link from "next/link";
import Image from "next/image";

import Property from "../components/Property";

import { baseURL, fetchApi } from "../utils/fetchApi";

const Banner = ({ imgUrl, purpose, title1, title2, desc1, desc2, linkName, buttonText }) => (
	<div className="main-banner">
		<div className="max-w-full my-4 mx-auto lg:flex">
			<div className="rounded border-2 border-gray-200 p-4 flex flex-col md:flex-row">
				<Image src={imgUrl} alt="RentMe Banner" width={500} height={300} />
				<div className="p-4">
					<div className="mb-8">
						<p className="text-gray-500 text-sm font-medium">{purpose}</p>
						<p className="text-3xl font-bold mb-2">{title1} <br />{title2}</p>
						<p className="text-gray-700 text-lg px-1">{desc1}<br />{desc2}</p>
					</div>
					<div className="flex items-center">
					<button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
						<Link href={linkName}>{buttonText}</Link>
					</button>
					</div>
				</div>
			</div>
		</div>
	</div>
)

export default function Home({ propertiesForSale, propertiesForRent }) {

	console.log(propertiesForSale, propertiesForRent);

	return (
		<>
			<main className="max-w-screen-xl m-auto p-4 md:p-0">
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
				<div className="grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
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
				<div className="grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
					{propertiesForSale.map((property) => <Property key={property.id} property={property} />)}
				</div>
			</main>
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
