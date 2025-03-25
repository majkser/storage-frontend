import { FileText, ImageIcon, Film, MoreHorizontal } from 'lucide-react'

export function StorageCategories() {
  const categories = [
    { name: "Documents", icon: FileText, size: "164.9 MB", color: "bg-red-500/20", iconColor: "text-red-500" },
    { name: "Images", icon: ImageIcon, size: "16.3 MB", color: "bg-blue-500/20", iconColor: "text-blue-500" },
    { name: "Media", icon: Film, size: "353.2 MB", color: "bg-brand", iconColor: "text-white" },
    { name: "Others", icon: MoreHorizontal, size: "16.0 MB", color: "bg-purple-500/20", iconColor: "text-purple-500" },
  ]

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
      {categories.map((category) => (
        <div key={category.name} className="bg-secondary/30 rounded-xl p-6">
          <div
            className={`h-12 w-12 rounded-full ${category.color} flex items-center justify-center ${category.iconColor} mb-4`}
          >
            <category.icon className="h-6 w-6" />
          </div>
          <h3 className="h6 text-white">{category.size}</h3>
          <p className="body-small text-muted-foreground">{category.name}</p>
        </div>
      ))}
    </div>
  )
}