// components/ui/sidebar.tsx
import { SidebarLogo } from "@/components/sidebar/sidebar-logo"
import { SidebarNav } from "@/components/sidebar/sidebar-nav"
import { SidebarFooter } from "@/components/sidebar/sidebar-footer"

export function Sidebar() {
  return (
    <div className="h-screen w-64 bg-black flex flex-col">
      <SidebarLogo />
      <SidebarNav />
      <SidebarFooter />
    </div>
  )
}