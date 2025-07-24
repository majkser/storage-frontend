import { SearchBar } from "@/components/dashboard/search-bar";
import { UploadButton } from "@/components/dashboard/upload-button";
import { MobileMenu } from "@/components/sidebar/mobile-menu";
import UploadedFiles from "@/components/dashboard/uploadedFiles";

export default function DashboardPage() {
  return (
    <>
      <div className="p-4 md:hidden">
        <MobileMenu />
      </div>
      <div className="p-6 pt-0 md:pt-6 max-w-[1200px] mx-auto">
        {/* Header with search and upload */}
        <div className="flex justify-between items-center mb-8 max-w-[1400px] min-w-[300px]">
          <SearchBar />
          <UploadButton />
        </div>
      </div>
      <UploadedFiles />
    </>
  );
}
