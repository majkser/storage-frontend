import { SearchBar } from "@/components/dashboard/search-bar";
import { UploadButton } from "@/components/dashboard/upload-button";
import { Sidebar } from "@/components/ui/sidebar";
import { SidebarProvider } from "@/components/sidebar/sidebar-context";
import { MobileMenu } from "@/components/sidebar/mobile-menu";
import UploadedFiles from "@/components/uploadedFiles";

export default function DashboardPage() {
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
          </div>
          <UploadedFiles />
        </main>
      </div>
    </SidebarProvider>
  );
}
