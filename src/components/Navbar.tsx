"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
  return (
    <div className={cn("fixed top-6 inset-x-0 max-w-md mx-auto z-50", className)}>
        <Menu setActive={setActive}>
            <Link href={"/"}>
                <MenuItem setActive={setActive} active={active} item="Home">
                    
                </MenuItem>
            </Link>

            <Link href={"/about"}>
                <MenuItem setActive={setActive} active={active} item="About">
                <div className="flex flex-col space-y-4 text-sm shadow-none">
                    <HoveredLink href="/web-dev">Our Leaders</HoveredLink>
                    <HoveredLink href="/interface-design">Industries</HoveredLink>
                    <HoveredLink href="/seo">News Room</HoveredLink>
                    <HoveredLink href="/branding">Blogs</HoveredLink>
                    <HoveredLink href="/branding">SPINE</HoveredLink>
                </div>    
                </MenuItem>
            </Link>

            <Link href={"/programmes"}>
                <MenuItem setActive={setActive} active={active} item="Programmes">
                <div className="flex flex-col space-y-4 text-sm">
                    <HoveredLink href="/web-dev">Arts & Science</HoveredLink>
                    <HoveredLink href="/interface-design">Engineering & Technology</HoveredLink>
                    <HoveredLink href="/seo">Paramedical Institutions</HoveredLink>
                    <HoveredLink href="/branding">CBSE School</HoveredLink>
                    <HoveredLink href="/branding">College of Education</HoveredLink>
                </div>
                </MenuItem>
            </Link>
            <Link href={"/careers"}>
                <MenuItem setActive={setActive} active={active} item="Careers">
                <div className="flex flex-col space-y-4 text-sm">
                    <HoveredLink href="/web-dev">Jobs</HoveredLink>
                    <HoveredLink href="/interface-design">Internships</HoveredLink>
                </div>    
                </MenuItem>
            </Link>
        </Menu>
    </div>
  )
}

export default Navbar