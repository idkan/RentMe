import Link from "next/link";
import Image from "next/image";
import { FaBed, FaBath } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";
import { GoVerified } from "react-icons/go";
import millify from "millify";

import DefaultImage from '../assets/images/default-house.jpg';

const Property = ({ property: { coverPhoto, price, rentFrequency, rooms, title, baths, area, agency, isVerified, externalID, category } }) => (
    <Link href={`/property/${externalID}`} passHref>
        <div className="max-w-sm overflow-hidden rounded border-2 border-gray-200 hover:shadow-lg">
            <Image className="w-full rounded" src={coverPhoto ? coverPhoto.url : DefaultImage} alt="House cover photo" width={500} height={300} />
            <div className="px-4 pt-4 flex items-center justify-between">
                {isVerified && <GoVerified className="text-green-500" />}
                {millify(price)}{rentFrequency && ` USD / ${rentFrequency}`}
                <img className="rounded-full border border-gray-100 object-scale-down w-10 h-10" src={agency?.logo?.url} alt="Agency Logo" />
            </div>
            <div className="px-4 pt-4 flex items-center justify-between">
                {rooms != 0 && <div className="flex items-center"> <FaBed className="text-gray-500 mr-2" /> {rooms} </div>}
                {baths && <div className="flex items-center"> <FaBath className="text-gray-500 mr-2" /> {baths} </div>}
                {area && <div className="flex items-center"> <BsGridFill className="text-gray-500 mr-2" /> {millify(area)} sqft </div>}
            </div>
            <div className="px-4 pt-4">
                <p className="font-bold lowercase first-letter:uppercase text-xl mb-2">{title.length > 25 ? `${title.substring(0, 25)}...` : title}</p>
            </div>
            <div className="px-4 pt-4 pb-2">
                {category.map((cat, index) => (
                    <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#{cat.name}</span>
                ))}
            </div>
        </div>
    </Link>
)

export default Property;