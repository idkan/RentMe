import Link from "next/link";
import Image from "next/image";

import Property from "../components/Property";

import { baseURL, fetchApi } from "../utils/fetchApi";

const Banner = ({ imgUrl, purpose, title1, title2, desc1, desc2, linkName, buttonText }) => (
	<div className="main-banner mb-8">
		<div className="max-w-full my-4 mx-auto">
			<div className="rounded border-2 border-gray-200 flex flex-col md:flex-row">
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

	return (
		<>
			<Banner
				imgUrl={'https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4'}
				purpose={'Rent a House'}
				title1={'Rental Homes for'}
				title2={'Everyone'}
				desc1={'Rent a house for your family, friends, or yourself. We have a wide variety of rental homes for you to choose from.'}
				desc2={'We have a wide variety of rental homes for you to choose from.'}
				linkName={'/search?purpose=for-rent'}
				buttonText={'Rent a House'}
			/>
			{propertiesForRent.length !== 0
				? <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-8"> {propertiesForRent?.map((property) => <Property key={property.id} property={property} />)}</div>
				: <p className="text-3xl font-bold text-center mb-8">Under Maintenance 🚧👷🏻‍♂️🛠 (Exceeded the MONTHLY API Requests)</p>
			}
			<Banner
				imgUrl={'https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008'}
				purpose={'Buy a House'}
				title1={'Buy a House'}
				title2={'For Your Family'}
				desc1={'Buy a house for your family, friends, or yourself. We have a wide variety of rental homes for you to choose from.'}
				desc2={'We have a wide variety of rental homes for you to choose from.'}
				linkName={'/search?purpose=for-sale'}
				buttonText={'Buy a House'}
			/>
			{propertiesForSale.length !== 0
				? <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-8"> {propertiesForSale?.map((property) => <Property key={property.id} property={property} />)}</div>
				: <p className="text-3xl font-bold text-center">Under Maintenance 🚧👷🏻‍♂️🛠 (Exceeded the MONTHLY API Requests)</p>
			}
		</>
	)
}

export async function getStaticProps() {
	const propertyForSale = await fetchApi(`${baseURL}/properties/list?locationExternalIDs=5002&purpose=for-sale&page=1&hitsPerPage=8`);
	const propertyForRent = await fetchApi(`${baseURL}/properties/list?locationExternalIDs=5002&purpose=for-rent&page=1&hitsPerPage=8`);

	return {
		props: {
			propertiesForSale: propertyForSale?.hits || [],
			propertiesForRent: propertyForRent?.hits || [],
		}
	}
}
