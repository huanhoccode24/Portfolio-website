import React from "react";
import Titles from "../general/Titles";
import ResumeCard from "./ResumeCard";
import { LuGraduationCap, LuPackage, LuServer } from "react-icons/lu";
import { RiNextjsFill } from "react-icons/ri";
import { useTranslations } from "next-intl";

export default function ResumeSection() {
  const t = useTranslations("Resume");
  return (
    <section id="resume" className="my-12">
      <div className="w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10">
        {/* educations */}
        <div data-aos="zoom-out">
          <Titles title={t("EducationTitle")} as="h2" />
          <div className="space-y-6">
            <ResumeCard
              icon={LuGraduationCap}
              role={t("EducationItems.UEF.Role")}
              description={t("EducationItems.UEF.Desc")}
              date={t("EducationItems.UEF.Date")}
            />
          </div>
        </div>
        {/* experience */}
        <div data-aos="zoom-in" data-aos-delay="200">
          <Titles title={t("ExperienceTitle")} as="h2" />
          <div className="space-y-6">
            <ResumeCard
              icon={RiNextjsFill}
              role={t("ExperienceItems.Frontend.Role")}
              description={t("ExperienceItems.Frontend.Description")}
            />

            <ResumeCard
              icon={LuServer}
              role={t("ExperienceItems.Backend.Role")}
              description={t("ExperienceItems.Backend.Description")}
            />

            <ResumeCard
              icon={LuPackage}
              role={t("ExperienceItems.Database.Role")}
              description={t("ExperienceItems.Database.Description")}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
