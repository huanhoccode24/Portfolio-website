import Link from "next/link";
import { navLinks } from "../Navbar";
import LinkButton from "../../LinkButton";
import { LuDownload } from "react-icons/lu";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "../../LanguageSwitcher";

interface MobileNavProps {
  navOpen: boolean;
  setNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function MobileNav({ navOpen, setNavOpen }: MobileNavProps) {
  const t = useTranslations("Navigation");
  const showMobile = navOpen ? "translate-x-0" : "translate-x-[100%]";
  return (
    <>
      {/* insetbackground */}
      <div
        className={`fixed inset-0 transform right-0 z-50 bg-black opacity-30 w-full h-screen transition-all duration-500 ${showMobile} lg:hidden`}
      ></div>
      {/* navlinks */}
      <ul
        className={`fixed flex items-center justify-center text-white flex-col h-full transform transition-all duration-500
            delay-300 w-[80%] sm:w-[60%] bg-slate-800 space-y-1 z-80 right-0 top-0 ${showMobile} lg:hidden`}
      >
        <li className="w-full px-4 py-3 border-b border-slate-700/40">
          <div className="flex items-center justify-center">
            <LanguageSwitcher />
          </div>
        </li>
        {navLinks.map((link) => {
          return (
            <li key={link.url}>
              <Link
                onClick={() => setNavOpen(false)}
                href={link.url}
                className="flex justify-center items-center text-xl font-medium text-white py-4 px-6 rounded-lg hover:bg-slate-700/50
                hover:text-cyan-300 transition-all duration-300 border-b border-slate-700/30 w-full text-center"
              >
                {t(link.label)}
              </Link>
            </li>
          );
        })}
        <div className="my-4">
          <LinkButton
            href="/documents/_CVResume.pdf"
            text={t("DownloadCv")}
            download={true}
            icon={LuDownload}
            iconPosition="left"
          />
        </div>
      </ul>
    </>
  );
}
