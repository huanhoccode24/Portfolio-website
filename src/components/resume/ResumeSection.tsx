import React from "react";
import Titles from "../general/Titles";
import ResumeCard from "./ResumeCard";
import { LuGraduationCap, LuPackage, LuServer } from "react-icons/lu";
import { RiNextjsFill } from "react-icons/ri";

export default function ResumeSection() {
  return (
    <section id="resume" className="my-12">
      <div className="w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10">
        {/* educations */}
        <div data-aos="zoom-out">
          <Titles title="Học Vấn" as="h2" />
          <div className="space-y-6">
            <ResumeCard
              icon={LuGraduationCap}
              role="UEF - Đại học Kinh tế - Tài chính TP.HCM"
              description="Sinh viên năm cuối chuyên ngành công nghệ phần mềm."
              date="April 2022 - August 2026"
            />
          </div>
        </div>
        {/* experience */}
        <div data-aos="zoom-in" data-aos-delay="200">
          <Titles title="Kinh Nghiệm" as="h2" />
          <div className="space-y-6">
            <ResumeCard
              icon={RiNextjsFill}
              role="Frontend Developer | Learning"
              description="Đang tập trung nghiên cứu và ứng dụng Next.js để xây dựng các ứng dụng Web mượt mà. Sử dụng Tailwind CSS và TypeScript để tạo giao diện responsive, tối ưu hóa SEO và hiệu suất trang web."
            />

            <ResumeCard
              icon={LuServer}
              role="Backend Developer"
              description="Xây dựng các hệ thống API mạnh mẽ bằng ASP.NET Core. Áp dụng các kiến trúc như Clean Architecture, Entity Framework để quản lý logic nghiệp vụ và đảm bảo hệ thống vận hành ổn định."
            />

            <ResumeCard
              icon={LuPackage}
              role="Database Management"
              description="Thiết kế và quản trị cơ sở dữ liệu SQL Server. Thiết kế quan hệ bảng và đảm bảo tính toàn vẹn của dữ liệu."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
