"use client";

import { LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import axios from "axios";

export function SidebarFooter() {
  const router = useRouter();

  const handleSignOut = async () => {
    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/logout`,
        null,
        {
          withCredentials: true,
        }
      );
      router.push("/login");
    } catch (error) {
      console.log("Sign out error:", error);
    }
  };

  return (
    <div className="p-4 border-t border-white/10">
      <Button
        onClick={handleSignOut}
        variant="ghost"
        className="w-full justify-start text-white/70 hover:text-white hover:bg-white/10"
      >
        <LogOut className="mr-2 h-5 w-5" />
        <span>Sign Out</span>
      </Button>
    </div>
  );
}
