"use client";

import { Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import FileDropZone from "@/components/filesDropZone/fileDropZone";
import { useState } from "react";

export default function DropZoneTriggerButton() {
  const [isDropZoneOpen, setIsDropZoneOpen] = useState(false);

  return (
    <div>
      <Button
        onClick={() => setIsDropZoneOpen((prev) => !prev)}
        className="bg-brand hover:bg-brand/90 text-white"
      >
        <Upload className="mr-2 h-4 w-4" />
        <span>Upload</span>
      </Button>

      <FileDropZone
        isDropZoneOpen={isDropZoneOpen}
        setIsDropZoneOpen={setIsDropZoneOpen}
      />
    </div>
  );
}
