"use client";

import DropZoneTriggerButton from "@/components/filesDropZone/dropZoneTriggerButton";
import UserData from "@/components/userData";
import { SidebarFooter } from "@/components/sidebar/sidebar-footer";
import { authContext } from "@/context/authContext";
import { useContext } from "react";
import UserNotLogedIn from "@/components/userNotLogedIn";
import Image from "next/image";
import Loading from "@/public/loading.gif";

export default function Home() {
  const { user, loading, loadingLogOut } = useContext(authContext);

  if (loading || loadingLogOut) {
    return <Image className="m-auto" src={Loading} alt="loading" />;
  }

  if (!user) {
    return <UserNotLogedIn />;
  }

  return (
    //change h for full later
    <div className="flex align-center justify-center h-screen w-full bg-black">
      <DropZoneTriggerButton />
      <UserData />
      <SidebarFooter />
    </div>
  );
}

//TODO: implement loading spinner
//TODO: change login auth for context
