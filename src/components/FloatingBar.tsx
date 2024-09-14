import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandX,
  IconBrandYoutube,
  IconBrandInstagram,
  IconBrandFacebook,
  IconBrandLinkedin,
} from "@tabler/icons-react";
export function FloatingDockDemo() {
  const links = [
    {
      title: "YouTube",
      icon: (
        <IconBrandYoutube className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.youtube.com/@snsinstitutions",
    },
    {
      title: "Instagram",
      icon: (
        <IconBrandInstagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.instagram.com/snsinstitutions/",
    },
    {
      title: "Facebook",
      icon: (
        <IconBrandFacebook className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.facebook.com/snsinstitutions/",
    },
    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/school/snsinstitutions/",
    },
    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://x.com/snsinstitutions/",
    },
  ];

  return (
    <div className="flex items-center justify-center h-auto pt-10 w-full">
      <FloatingDock
        mobileClassName="translate-y-20" // only for demo, remove for production
        desktopClassName="mx-auto"
        items={links}
      />
    </div>
  );
}