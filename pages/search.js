import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";
import { BsFilter } from "react-icons/bs";

import SearchFilters from "../components/SearchFilters";
import Property from "../components/Property";
import NoDataImage from "../assets/images/no-data.svg";

const Search = () => {
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
                <div className="flex flex-wrap -mx-2">
                    {[].map((property) => <Property property={property} key={property.id} />)}
                </div>
                {[].length === 0 && (
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
