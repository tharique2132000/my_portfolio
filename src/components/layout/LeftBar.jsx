"use client";

import { Instagram, Facebook, Twitter, Linkedin } from "lucide-react";

export default function LeftSidebar() {
  const socialIcons = [
    { icon: <Linkedin className="w-6 h-6" />, label: "LinkedIn", url: "https://www.linkedin.com" },
    { icon: <Facebook className="w-6 h-6" />, label: "Facebook", url: "https://www.facebook.com" },
    { icon: <Twitter className="w-6 h-6" />, label: "Twitter", url: "https://www.twitter.com" },
    { icon: <Instagram className="w-6 h-6" />, label: "Instagram", url: "https://www.instagram.com" },
  ];

  return (
    <div className="hidden md:flex flex-col justify-end h-full p-6">
      {/* <div className="flex flex-col items-end space-y-10">
        {socialIcons.map((item, index) => (
          <a
            key={index}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="relative group cursor-pointer"
          >
            <div className="text-gray-300 !text-black dark:!text-white cursor-pointer">
              {item.icon}
            </div>
            <span className="absolute right-8 top-1/2 -translate-y-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10">
              {item.label}
            </span>
          </a>
        ))}
      </div> */}
    </div>
  );
}
