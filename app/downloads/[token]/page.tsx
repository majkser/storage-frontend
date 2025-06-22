import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { notFound } from "next/navigation";
import DownloadButton from "@/components/downloads/downloadButton";
import axios from "axios";
import { Music, ImageIcon, Film, MoreHorizontal } from "lucide-react";

export default async function page({
  params,
}: {
  params: Promise<{ token: string }>;
}) {
  const { token } = await params;

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

  if (token.length !== 36) {
    notFound();
  }

  let fileId: string;

  //when file on the server will be implemented, change to not get the fileId
  // but treat as middleware on backend and fetch whole file info
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/link/${token}`,
      {
        withCredentials: true,
      }
    );

    if (res.status !== 200) {
      notFound();
    }

    fileId = res.data.fileId;
  } catch (error) {
    console.error("Error fetching file:", error);
    notFound();
  }

  // try {
  //   const res = await fetch(
  //     `${process.env.NEXT_PUBLIC_SERVER_URL}/api/files/${fileId}`,
  //     {
  //       method: "GET",
  //     }
  //   );

  //   if (!res.ok) {
  //     throw new Error("Failed to fetch files");
  //   }

  //   const data = await res.json();
  //   console.log("Fetched files:", data);
  // } catch (error) {
  //   console.error("Error fetching files:", error);
  //   notFound();
  // }

  return (
    <BackgroundBeamsWithCollision className="h-screen w-screen">
      <div className="z-20 flex h-screen w-screen flex-col items-center justify-center gap-4">
        <h1 className="h1 text-white text-center">{token}</h1>
        <h1 className="h1 text-white text-center">{fileId}</h1>
        <ScrollArea className="h-3/4 w-3/5 bg-black/75">
          <div className="flex flex-col items-center justify-center gap-4 p-4 text-white">
            <h1 className="h1">Token</h1>
            <ul className="w-full">
              <li>
                <div className="flex w-full justify-between items-center mb-1">
                  <div className="flex items-center gap-4 mb-2">
                    {(() => {
                      const Icon = category.get("Images")?.icon; //make it dynamic when fetching files will be avilable
                      return Icon ? (
                        <div
                          className={`h-12 w-12 rounded-full flex items-center justify-center ${
                            category.get("Images")?.color
                          } ${category.get("Images")?.iconColor}`}
                        >
                          <Icon className="h-6 w-6" />
                        </div>
                      ) : null;
                    })()}
                    <span className="text-2xl text-gray-400">File name</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <p className="text-sm text-gray-400">1.77 GB</p>
                    <DownloadButton
                      fileId={fileId}
                      fileName="nazwa w page.tsx-zmien"
                    />
                    {/* Replace 10 with the actual fileId when implemented !!!*/}
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
          </div>
        </ScrollArea>
      </div>
    </BackgroundBeamsWithCollision>
  );
}

//TODO
// change structure - devide into components
// fetch file/files from server
// improve ui - download button, add icons, add animations
// add progress bar
