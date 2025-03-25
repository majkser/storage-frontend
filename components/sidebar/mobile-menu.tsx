"use client"

import { Menu } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { useSidebarContext } from "@/components/sidebar/sidebar-context"

export function MobileMenu() {
  const { toggleSidebar } = useSidebarContext()

  return (
    <Button 
      variant="ghost" 
      size="icon" 
      className="md:hidden" 
      onClick={toggleSidebar}
    >
      <Menu className="h-6 w-6" />
      <span className="sr-only">Open menu</span>
    </Button>
  )
}