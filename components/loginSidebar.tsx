import mxrLogo from "@/public/mxr.png";
import pokojLogo from "@/public/pokoj.png";
import Image from "next/image";

export default function LoginSidebar() {
  return (
    <div className="bg-brand w-3/4 h-screen lg:rounded-r-full lg:scale-150">
      <div className="lg:flex justify-center items-center lg:mt-36">
        <Image
          priority
          src={mxrLogo}
          alt="MXR Logo"
          width={200}
          height={200}
          className="mx-auto lg:m-0"
        />
        <Image
          priority
          src={pokojLogo}
          alt="pokój 126 logo"
          width={200}
          height={200}
          className="-mt-16 mx-auto lg:m-0"
        />
      </div>
      <h1 className="">Official Storage</h1>
    </div>
  );
}
