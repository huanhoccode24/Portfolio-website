import React from "react";
import Typewriter from "typewriter-effect";
import { useTranslations } from "next-intl";

export default function AnimatedIntro() {
  const t = useTranslations("HomePage");
  return (
    <div
      data-aos="fade-up"
      data-aos-delay="400"
      className="text-lg sm:text-2xl h-30 px-8 text-center font-medium text-gray-400"
    >
      {t("HeroSubtitle")}
      <span className="text-indigo-400 font-bold">
        <Typewriter
          options={{
            strings: [
              ".NET Core Developer",
              "Fronted Developer",
              "Backend Developer",
            ],
            autoStart: true,
            loop: true,
            delay: 75,
            deleteSpeed: 50,
            wrapperClassName: "inline-block py-6",
          }}
        />
      </span>
    </div>
  );
}
