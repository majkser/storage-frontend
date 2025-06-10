import React from "react";
import GenerateLinkButton from "./generateLinkButton";
import { Music, ImageIcon, Film, MoreHorizontal } from "lucide-react";

export default function UploadedFiles() {
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

  return (
    <div className="w-full">
      <h1 className="text-white h2 ml-24">Uploaded Files</h1>
      <div className="w-3/4 flex flex-col mx-auto gap-4">
        <div className="bg-secondary/20 hover:bg-secondary/25 p-4 rounded-lg flex justify-between items-center md:flex-row flex-col">
          <div className="flex items-center justify-start gap-4">
            {(() => {
              const Icon = category.get("Music")?.icon; //make it dynamic when fetching files will be avilable
              return Icon ? (
                <div
                  className={`h-12 w-12 rounded-full flex items-center justify-center ${
                    category.get("Music")?.color
                  } ${category.get("Music")?.iconColor}`}
                >
                  <Icon className="h-6 w-6" />
                </div>
              ) : null;
            })()}
            <div>
              <h2 className="text-white text-2xl">File 1</h2>
              <p className="text-gray-400">Uploaded on: 2023-10-01</p>
            </div>
          </div>
          <GenerateLinkButton />
        </div>
        <div className="bg-secondary/20 hover:bg-secondary/25 p-4 rounded-lg">
          <h2 className="text-white">File 2</h2>
          <p className="text-gray-400">Uploaded on: 2023-10-02</p>
        </div>
      </div>
    </div>
  );
}
