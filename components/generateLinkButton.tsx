import axios from "axios";
import { Popover, PopoverTrigger, PopoverContent } from "./ui/popover";
import { Button } from "./ui/button";
import { useState } from "react";

async function generateLink(fileId: number) {
  try {
    axios.post(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/link/generate-link`,
      { fileId: fileId },
      {
        withCredentials: true,
      }
    );
  } catch (error) {
    console.error("Error generating link:", error);
  }
}

export default function GenerateLinkButton() {
  return (
    <div>
      <Popover>
        <PopoverTrigger onClick={() => generateLink(1)}>
          Generate Link
        </PopoverTrigger>
        <PopoverContent>
          <div>
            <p>Link: </p>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
