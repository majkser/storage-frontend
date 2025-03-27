"use client";

import DropZoneTriggerButton from "@/components/filesDropZone/dropZoneTriggerButton";
import UserData from "@/components/userData";
import { SidebarFooter } from "@/components/sidebar/sidebar-footer";
import { authContext } from "@/context/authContext";
import { useContext } from "react";
import UserNotLogedIn from "@/components/userNotLogedIn";
import Loading from "@/components/loading";

export default function Home() {
  const { user, loading, loadingLogOut } = useContext(authContext);

  if (loading || loadingLogOut) {
    return <Loading />;
  }

  if (!user) {
    return <UserNotLogedIn />;
  }

  return (
    //change h for full later

    <div className="flex align-center justify-center h-screen w-full bg-black">
      {user.id === "ade76656-0a5c-11f0-bf40-da3579bf5464" && (
        <DropZoneTriggerButton />
      )}
      {/* later change for better protection(role based access and .env) */}
      <UserData />
      <SidebarFooter />
    </div>
  );
}
