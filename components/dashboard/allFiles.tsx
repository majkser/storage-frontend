"use client";

import { use } from "react";
import GenerateLinkButton from "@/components/generateLinkButton";
import { Music, ImageIcon, Film, MoreHorizontal } from "lucide-react";
import DownloadButton from "@/components/downloads/downloadButton";
import { File } from "@/app/types/fileInterface";
import { fileContext } from "@/context/fileContext";

export default function AllFiles({
  sort,
  filter,
  sortingOrderDesc,
}: {
  sort: string;
  filter: string;
  sortingOrderDesc: boolean;
}) {
  const { files, loading, error } = use(fileContext);

  const filteredFiles = files.filter(
    (file) => !filter || categoryBasedOnMimeType(file.mimetype) === filter
  );

  function chooseSortFunction(a: File, b: File) {
    switch (sort) {
      case "alphabetically":
        return sortingOrderDesc
          ? sortAlphabetically(a, b)
          : sortAlphabetically(b, a);
      case "size":
        return sortingOrderDesc ? sortBySize(a, b) : sortBySize(b, a);
      default:
        return sortingOrderDesc
          ? sortByUploadDate(a, b)
          : sortByUploadDate(b, a);
    }
  }

  function sortAlphabetically(a: File, b: File) {
    return a.originalName.localeCompare(b.originalName);
  }

  function sortByUploadDate(a: File, b: File) {
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
  }

  function sortBySize(a: File, b: File) {
    return b.size - a.size;
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

  function categoryBasedOnMimeType(mimeType: string): string {
    if (mimeType.startsWith("audio/")) {
      return "Music";
    } else if (mimeType.startsWith("image/")) {
      return "Images";
    } else if (mimeType.startsWith("video/")) {
      return "Media";
    } else {
      return "Others";
    }
  }

  return (
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
                  const categoryName = categoryBasedOnMimeType(file.mimetype);
                  const Icon = category.get(categoryName)?.icon;
                  return Icon ? (
                    <div
                      className={`h-12 w-12 rounded-full flex items-center justify-center ${
                        category.get(categoryName)?.color
                      } ${category.get(categoryName)?.iconColor}`}
                    >
                      <Icon className="h-6 w-6" />
                    </div>
                  ) : null;
                })()}
                <div>
                  <h2 className="text-white text-2xl">{file.originalName}</h2>
                  <p className="text-gray-400">
                    Uploaded on:{" "}
                    {new Date(file.createdAt).toLocaleDateString("pl-PL")}
                  </p>
                  {file.size < Math.pow(10, 6) && (
                    <p className="text-sm text-gray-400">
                      {(file.size / Math.pow(10, 3)).toPrecision(4)} kB
                    </p>
                  )}
                  {file.size >= Math.pow(10, 6) &&
                    file.size < Math.pow(10, 8) && (
                      <p className="text-sm text-gray-400">
                        {(file.size / Math.pow(10, 6)).toPrecision(4)} MB
                      </p>
                    )}
                  {file.size >= Math.pow(10, 8) && (
                    <p className="text-sm text-gray-400">
                      {(file.size / Math.pow(10, 9)).toPrecision(4)} GB
                    </p>
                  )}
                </div>
              </div>
              <div className="flex items-center flex-row md:flex-col gap-2 mt-2">
                <GenerateLinkButton fileId={file.id} />
                <DownloadButton
                  fileId={file.id}
                  fileName={file.originalName}
                  label="Download"
                />
              </div>
            </div>
          ))}
      {filteredFiles.length === 0 && (
        <h4 className="h2 text-white text-center mt-8">
          Not {filter.toLowerCase()} found
        </h4>
      )}
    </div>
  );
}
