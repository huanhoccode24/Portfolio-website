import React from "react";
import Titles from "../general/Titles";
import { DiDotnet, DiJavascript, DiMsqlServer } from "react-icons/di";
import { RiNextjsFill, RiNodejsLine, RiReactjsFill } from "react-icons/ri";

const skills = [
  {
    name: ".NetCore",
    icon: <DiDotnet />,
    skillLevel: 80,
  },
  {
    name: "SQL Server",
    icon: <DiMsqlServer />,
    skillLevel: 80,
  },
  {
    name: "NodeJS",
    icon: <RiNodejsLine />,
    skillLevel: 60,
  },
  {
    name: "JavaScript",
    icon: <DiJavascript />,
    skillLevel: 60,
  },
  {
    name: "ReactJS | Learning",
    icon: <RiReactjsFill />,
    skillLevel: 50,
  },
  {
    name: "NextJS | Learning",
    icon: <RiNextjsFill />,
    skillLevel: 50,
  },
];

export default function SkillSection() {
  return (
    <section id="skills" className="py-16">
      <Titles title="Kỹ Năng" as="h1" />
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
              <p className="text-indigo-500 font-semibold">{skill.name}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
