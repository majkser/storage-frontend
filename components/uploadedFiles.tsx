import React from "react";
import GenerateLinkButton from "./generateLinkButton";

export default function UploadedFiles() {
  return (
    <div>
      <h1 className="text-white text-2xl font-bold">Uploaded Files</h1>
      <div className="flex flex-col gap-4">
        <div className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-white">File 1</h2>
          <p className="text-gray-400">Uploaded on: 2023-10-01</p>
          <GenerateLinkButton />
        </div>
        <div className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-white">File 2</h2>
          <p className="text-gray-400">Uploaded on: 2023-10-02</p>
        </div>
      </div>
    </div>
  );
}
