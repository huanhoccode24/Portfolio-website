import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";
import { projectsData } from "@/data/projects";

// Thêm async vào function
export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ id: string }>; // Khai báo params là một Promise
}) {
  // Giải nén params bằng await
  const { id } = await params;

  // Tìm dự án với id đã lấy được
  const project = projectsData.find((p) => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
        <p className="text-2xl">Dự án không tồn tại!</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen  bg-slate-950 text-white p-10 md:p-20">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/#projects"
          className="text-[#ADB7BE] hover:text-white mb-8 block transition-colors"
        >
          ← Quay lại trang chủ
        </Link>

        <div className="relative rounded-xl overflow-hidden mb-10 border border-gray-800">
          <Image
            src={project.imagePath}
            alt={project.title}
            width={1200}
            height={800}
            className="w-full object-cover"
          />
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-6">{project.title}</h1>
        <p className="text-[#ADB7BE] text-lg leading-relaxed mb-10">
          {project.description}
        </p>

        {project.gitUrl && project.gitUrl !== "#" && (
          <Link
            href={project.gitUrl}
            target="_blank"
            className="flex items-center gap-3 w-fit bg-[#181818] border-2 border-[#ADB7BE] px-8 py-3 rounded-full hover:border-white hover:bg-white hover:text-black transition-all duration-300 font-bold"
          >
            <AiFillGithub size={28} />
            <span>Xem Source Code trên GitHub</span>
          </Link>
        )}
      </div>
    </div>
  );
}
