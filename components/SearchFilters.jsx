import { useState } from "react";
import { useRouter } from "next/router";

import { filterData, getFilterValues } from "../utils/filterData";

const SearchFilters = () => {
    const [filters] = useState(filterData);

    const router = useRouter();

    const searchProperties = (filterValues) => {
        const path = router.pathname;
        const { query } = router;

        const values = getFilterValues(filterValues);

        values.forEach((item) => {
            if (item.value && filterValues?.[item.name]) {
                query[item.name] = item.value;
            }
        });

        router.push({ pathname: path, query: query });
    }

    const clearFilters = () => {

        const path = router.pathname;
        const { query } = router;

        Object.keys(query).forEach((key) => {
            delete query[key];
        });

        router.push({ pathname: path, query: query });

        document.querySelectorAll("select").forEach((select) => {
            select.value = "";
        })

    }

    return (
        <div className="search-filters">
            <div className="flex items-center justify-between mt-4">
                <p className="font-medium">Filters</p>
                <button
                    className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium rounded-md"
                    onClick={clearFilters}
                >
                    Reset Filter
                </button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
                {filters.map((filter) => (
                    <select
                        key={filter.queryName}
                        placeholder={filter.placeholder}
                        className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
                        onChange={(e) => searchProperties({ [filter.queryName]: e.target.value })}
                    >
                        <option value="" hidden>{filter.placeholder}</option>
                        {filter?.items?.map((item) => (
                            <option key={item.value} value={item.value}>{item.name}</option>
                        ))}
                    </select>
                ))}
            </div>
            {/* 
                // TODO: Add Search by location feature
            */}
        </div>
    );
};

export default SearchFilters;
