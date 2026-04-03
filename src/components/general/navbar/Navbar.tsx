"use client";
import Link from "next/link";
import Logo from "./Logo";

import { LuDownload, LuMenu } from "react-icons/lu";
import MobileNav from "./Mobile/MobileNav";
import { useState } from "react";
import LinkButton from "../LinkButton";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "../LanguageSwitcher";

export const navLinks = [
  { url: "#home", label: "Home" },
  { url: "#resume", label: "Resume" },
  { url: "#projects", label: "Projects" },
  { url: "#services", label: "Services" },
  { url: "#skills", label: "Skills" },
  { url: "#testimonials", label: "Testimonials" },
  { url: "#contact", label: "Contact" },
  { url: "#uploads", label: "Upload" },
];

export default function Navbar() {
  const t = useTranslations("Navigation");
  const [navOpen, setNavOpen] = useState(false);

  return (
    <nav className="h-18 fixed z-50 w-full bg-slate-900/90 backdrop-blur-lg shadow-md transition-all duration-300">
      <div className=" flex items-center h-full justify-between w-[90%] mx-auto">
        {/* logo */}
        <Logo />

        {/* nav link */}
        <ul className="hidden lg:flex space-x-10">
          {navLinks.map((link) => {
            return (
              <li key={link.url}>
                <Link
                  href={link.url}
                  className="text-gray-200 hover:text-cyan-500 font-medium transition-colors duration-300"
                >
                  {t(link.label)}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="hidden lg:flex items-center gap-3">
          <LanguageSwitcher />
          <LinkButton
            href="/documents/_CVResume.pdf"
            text={t("DownloadCv")}
            download={true}
            icon={LuDownload}
            iconPosition="left"
          />
        </div>

        <button
          onClick={() => setNavOpen(!navOpen)}
          className="w-8 h-8 cursor-pointer z-100 lg:hidden text-white"
        >
          <LuMenu size={30} />
        </button>
        <MobileNav navOpen={navOpen} setNavOpen={setNavOpen} />
      </div>
    </nav>
  );
}
