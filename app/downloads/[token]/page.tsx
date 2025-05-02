import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { AiOutlineFileUnknown } from "react-icons/ai";
import { FaPhotoVideo } from "react-icons/fa";
import { LuFileMusic } from "react-icons/lu";

export default async function page({
  params,
}: {
  params: Promise<{ token: string }>;
}) {
  const { token } = await params;

  return (
    <BackgroundBeamsWithCollision className="h-screen w-screen">
      <div className="z-20">
        <h1 className="h1 text-white text-center">{token}</h1>
        <ScrollArea className="h-[500px] w-[500px] bg-black/75">
          <div className="flex flex-col items-center justify-center gap-4 p-4 text-white">
            <h1 className="h1">Token</h1>
            <Separator />
            <p className="">
              This is your token. Please copy it and save it somewhere safe.
            </p>
            <Separator />
            <p className="">{token}</p>
            <Separator />
            <AiOutlineFileUnknown size={25} />
            <FaPhotoVideo size={25} />
            <LuFileMusic size={25} />
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
