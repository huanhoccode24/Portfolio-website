"use client";
import React, { useEffect, useState } from "react";
import Titles from "../general/Titles";
import {
  AiOutlineFilePdf,
  AiOutlineFileImage,
  AiOutlineFileText,
  AiOutlineDownload,
  AiOutlineLoading3Quarters,
} from "react-icons/ai";

interface UploadedFile {
  name: string;
  size: string;
  url: string;
  createdAt: string;
}

export default function UploadSection() {
  const [files, setFiles] = useState<UploadedFile[]>([]);
  const [loading, setLoading] = useState(true);

  // Gọi API lấy danh sách file từ server
  const fetchFiles = async () => {
    try {
      const res = await fetch("/api/upload-api");
      const data = await res.json();
      if (data.success) {
        setFiles(data.files);
      }
    } catch (error) {
      console.error("Lỗi khi tải danh sách tài liệu:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFiles();
  }, []);

  // Hàm hiển thị Icon dựa trên đuôi file
  const renderFileIcon = (fileName: string) => {
    const extension = fileName.split(".").pop()?.toLowerCase();
    switch (extension) {
      case "pdf":
        return <AiOutlineFilePdf className="text-red-500" size={32} />;
      case "png":
      case "jpg":
      case "jpeg":
      case "webp":
        return <AiOutlineFileImage className="text-blue-500" size={32} />;
      default:
        return <AiOutlineFileText className="text-gray-400" size={32} />;
    }
  };

  // Hàm xử lý hiển thị tên file sạch (bỏ phần timestamp Date.now() ở đầu)
  const formatFileName = (name: string) => {
    const parts = name.split("-");
    if (parts.length > 1) {
      return parts.slice(1).join("-"); // Bỏ phần số ở đầu
    }
    return name;
  };

  return (
    <section id="uploads" className="py-20">
      <div className="w-[80%] mx-auto">
        <Titles title="Danh Sách Tài Liệu" as="h1" />

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <AiOutlineLoading3Quarters
              className="animate-spin text-purple-500"
              size={40}
            />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {files.length > 0 ? (
              files.map((file, index) => (
                <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  className="bg-[#181818] border border-[#33353F] p-6 rounded-2xl flex items-center gap-5 hover:border-purple-500 transition-all duration-300 group shadow-lg"
                >
                  {/* Icon đại diện file */}
                  <div className="bg-[#242424] p-4 rounded-xl group-hover:bg-purple-900/20 transition-colors">
                    {renderFileIcon(file.name)}
                  </div>

                  {/* Thông tin file */}
                  <div className="flex-1 min-w-0">
                    <p
                      className="font-bold text-gray-200 truncate text-lg"
                      title={file.name}
                    >
                      {formatFileName(file.name)}
                    </p>
                    <p className="text-sm text-gray-500 mt-1">{file.size}</p>
                  </div>

                  {/* Nút tải xuống */}
                  <a
                    href={file.url}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-[#2a2a2a] rounded-full text-gray-400 hover:text-white hover:bg-purple-600 transition-all shadow-md"
                  >
                    <AiOutlineDownload size={24} />
                  </a>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-10">
                <p className="text-gray-500 italic">
                  Hiện tại chưa có tài liệu nào công khai.
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
