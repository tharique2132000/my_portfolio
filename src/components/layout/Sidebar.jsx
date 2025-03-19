"use client"; // Mark this as a Client Component

import { useState } from 'react';
import Link from 'next/link';
import { Home, Settings, User, Folder, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '../ui/button';

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const menuItems = [
    { href: '/', icon: <Home className="h-5 w-5" />, label: 'Home' },
    { href: '/about', icon: <User className="h-5 w-5" />, label: 'About' },
    { href: '/projects', icon: <Folder className="h-5 w-5" />, label: 'Projects' },
    { href: '/settings', icon: <Settings className="h-5 w-5" />, label: 'Settings' },
  ];

  return (
    <aside
      className={`h-screen border-r bg-background ${
        isCollapsed ? 'w-16' : 'w-64'
      } transition-all duration-300 ease-in-out`}
    >
      <div className="flex flex-col h-full">
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-4 border-b">
          {!isCollapsed && <h2 className="text-xl font-semibold">Menus</h2>}
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleSidebar}
            className="p-2"
          >
            {isCollapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
          </Button>
        </div>

        {/* Sidebar Menu */}
        <nav className="flex-1 p-2">
          <ul className="space-y-1">
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  className={`flex items-center p-2 rounded-lg hover:bg-accent ${
                    isCollapsed ? 'justify-center' : ''
                  }`}
                >
                  {item.icon}
                  {!isCollapsed && <span className="ml-2">{item.label}</span>}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
}