import Image from "next/image";

import { FaBed, FaBath } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';
import millify from 'millify';

import { baseURL, fetchApi } from '../../utils/fetchApi';


const PropertyDetails = ({ propertyDetails: { price, rentFrequency, rooms, title, baths, area, agency, isVerified, description, type, purpose, furnishingStatus, amenities, photos } }) => (

    <div className="property-details">
        <div className="property-details-header">
            {photos && (
                <div className='relative w-full flex gap-6 snap-x snap-proximity overflow-x-auto pb-14'>
                    {photos.map((photo) => (
                        <div key={photo.id} className="snap-center shrink-0">
                            <Image src={photo.url} alt={photo.title} className='shrink-0 w-80 h-40 rounded-lg shadow-xl bg-white' width={800} height={400} />
                        </div>
                    ))}
                </div>
            )}
        </div>
        <div className="property-details-body">
            <div className="max-w-full overflow-hidden ">
                <div className="px-4 pt-4 pb-2 flex gap-1 items-center justify-between">
                    <p className="text-lg text-left">Type <span className="font-bold text-gray-900 capitalize">{type}</span></p>
                    <p className="text-lg text-center">Purpose <span className="font-bold text-gray-900 capitalize">{purpose}</span></p>
                    <p className="text-lg text-right">Furnishing Status <span className="font-bold text-gray-900 capitalize">{furnishingStatus}</span></p>

                </div>
                <div className="px-4 pt-4 flex items-center justify-start">
                    {isVerified && <GoVerified className="text-green-500 mr-4" />}
                    <h1 className="text-xl font-semibold text-gray-900 mr-4">{millify(price)}{rentFrequency && ` USD / ${rentFrequency}`}</h1>
                    <img className="rounded-full border border-gray-100 object-scale-down w-10 h-10" src={agency?.logo?.url} alt="Agency Logo" />
                </div>
                <div className="px-4 pt-4 flex items-center justify-start">
                    {rooms != 0 && <div className="flex items-center mr-4"> <FaBed className="text-gray-500 mr-2" /> {rooms} </div>}
                    {baths && <div className="flex items-center mr-4"> <FaBath className="text-gray-500 mr-2" /> {baths} </div>}
                    {area && <div className="flex items-center mr-4"> <BsGridFill className="text-gray-500 mr-2" /> {millify(area)} sqft </div>}
                </div>
                <div className="px-4 pt-4">
                    <p className="font-bold lowercase first-letter:uppercase overflow-hidden whitespace-nowrap text-ellipsis text-2xl mb-2">{title}</p>
                </div>
                <div className="px-4 pt-4">
                    <p className="text-base text-gray-500">{description}</p>
                </div>
                {amenities.length && (
                    <div className="px-4 pt-4 pb-2">
                        <p className="text-lg font-bold mb-2">Facilities: </p>
                        {amenities.map((amenity, index) => (
                            <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{amenity.text}</span>
                        ))}
                    </div>
                )}
            </div>
        </div>
    </div>
);

export default PropertyDetails;

export async function getServerSideProps({ params: { id } }) {
    const data = await fetchApi(`${baseURL}/properties/detail?externalID=${id}`);

    return {
        props: {
            propertyDetails: data,
        },
    };
}