/* eslint-disable @next/next/no-img-element */
"use client";

import Logo from "@/assets/images/logo.png";
import Link from "next/link";
import MobileMenu from "./MobileMenu";
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { useRequestDemo } from "@/contexts/RequestDemoContext";

const navs = [
  {
    title: "Our Mission",
    link: "/our-mission",
  },
  {
    title: "Features",
    link: "/features",
    bg: "purple",
  },
  {
    title: "Evidence",
    link: "/evidence",
  },
  {
    title: "Our Team",
    link: "/our-team",
  },
  {
    title: "Support and Security",
    link: "/support-and-security",
  },
  // {
  //   title: "LOGIN",
  //   link: "#",
  // },
];

export default function TopBar() {
  const path = usePathname();
  const bg = useMemo(() => navs.find((nav) => nav.link === path)?.bg, [path]);
  const { requestDemo } = useRequestDemo();

  return (
    <div className="fixed w-full top-0 z-[999]">
      <div className="py-2 px-8 bg-[#B3E6E3] text-center font-semibold text-primary">
        CentralApp 2023-2024 – supporting applications for Plastic Surgery,
        Anesthesiology, Neurology, and Urology
      </div>
      <div className={`py-6 bg-purple`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
          <Link href="/">
            <img src={Logo.src} width={60} height={60} alt="" />
          </Link>
          <div className="flex items-center">
            <div className="hidden xl:flex items-center gap-8 text-white">
              {navs.map((nav) => (
                <a
                  key={nav.title}
                  className="hover:opacity-80 transition-opacity uppercase"
                  href={nav.link}
                >
                  {nav.title}
                </a>
              ))}
            </div>
            <button
              className="ml-12 px-4 py-3 rounded bg-glen text-white font-medium hover:opacity-90"
              onClick={requestDemo}
            >
              Request a Demo
            </button>
            <div className="block xl:hidden ml-8 mt-2">
              <MobileMenu links={navs} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
