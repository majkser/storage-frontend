import axios from "axios";
import { Popover, PopoverTrigger, PopoverContent } from "./ui/popover";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { Copy } from "lucide-react";

//TODO popover - must be wider !!!!

export default function GenerateLinkButton() {
  const [link, setLink] = useState("");
  const [isCopied, setIsCopied] = useState(false);

  function handleCopyButtonClick() {
    navigator.clipboard.writeText(
      `${process.env.NEXT_PUBLIC_DOWNLOAD_URL}/${link}`
    );
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  }

  async function generateLink(fileId: number) {
    const token = uuidv4();
    setLink(token);

    try {
      axios.post(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/link/generate-link`,
        { fileId: fileId, token: token },
        {
          withCredentials: true,
        }
      );
    } catch (error) {
      console.error("Error generating link:", error);
    }
  }

  return (
    <div>
      <Popover>
        <PopoverTrigger onClick={() => generateLink(1)}>
          Generate Link
        </PopoverTrigger>
        <PopoverContent>
          <p>Link: {`${process.env.NEXT_PUBLIC_DOWNLOAD_URL}/${link}`}</p>
          <div className="flex justify-start">
            <Copy
              size="25"
              className="mt-2 p-1 scale-125 rounded-sm hover:bg-gray-200 cursor-pointer"
              onClick={handleCopyButtonClick}
            />
            {isCopied && (
              <p className="z-20 bg-gray-200 rounded-sm p-1.5 m-auto caption">
                copied to clipboard
              </p>
            )}
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
