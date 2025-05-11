import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { AiOutlineFileUnknown } from "react-icons/ai";
import { FaPhotoVideo } from "react-icons/fa";
import { LuFileMusic } from "react-icons/lu";
import DownloadButton from "@/components/downloads/downloadButton";
import { Button } from "@/components/ui/button";
import { notFound } from "next/navigation";

export default async function page({
  params,
}: {
  params: Promise<{ token: string }>;
}) {
  const { token } = await params;

  if (token.length !== 36) {
    notFound();
  }

  return (
    <BackgroundBeamsWithCollision className="h-screen w-screen">
      <div className="z-20 flex h-screen w-screen flex-col items-center justify-center gap-4">
        <h1 className="h1 text-white text-center">{token}</h1>
        <ScrollArea className="h-3/4 w-3/5 bg-black/75">
          <div className="flex flex-col items-center justify-center gap-4 p-4 text-white">
            <h1 className="h1">Token</h1>
            <ul className="w-full">
              <li>
                <div className="flex w-full justify-between items-center mb-1">
                  <div className="flex items-center gap-4">
                    <FaPhotoVideo size={25} className="text-brand" />
                    <span className="span text-gray-400">File name</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <p className="text-sm text-gray-400">1.77 GB</p>
                    <Button variant="link" className="text-brand">
                      Download
                    </Button>
                  </div>
                </div>
                <Separator />
              </li>
              <li>
                <p className="text-sm text-gray-400">File name</p>
                <p className="text-sm text-gray-400">File size</p>
                <Separator />
              </li>
            </ul>
            <AiOutlineFileUnknown size={25} className="text-brand" />
            <FaPhotoVideo size={25} className="text-brand" />
            <LuFileMusic size={25} className="text-brand" />
          </div>
        </ScrollArea>
        <DownloadButton />
      </div>
    </BackgroundBeamsWithCollision>
  );
}

//TODO
// change structure - devide into components
// fetch file/files from server
// improve ui - download button, add icons, add animations
// add progress bar
