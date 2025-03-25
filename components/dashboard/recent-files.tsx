import { FileText, ImageIcon, Film } from 'lucide-react'

export function RecentFiles() {
  return (
    <div className="bg-secondary/30 rounded-xl p-6">
      <h2 className="h5 text-white mb-4">Recent files uploaded</h2>
      <div className="space-y-4">
        {["Document.pdf", "Image.png", "Video.mp4"].map((file, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="h-8 w-8 rounded bg-brand flex items-center justify-center text-white">
                {file.endsWith(".pdf") && <FileText className="h-4 w-4" />}
                {file.endsWith(".png") && <ImageIcon className="h-4 w-4" />}
                {file.endsWith(".mp4") && <Film className="h-4 w-4" />}
              </div>
              <span className="ml-3 text-white">
                {file}
              </span>
            </div>
            <span className="caption text-muted-foreground">Today</span>
          </div>
        ))}
      </div>
    </div>
  )
}