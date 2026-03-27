"use client";
import Link from "next/link";
import Logo from "./Logo";

import { LuDownload, LuMenu } from "react-icons/lu";
import MobileNav from "./Mobile/MobileNav";
import { useEffect, useState } from "react";
import LinkButton from "../LinkButton";

export const navLinks = [
  { url: "/#home", label: "Home" },
  { url: "/#resume", label: "Resume" },
  { url: "/#projects", label: "Projects" },
  { url: "/#services", label: "Services" },
  { url: "/#skills", label: "Skills" },
  { url: "/#testimonials", label: "Testimonials" },
  { url: "/#contact", label: "Contact" },
  { url: "/#uploads", label: "Upload" },
];

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  const [navBackground, setNavBackground] = useState(false);

  useEffect(() => {
    const navHandler = () => {
      if (window.scrollY >= 90) setNavBackground(true);
      if (window.scrollY < 90) setNavBackground(false);
    };

    window.addEventListener("scroll", navHandler);

    return () => {
      window.removeEventListener("scroll", navHandler);
    };
  }, []);

  return (
    <nav
      className={`h-18 fixed z-50 w-full transition-all duration-300 ${navBackground ? "bg-slate-900 shadow-md" : ""}`}
    >
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
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* button */}
        <div className="hidden lg:block">
          <LinkButton
            href="/documents/_CVResume.pdf"
            text="Download CV"
            download={true}
            icon={LuDownload}
            iconPosition="left"
          />
        </div>
        <button
          onClick={() => setNavOpen(!navOpen)}
          className="w-8 h-8 cursor-pointer z-100 lg:hidden text-white"
        >
          {navOpen ? <LuMenu size={30} /> : <LuMenu size={30} />}
        </button>
        <MobileNav navOpen={navOpen} setNavOpen={setNavOpen} />
      </div>
    </nav>
  );
}
