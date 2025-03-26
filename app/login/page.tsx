"use client";

import LoginSidebar from "@/components/login/loginSidebar";
import Login from "@/components/login/login";
import MobileLoginSidebar from "@/components/login/mobileLoginSidebar";
import { useEffect } from "react";
import { getUser } from "@/getUser";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        await getUser();
        if (router) router.push("/");
      } catch (error) {
        //stay on login page
        console.log(error);
      }
    };

    checkAuth();
  }, [router]);

  return (
    <div className="bg-black w-full h-screen text-white text-center sm:grid sm:grid-cols-8 overflow-hidden">
      <div className="col-span-3 hidden sm:flex items-center justify-center">
        <LoginSidebar />
      </div>
      <MobileLoginSidebar />
      <div className="col-span-5 flex items-center justify-center">
        <Login />
      </div>
    </div>
  );
}
