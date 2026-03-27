import React from "react";
import Titles from "../general/Titles";
import ProjectCard from "./ProjectCard";
import { projectsData } from "@/data/projects";

export default function ProjectSection() {
  return (
    <section id="projects">
      <Titles title="Dự Án Của Tôi" as="h1" />
      <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 overflow-hidden">
        {projectsData.map((project, index) => (
          <div
            key={project.id}
            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
          >
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </section>
  );
}
