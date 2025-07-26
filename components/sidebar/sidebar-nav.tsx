"use client";

import {
  LayoutDashboard,
  FileText,
  ImageIcon,
  Film,
  MoreHorizontal,
  Shield,
  FileKey2,
} from "lucide-react";
import { NavItem } from "./nav-item";

//TODO - file access and admin only for admin users !!!

export function SidebarNav() {
  const navItems = [
    {
      icon: LayoutDashboard,
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      icon: FileKey2,
      label: "File access",
      href: "/dashboard/file-access",
    },
    {
      icon: Shield,
      label: "Grant Admin",
      href: "/dashboard/admin",
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
  ];

  return (
    <nav className="mt-6 px-2 flex-1">
      {navItems.map((item) => (
        <NavItem
          key={item.href}
          icon={item.icon}
          label={item.label}
          href={item.href}
        />
      ))}
    </nav>
  );
}
