import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";
import { BsFilter } from "react-icons/bs";

import { baseURL, fetchApi } from "../utils/fetchApi";

import SearchFilters from "../components/SearchFilters";
import Property from "../components/Property";
import NoDataImage from "../assets/images/no-data.svg";

const Search = ({ properties }) => {
    const [searchFilters, setSearchFilters] = useState(false);
    const router = useRouter();

    return (
        <>
            <div className="w-full shadow p-5 rounded-lg bg-white">
                <div className="flex justify-between items-center">
                    <button className="px-8 py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium rounded-md flex justify-center items-center" onClick={() => setSearchFilters((prevFilters) => !prevFilters)}>
                        Filters
                        <BsFilter className="ml-2" />
                    </button>
                    <p className="text-gray-800 text-sm font-medium ml-2">
                        Search property by Filters
                    </p>
                </div>
                {searchFilters && (
                    <SearchFilters />
                )}
            </div>
            <div className="w-full mt-8">
                <p className="text-3xl font-bold mb-2">
                    Properties {router.query.purpose}
                </p>
                <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-8">
                    {properties.map((property) => <Property property={property} key={property.id} />)}
                </div>
                {properties.length === 0 && (
                    <div className="flex flex-col justify-center items-center mt-8">
                        <Image src={NoDataImage} width={200} height={200} alt="No Result" />
                        <p className="text-gray-800 text-xl font-medium mt-4"> No Result Found </p>
                    </div>
                )}
            </div>
        </>

    );
};

export default Search;

export async function getServerSideProps({ query }) {
    const purpose = query.purpose || 'for-rent';
    const rentFrequency = query.rentFrequency || 'monthly';
    const minPrice = query.minPrice || '0';
    const maxPrice = query.maxPrice || '1000000';
    const roomsMin = query.roomsMin || '0';
    const bathsMin = query.bathsMin || '0';
    const sort = query.sort || 'price-desc';
    const areaMax = query.areaMax || '35000';
    const locationExternalIDs = query.locationExternalIDs || '5002';
    const categoryExternalID = query.categoryExternalID || '4';

    const data = await fetchApi(`${baseURL}/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}`);

    return {
        props: {
            properties: data?.hits,
        },
    };
}

