import { Search, Upload, FileText, ImageIcon, Film, MoreHorizontal } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function DashboardPage() {
  return (
    <div className="p-6">
      {/* Header with search and upload */}
      <div className="flex justify-between items-center mb-8">
        <div className="relative w-1/3">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <input 
            type="text" 
            placeholder="Search..." 
            className="w-full pl-10 pr-4 py-2 rounded-full bg-secondary/50 text-foreground border-none focus:outline-none focus:ring-2 focus:ring-[#3fcda0]"
          />
        </div>
        <Button className="bg-[#3fcda0] hover:bg-[#3fcda0]/90 text-white">
          <Upload className="mr-2 h-4 w-4" />
          Upload
        </Button>
      </div>

      {/* Main content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Storage usage card */}
        <div className="col-span-1 lg:col-span-2 bg-secondary/30 rounded-xl p-6">
          <div className="flex items-center">
            <div className="relative h-32 w-32">
              <div className="absolute inset-0 rounded-full border-8 border-[#3fcda0]/30"></div>
              <div 
                className="absolute inset-0 rounded-full border-8 border-[#3fcda0]"
                style={{ 
                  clipPath: "polygon(0 0, 100% 0, 100% 75%, 0 75%)",
                }}
              ></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-2xl font-bold text-white">76.9%</span>
                <span className="text-xs text-muted-foreground">Space used</span>
              </div>
            </div>
            <div className="ml-8">
              <h2 className="text-xl font-medium text-white">Available Storage</h2>
              <p className="text-lg text-muted-foreground">1.54 GB / 2GB</p>
            </div>
          </div>
        </div>

        {/* Recent files card */}
        <div className="bg-secondary/30 rounded-xl p-6">
          <h2 className="text-xl font-medium text-white mb-4">Recent files uploaded</h2>
          <div className="space-y-4">
            {["Document.pdf", "Image.png", "Video.mp4"].map((file, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="h-8 w-8 rounded bg-[#3fcda0]/20 flex items-center justify-center text-[#3fcda0]">
                    {file.endsWith(".pdf") && <FileText className="h-4 w-4" />}
                    {file.endsWith(".png") && <ImageIcon className="h-4 w-4" />}
                    {file.endsWith(".mp4") && <Film className="h-4 w-4" />}
                  </div>
                  <span className="ml-3 text-sm text-white">{file}</span>
                </div>
                <span className="text-xs text-muted-foreground">Today</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Storage categories */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
        {[
          { name: "Documents", icon: FileText, size: "164.9 MB", color: "bg-red-500/20", iconColor: "text-red-500" },
          { name: "Images", icon: ImageIcon, size: "16.3 MB", color: "bg-blue-500/20", iconColor: "text-blue-500" },
          { name: "Media", icon: Film, size: "353.2 MB", color: "bg-[#3fcda0]/20", iconColor: "text-[#3fcda0]" },
          {
            name: "Others",
            icon: MoreHorizontal,
            size: "16.0 MB",
            color: "bg-purple-500/20",
            iconColor: "text-purple-500",
          },
        ].map((category) => (
          <div key={category.name} className="bg-secondary/30 rounded-xl p-6">
            <div
              className={`h-12 w-12 rounded-full ${category.color} flex items-center justify-center ${category.iconColor} mb-4`}
            >
              <category.icon className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-medium text-white">{category.size}</h3>
            <p className="text-muted-foreground">{category.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}