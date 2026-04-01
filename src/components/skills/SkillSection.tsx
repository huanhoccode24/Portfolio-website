import React from "react";
import Titles from "../general/Titles";
import { DiDotnet, DiJavascript, DiMsqlServer } from "react-icons/di";
import { RiNextjsFill, RiNodejsLine, RiReactjsFill } from "react-icons/ri";
import { useTranslations } from "next-intl";

const skills = [
  {
    key: "DotNet",
    icon: <DiDotnet />,
    skillLevel: 80,
  },
  {
    key: "SQLServer",
    icon: <DiMsqlServer />,
    skillLevel: 80,
  },
  {
    key: "NodeJS",
    icon: <RiNodejsLine />,
    skillLevel: 60,
  },
  {
    key: "JavaScript",
    icon: <DiJavascript />,
    skillLevel: 60,
  },
  {
    key: "React",
    icon: <RiReactjsFill />,
    skillLevel: 50,
  },
  {
    key: "Next",
    icon: <RiNextjsFill />,
    skillLevel: 50,
  },
];

export default function SkillSection() {
  const t = useTranslations("Skill");
  return (
    <section id="skills" className="py-16">
      <Titles title={t("SkillTitle")} as="h1" />
      <div className="flex flex-wrap justify-center gap-6">
        {skills.map((skill, index) => {
          return (
            <div
              key={index}
              data-aos="flip-right"
              data-aos-delay={index * 100}
              className="bg-slate-900 text-center w-40 h-48 rounded-3xl flex flex-col items-center justify-center shadow-lg transition hover:scale-110"
            >
              <div className="text-5xl text-gray-300">{skill.icon}</div>
              <p className="text-2xl font-semibold my-4 text-gray-200">
                {skill.skillLevel}%
              </p>
              <p className="text-indigo-500 font-semibold">
                {t(`SkillItems.${skill.key}`)}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
