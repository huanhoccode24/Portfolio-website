import React from "react";
import Image from "next/image";
import { AiFillGithub } from "react-icons/ai";
import { Project } from "@/data/projects";
import Link from "next/link";

// interface ProjectCardProps {
//   imagePath: string;
//   title: string;
//   description: string;
//   gitUrl?: string;
//   // projectUrl?: string;
// }

export default function ProjectCard({
  id,
  imagePath,
  title,
  description,
  gitUrl = "#",
  // projectUrl,
}: Project) {
  return (
    <div className="group">
      <div className="relative overflow-hidden rounded-lg">
        <Link href={`/project/${id}`}>
          <Image
            src={imagePath}
            alt="project-image"
            width={800}
            height={600}
            className="rounded-lg"
          />
        </Link>
        <div className="absolute inset-0 bg-[#181818]/60 bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100">
          {/* gitHub */}

          <Link
            href={gitUrl}
            target="_blank"
            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white transition-all duration-300 group/link mx-2"
          >
            <AiFillGithub className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
          </Link>

          {/* projectDetails */}
          {/* {projectUrl && (
            <Link
              href={projectUrl}
              target="_blank"
              className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white transition-all duration-300 group/link mx-2"
            >
              <AiOutlineEye className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
            </Link>
          )} */}
        </div>
      </div>
      <div className="mt-4">
        {/* Click vào tiêu đề để sang trang chi tiết */}
        <Link href={`/projects/${id}`}>
          <p className="my-4 text-xl sm:text-2xl font-semibold text-gray-200 hover:text-white transition-colors cursor-pointer">
            {title}
          </p>
        </Link>
        <p className="font-medium text-gray-400">{description}</p>
      </div>
    </div>
  );
}
