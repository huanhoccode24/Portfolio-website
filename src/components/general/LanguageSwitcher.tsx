"use client";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useLocale } from "next-intl";
import { useEffect, useRef, useState } from "react";
import { LuGlobe } from "react-icons/lu";
import Image from "next/image";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const locale = useLocale();
  const [isOpen, setIsOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      window.addEventListener("mousedown", handleClickOutside);
    }

    return () => window.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  const switchLocale = (newLocale: "en" | "vi") => {
    const segments = pathname.split("/");
    if (segments.length > 1 && ["en", "vi"].includes(segments[1])) {
      segments[1] = newLocale;
    } else {
      segments.splice(1, 0, newLocale);
    }

    const query = searchParams.toString();
    const newPath = `${segments.join("/")}${query ? `?${query}` : ""}`;

    router.push(newPath);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={rootRef}>
      {/* BUTTON */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="
          px-5 py-2
          bg-gradient-to-r from-blue-900 to-purple-800
          hover:from-blue-800 hover:to-purple-700
          text-white font-medium
          rounded-full
          transition-all duration-300
          hover:scale-[1.05] active:scale-[0.95]
          flex items-center gap-2
          shadow-md
        "
      >
        <LuGlobe size={18} />
        <span>{locale?.toUpperCase() ?? "EN"}</span>
      </button>

      {/* DROPDOWN */}
      {isOpen && (
        <div
          className="
            absolute right-0 mt-2 min-w-[160px] w-max
            bg-slate-900 border border-slate-700
            rounded-xl shadow-xl
            overflow-hidden
            z-50
            animate-fadeIn
          "
        >
          <button
            onClick={() => switchLocale("en")}
            className="w-full px-4 py-2 flex items-center gap-2 text-gray-200 hover:bg-gradient-to-r hover:from-blue-900 hover:to-purple-800 transition"
          >
            <Image
              src="/flags/us.png"
              alt="English"
              width={20}
              height={20}
              className="rounded-full object-cover"
            />
            English
          </button>

          <button
            onClick={() => switchLocale("vi")}
            className="w-full px-4 py-2 flex items-center gap-2 text-gray-200 hover:bg-gradient-to-r hover:from-blue-900 hover:to-purple-800 transition"
          >
            <Image
              src="/flags/vn.png"
              alt="Vietnamese"
              width={20}
              height={20}
              className="rounded-full object-cover"
            />
            Tiếng Việt
          </button>
        </div>
      )}
    </div>
  );
}
