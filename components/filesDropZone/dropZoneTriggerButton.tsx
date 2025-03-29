"use client";

import { Upload } from "lucide-react";
import FileDropZone from "@/components/filesDropZone/fileDropZone";
import { useState } from "react";
import { HoverBorderGradient } from "../ui/hover-border-gradient";

export default function DropZoneTriggerButton() {
  const [isDropZoneOpen, setIsDropZoneOpen] = useState(false);

  return (
    <div>
      <div
        className=" flex justify-center text-center"
        onClick={() => setIsDropZoneOpen((prev) => !prev)}
      >
        <HoverBorderGradient
          containerClassName="rounded-full"
          as="button"
          className=" bg-black  text-white flex items-center space-x-2"
        >
          <Upload className="mr-2 h-4 w-4" />
          <span>Upload</span>
        </HoverBorderGradient>
      </div>
      <FileDropZone
        isDropZoneOpen={isDropZoneOpen}
        setIsDropZoneOpen={setIsDropZoneOpen}
      />
    </div>
  );
}
