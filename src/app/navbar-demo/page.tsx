"use client"

import { NavBar } from "@/components/ui/tubelight-navbar"
import { Home, Settings, User, Bell } from "lucide-react"

const navigationItems = [
  {
    name: "Home",
    icon: Home,
  },
  {
    name: "Profile",
    icon: User,
  },
  {
    name: "Notifications",
    icon: Bell,
  },
  {
    name: "Settings",
    icon: Settings,
  },
]

export default function NavbarDemo() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">TubeLight Navbar Demo</h1>
        <p className="text-lg text-gray-300 mb-8">
          This is a demonstration of the TubeLight navbar component. The navbar is fixed to the bottom on mobile and top on desktop.
        </p>
        <div className="h-[2000px] flex flex-col gap-8">
          <div className="p-6 bg-gray-800/50 rounded-lg border border-gray-700">
            <h2 className="text-2xl font-semibold mb-4">Scroll to see the navbar in action</h2>
            <p className="text-gray-300">
              The navbar stays fixed as you scroll, with a beautiful tube light effect on the active item.
            </p>
          </div>
        </div>
      </div>
      <NavBar items={navigationItems} />
    </main>
  )
} 