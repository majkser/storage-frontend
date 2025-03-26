import { SearchBar } from "@/components/dashboard/search-bar";
import { UploadButton } from "@/components/dashboard/upload-button";
import { StorageUsage } from "@/components/dashboard/storage-usage";
import { RecentFiles } from "@/components/dashboard/recent-files";
import { StorageCategories } from "@/components/dashboard/storage-categories";

export default function DashboardPage() {
  return (
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
  );
}
