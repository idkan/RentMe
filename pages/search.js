import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";
import { BsFilter } from "react-icons/bs";

import SearchFilters from "../components/SearchFilters";

const Search = () => {
    const [searchFilters, setSearchFilters] = useState(false);
    const router = useRouter();

    return (
        <div className="w-full shadow p-5 rounded-lg bg-white">
            <div className="flex justify-start items-center">
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
    );
};

export default Search;
