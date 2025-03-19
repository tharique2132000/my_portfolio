"use client";

import { Instagram, Facebook, Twitter, Linkedin } from "lucide-react";

export default function LeftSidebar() {
  return (
    <div className="hidden md:flex flex-col justify-end h-full p-6">
      {/* Social Media Icons */}
      <div className="flex flex-col items-end space-y-10">
        <Linkedin className="w-6 h-6 text-gray-300 !text-black dark:!text-white cursor-pointer" />
        <Facebook className="w-6 h-6 text-gray-300 !text-black dark:!text-white cursor-pointer" />
        <Twitter className="w-6 h-6 text-gray-300 !text-black dark:!text-white cursor-pointer" />
        <Instagram className="w-6 h-6 text-gray-300 !text-black dark:!text-white cursor-pointer" />
      </div>
    </div>
  );
}
