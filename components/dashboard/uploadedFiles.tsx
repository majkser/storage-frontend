"use client";

import SortAndFilter from "@/components/dashboard/sortAndFilter";
import { useState } from "react";
import AllFiles from "./allFiles";

export default function UploadedFiles() {
  const [sort, setSort] = useState("");
  const [filter, setFilter] = useState("");
  const [sortingOrderDesc, setSortingOrder] = useState(true);

  const handleSortChange = (value: string) => {
    setSort(value);
  };

  const handleFilterChange = (value: string) => {
    setFilter(value);
  };

  const handleSortingOrderChange = () => {
    setSortingOrder((prev) => !prev);
    console.log("Sorting order changed:", sortingOrderDesc);
  };

  return (
    <div className="w-full">
      <div className="ml-4 md:ml-24 mt-4 mb-8">
        <h1 className="text-white h2">Uploaded Files</h1>
        <SortAndFilter
          handleSortChange={handleSortChange}
          handleSortingOrderChange={handleSortingOrderChange}
          handleFilterChange={handleFilterChange}
        />
      </div>
      <AllFiles
        sort={sort}
        filter={filter}
        sortingOrderDesc={sortingOrderDesc}
      />
    </div>
  );
}
