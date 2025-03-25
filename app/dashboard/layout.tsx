import { Sidebar } from "@/components/ui/sidebar"
import { SidebarProvider } from "@/components/sidebar/sidebar-context"
import { MobileMenu } from "@/components/sidebar/mobile-menu"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SidebarProvider>
      <div className="flex h-screen">
        <Sidebar />
        <main className="flex-1 overflow-auto md:ml-64">
          <div className="p-4 md:hidden">
            <MobileMenu />
          </div>
          {children}
        </main>
      </div>
    </SidebarProvider>
  )
}