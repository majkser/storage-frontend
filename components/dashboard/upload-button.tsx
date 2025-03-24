import { Upload } from 'lucide-react'
import { Button } from "@/components/ui/button"

export function UploadButton() {
  return (
    <Button className="bg-[#3fcda0] hover:bg-[#3fcda0]/90 text-white">
      <Upload className="mr-2 h-4 w-4" />
      Upload
    </Button>
  )
}