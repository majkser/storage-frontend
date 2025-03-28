"use client";

import { SearchBar } from "@/components/dashboard/search-bar";
import { UploadButton } from "@/components/dashboard/upload-button";
import { StorageUsage } from "@/components/dashboard/storage-usage";
import { RecentFiles } from "@/components/dashboard/recent-files";
import { StorageCategories } from "@/components/dashboard/storage-categories";
import { Sidebar } from "@/components/ui/sidebar";
import { SidebarProvider } from "@/components/sidebar/sidebar-context";
import { MobileMenu } from "@/components/sidebar/mobile-menu";
import { authContext } from "@/context/authContext";
import { useContext } from "react";
import UserNotLogedIn from "@/components/userNotLogedIn";
import Loading from "@/components/loading";

export default function DashboardPage() {
  const { user, loading, loadingLogOut } = useContext(authContext);

  if (loading || loadingLogOut) {
    return <Loading />;
  }

  if (!user) {
    return <UserNotLogedIn />;
  }

  return (
    <SidebarProvider>
      <div className="flex h-screen">
        <Sidebar />
        <main className="flex-1 overflow-auto md:ml-64">
          <div className="p-4 md:hidden">
            <MobileMenu />
          </div>
          <div className="p-6 pt-0 md:pt-6">
            {/* Header with search and upload */}
            <div className="flex justify-between items-center mb-8">
              <SearchBar />
              <UploadButton />
            </div>

            {/* Main content */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <StorageUsage />
              <RecentFiles />
            </div>
            <StorageCategories />
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}
