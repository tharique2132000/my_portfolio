"use client";

import { Instagram, Facebook, Twitter, Linkedin } from "lucide-react";

export default function BottomBar() {
  return (
    <div className="flex md:hidden fixed bottom-0 left-0 w-full bg-white dark:bg-gray-900 p-4 shadow-md">
      <div className="flex justify-around w-full">
        <Linkedin className="w-6 h-6 text-gray-600 dark:text-white cursor-pointer" />
        <Facebook className="w-6 h-6 text-gray-600 dark:text-white cursor-pointer" />
        <Twitter className="w-6 h-6 text-gray-600 dark:text-white cursor-pointer" />
        <Instagram className="w-6 h-6 text-gray-600 dark:text-white cursor-pointer" />
      </div>
    </div>
  );
}
