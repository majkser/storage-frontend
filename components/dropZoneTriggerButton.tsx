"use client";

import { Button } from "@/components/ui/button";
import FileDropZone from "@/components/fileDropZone";
import { useState } from "react";

export default function DropZoneTriggerButton() {
  const [isDropZoneOpen, setIsDropZoneOpen] = useState(false);

  return (
    <div>
      <Button className="p" onClick={() => setIsDropZoneOpen((prev) => !prev)}>
        CLICK TO OPEN DROP ZONE COMPONENT
      </Button>

      <FileDropZone
        isDropZoneOpen={isDropZoneOpen}
        setIsDropZoneOpen={setIsDropZoneOpen}
      />
    </div>
  );
}
