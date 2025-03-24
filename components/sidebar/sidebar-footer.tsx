import { LogOut } from 'lucide-react'
import { Button } from "@/components/ui/button"

export function SidebarFooter() {
  return (
    <div className="p-4 border-t border-white/10">
      <Button variant="ghost" className="w-full justify-start text-white/70 hover:text-white hover:bg-white/10">
        <LogOut className="mr-2 h-5 w-5" />
        Sign Out
      </Button>
    </div>
  )
}