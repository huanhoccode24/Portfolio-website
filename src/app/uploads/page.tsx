"use client";
import React, { useState, useEffect } from "react";
import {
  AiOutlineCloudUpload,
  AiOutlineFileText,
  AiOutlineCheckCircle,
  AiOutlineLoading3Quarters,
  AiOutlineHistory,
} from "react-icons/ai";

interface FileStatus {
  file: File;
  status: "pending" | "uploading" | "completed" | "error";
}

interface UploadedFile {
  name: string;
  size: string;
  url: string;
  createdAt: string;
}

export default function UploadPage() {
  const [selectedFiles, setSelectedFiles] = useState<FileStatus[]>([]);
  const [uploadedHistory, setUploadedHistory] = useState<UploadedFile[]>([]);
  const [loading, setLoading] = useState(false);

  // Lấy danh sách file từ Server
  const fetchUploadedFiles = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/upload-api");
      const data = await res.json();
      if (data.success) setUploadedHistory(data.files);
    } catch (err) {
      console.error("Lỗi fetch:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUploadedFiles();
  }, []);

  // Chọn file từ máy tính
  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files).map((f) => ({
        file: f,
        status: "pending" as const,
      }));
      setSelectedFiles((prev) => [...prev, ...newFiles]);
    }
  };

  // Tiến hành Upload
  const handleUpload = async () => {
    const tempFiles = [...selectedFiles];

    for (let i = 0; i < tempFiles.length; i++) {
      if (tempFiles[i].status === "completed") continue;

      tempFiles[i].status = "uploading";
      setSelectedFiles([...tempFiles]);

      const formData = new FormData();
      formData.append("file", tempFiles[i].file);

      try {
        const res = await fetch("/api/upload-api", {
          method: "POST",
          body: formData,
        });
        const result = await res.json();

        if (result.success) {
          tempFiles[i].status = "completed";
        } else {
          tempFiles[i].status = "error";
          console.error(result.message);
        }
      } catch {
        tempFiles[i].status = "error";
      }
      setSelectedFiles([...tempFiles]);
    }
    // Cập nhật lại danh sách hiển thị bên dưới
    fetchUploadedFiles();
  };

  return (
    <div className="min-h-screen text-white p-6 md:p-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-10 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
          Quản Lý File
        </h1>

        {/* 1. Khu vực Dropzone */}
        <div className="relative border-2 border-dashed border-gray-700 rounded-2xl p-12 text-center bg-[#181818] hover:border-purple-500 transition-all cursor-pointer">
          <input
            type="file"
            multiple
            onChange={onFileChange}
            className="absolute inset-0 opacity-0 cursor-pointer"
          />
          <AiOutlineCloudUpload
            size={54}
            className="mx-auto text-purple-500 mb-4"
          />
          <p className="text-lg font-medium text-gray-300">
            Nhấn để chọn file hoặc kéo thả vào đây
          </p>
          <p className="text-sm text-gray-500 mt-2 italic">
            Dung lượng tối đa: 10MB mỗi tập tin
          </p>
        </div>

        {/* 2. Danh sách file ĐÃ CHỌN (Chờ upload) */}
        {selectedFiles.length > 0 && (
          <div className="mt-10 bg-[#181818] border border-gray-800 rounded-2xl p-6">
            <h2 className="text-xl font-semibold mb-4 text-purple-400">
              Tệp đã chọn ({selectedFiles.length})
            </h2>
            <div className="space-y-3">
              {selectedFiles.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between bg-[#222222] p-4 rounded-xl border border-gray-700"
                >
                  <div className="flex items-center gap-3 truncate">
                    <AiOutlineFileText
                      className="text-gray-400 flex-shrink-0"
                      size={20}
                    />
                    <span className="truncate text-sm">{item.file.name}</span>
                  </div>
                  <div className="ml-4">
                    {item.status === "uploading" && (
                      <AiOutlineLoading3Quarters className="animate-spin text-blue-500" />
                    )}
                    {item.status === "completed" && (
                      <AiOutlineCheckCircle
                        className="text-green-500"
                        size={22}
                      />
                    )}
                    {item.status === "pending" && (
                      <span className="text-xs text-gray-500 font-bold uppercase">
                        Chờ
                      </span>
                    )}
                    {item.status === "error" && (
                      <span className="text-xs text-red-500 font-bold uppercase">
                        Lỗi
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <button
              onClick={handleUpload}
              className="w-full mt-6 bg-purple-600 hover:bg-purple-700 py-4 rounded-xl font-bold text-lg transition-all shadow-lg shadow-purple-900/20"
            >
              Bắt đầu tải lên
            </button>
          </div>
        )}

        {/* 3. Danh sách file ĐÃ CÓ TRÊN SERVER */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <AiOutlineHistory className="text-green-500" /> Danh sách đã tải lên
          </h2>

          {loading ? (
            <div className="flex justify-center py-10">
              <AiOutlineLoading3Quarters
                className="animate-spin text-purple-500"
                size={40}
              />
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {uploadedHistory.length > 0 ? (
                uploadedHistory.map((file, i) => (
                  <div
                    key={i}
                    className="bg-[#181818] p-5 rounded-2xl border border-gray-800 hover:border-gray-600 transition-colors group"
                  >
                    <p className="font-semibold text-gray-200 truncate mb-2 group-hover:text-purple-400">
                      {file.name}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-500 italic">
                        {file.size}
                      </span>
                      <a
                        href={file.url}
                        target="_blank"
                        className="px-3 py-1 bg-[#252525] rounded-md text-xs text-purple-300 hover:bg-purple-600 hover:text-white transition-all"
                      >
                        Mở File
                      </a>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-gray-600 italic">
                  Chưa có tập tin nào được lưu.
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
