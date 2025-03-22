"use client"

import { cn } from "@/lib/utils"
import { LayoutDashboard, FileText, ImageIcon, Film, MoreHorizontal, LogOut } from 'lucide-react'
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface NavItemProps {
  icon: React.ElementType
  label: string
  href: string
  isActive?: boolean
}

const NavItem = ({ icon: Icon, label, href, isActive }: NavItemProps) => {
  return (
    <Link 
      href={href}
      className={cn(
        "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors",
        isActive 
          ? "bg-[#3fcda0] text-white"
          : "text-white/70 hover:text-white hover:bg-white/10",
      )}
    >
      <Icon className="h-5 w-5" />
      <span className="font-medium">{label}</span>
    </Link>
  )
}

export function Sidebar() {
  const pathname = usePathname()
  
  const navItems = [
    {
      icon: LayoutDashboard,
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      icon: FileText,
      label: "Documents",
      href: "/documents",
    },
    {
      icon: ImageIcon,
      label: "Images",
      href: "/images",
    },
    {
      icon: Film,
      label: "Media",
      href: "/media",
    },
    {
      icon: MoreHorizontal,
      label: "Others",
      href: "/others",
    },
  ]

  return (
    <div className="h-screen w-64 bg-black flex flex-col">
      {/* Logo area */}
      <div className="p-4 flex items-center gap-2">
        <div className="h-10 w-10 rounded-full bg-[#3fcda0] flex items-center justify-center">
          <Image src="/mxr-white.png" alt="MXR Logo" width={24} height={24} />
        </div>
        <h1 className="text-white font-bold text-xl">Storage</h1>
      </div>
      
      {/* Navigation */}
      <nav className="mt-6 px-2 flex-1">
        {navItems.map((item) => (
          <NavItem
            key={item.href}
            icon={item.icon}
            label={item.label}
            href={item.href}
            isActive={pathname === item.href}
          />
        ))}
      </nav>
      
      {/* Footer */}
      <div className="p-4 border-t border-white/10">
        <Button variant="ghost" className="w-full justify-start text-white/70 hover:text-white hover:bg-white/10">
          <LogOut className="mr-2 h-5 w-5" />
          Sign Out
        </Button>
      </div>
    </div>
  )
}