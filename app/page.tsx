"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ThreeDMarquee } from "@/components/ui/3d-marquee";
import { useContext } from "react";
import { authContext } from "@/context/authContext";
import Loading from "@/components/loading";
import Karol from "@/public/Karol_Krupiak-koncert.jpg";
import Kartky from "@/public/Kartky-koncert.jpg";
import breaking_bad from "@/public/breaking-bad-9.jpg";
import Kartky2 from "@/public/Koncert-124-2.jpg";

export default function Home() {
  const router = useRouter();
  const { loading } = useContext(authContext);

  if (loading) {
    return <Loading />;
  }

  const images = [
    Karol.src,
    Karol.src,
    Karol.src,
    Karol.src,
    Kartky.src,
    breaking_bad.src,
    Kartky2.src,
    Kartky2.src,
    Kartky2.src,
    Kartky2.src,
    Karol.src,
    Karol.src,
    Karol.src,
    Karol.src,
    Karol.src,
    Karol.src,
    Karol.src,
    Karol.src,
    Karol.src,
    Karol.src,
    Karol.src,
    Karol.src,
    Karol.src,
    Karol.src,
    Karol.src,
    Karol.src,
  ];
  return (
    <div className="relative flex h-screen w-screen flex-col items-center justify-center overflow-hidden rounded-3xl">
      <h2 className="relative z-20 mx-auto max-w-4xl text-center text-2xl font-bold text-balance text-white md:text-4xl lg:text-6xl">
        Welcome to the official
        <span className="relative z-20 inline-block rounded-xl bg-brand-light px-4 py-1 text-white backdrop-blur-sm">
          MXR & pokój 126
        </span>{" "}
        storage
      </h2>
      <p className="relative z-20 mx-auto max-w-2xl py-8 text-center text-sm text-neutral-200 md:text-base">
        Click the button below to login and access your files.
      </p>

      <div
        onClick={() => router.push("/login")}
        className="relative z-20 flex flex-wrap items-center justify-center gap-4 pt-4"
      >
        <Button variant="brand" size="lg">
          <span className="span">Login</span>
        </Button>
      </div>

      {/* overlay */}
      <div className="absolute inset-0 z-10 h-full w-full bg-black/80 dark:bg-black/40" />
      <ThreeDMarquee
        className="pointer-events-none absolute inset-0 h-full w-full"
        images={images}
      />
    </div>
  );
}
