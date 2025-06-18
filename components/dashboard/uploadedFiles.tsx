"use client";

import React from "react";
import GenerateLinkButton from "@/components/generateLinkButton";
import { Music, ImageIcon, Film, MoreHorizontal } from "lucide-react";
import SortAndFilter from "@/components/dashboard/sortAndFilter";
import DownloadButton from "@/components/downloads/downloadButton";
import { useState } from "react";

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

  function chooseSortFunction(a, b) {
    switch (sort) {
      case "alphabetically":
        return sortingOrderDesc
          ? sortAlphabetically(a, b)
          : sortAlphabetically(b, a);
      default:
        return sortingOrderDesc
          ? sortByUploadDate(a, b)
          : sortByUploadDate(b, a);
    }
  }

  function sortAlphabetically(a, b) {
    return a.name.localeCompare(b.name);
  }

  function sortByUploadDate(a, b) {
    return new Date(b.uploadedOn).getTime() - new Date(a.uploadedOn).getTime();
  }

  const category = new Map([
    [
      "Music",
      {
        icon: Music,
        color: "bg-red-500/20",
        iconColor: "text-red-500",
      },
    ],
    [
      "Images",
      {
        icon: ImageIcon,
        color: "bg-blue-500/20",
        iconColor: "text-blue-500",
      },
    ],
    [
      "Media",
      {
        icon: Film,
        color: "bg-brand",
        iconColor: "text-white",
      },
    ],
    [
      "Others",
      {
        icon: MoreHorizontal,
        color: "bg-purple-500/20",
        iconColor: "text-purple-500",
      },
    ],
  ]);

  const files = [
    {
      id: 1,
      name: "File 1",
      uploadedOn: "2023-10-01",
      size: "1.77 GB",
      category: "Music",
    },
    {
      id: 2,
      name: "File 2",
      uploadedOn: "2023-10-02",
      size: "500 MB",
      category: "Images",
    },
    // change later to fetch files from the server
  ];

  const filteredFiles = files.filter(
    (file) => !filter || file.category === filter
  );

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
      <div className="w-4/5 md:w-3/4 flex flex-col mx-auto gap-4">
        {filteredFiles.length > 0 &&
          filteredFiles
            .sort((a, b) => chooseSortFunction(a, b))
            .map((file) => (
              <div
                key={file.id}
                className="bg-secondary/20 hover:bg-secondary/25 p-4 rounded-lg flex justify-between items-center md:flex-row flex-col"
              >
                <div className="flex items-center justify-start gap-4">
                  {(() => {
                    const Icon = category.get(file.category)?.icon;
                    return Icon ? (
                      <div
                        className={`h-12 w-12 rounded-full flex items-center justify-center ${
                          category.get(file.category)?.color
                        } ${category.get(file.category)?.iconColor}`}
                      >
                        <Icon className="h-6 w-6" />
                      </div>
                    ) : null;
                  })()}
                  <div>
                    <h2 className="text-white text-2xl">{file.name}</h2>
                    <p className="text-gray-400">
                      Uploaded on: {file.uploadedOn}
                    </p>
                    <p className="text-sm text-gray-400">{file.size}</p>
                  </div>
                </div>
                <div className="flex items-center flex-row md:flex-col gap-2 mt-2">
                  <GenerateLinkButton />
                  <DownloadButton fileId={10} label="Download" />
                </div>
              </div>
            ))}
        {filteredFiles.length === 0 && (
          <h4 className="h2 text-white text-center mt-8">
            No {filter.toLowerCase()} found
          </h4>
        )}
      </div>
    </div>
  );
}
