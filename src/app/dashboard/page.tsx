"use client";

import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import { Home, Settings, User } from "lucide-react";

const navigationLinks = [
  {
    label: "Overview",
    href: "/dashboard",
    icon: <Home className="w-4 h-4 text-neutral-500" />,
  },
  {
    label: "Profile",
    href: "/dashboard/profile",
    icon: <User className="w-4 h-4 text-neutral-500" />,
  },
  {
    label: "Settings",
    href: "/dashboard/settings",
    icon: <Settings className="w-4 h-4 text-neutral-500" />,
  },
];

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen">
      <Sidebar>
        <SidebarBody>
          <div className="flex flex-col gap-2">
            {navigationLinks.map((link) => (
              <SidebarLink key={link.href} link={link} />
            ))}
          </div>
        </SidebarBody>
      </Sidebar>
      <main className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
        <p className="text-neutral-600 dark:text-neutral-300">
          Welcome to your dashboard! This is a new page with the sidebar component.
        </p>
      </main>
    </div>
  );
} 