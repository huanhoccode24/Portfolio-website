import { writeFile, mkdir } from "fs/promises";
import path from "path";
import fs from "fs";
import { NextResponse } from "next/server";

// 1. Lấy danh sách file đã upload
export async function GET() {
  try {
    const dirPath = path.join(process.cwd(), "public/uploads");

    if (!fs.existsSync(dirPath)) {
      return NextResponse.json({ success: true, files: [] });
    }

    const fileNames = fs.readdirSync(dirPath);
    const files = fileNames
      .map((name) => {
        const stats = fs.statSync(path.join(dirPath, name));
        return {
          name,
          size: (stats.size / 1024).toFixed(1) + " KB",
          url: `/uploads/${name}`,
          createdAt: stats.mtime,
        };
      })
      // Sắp xếp file mới nhất lên đầu
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());

    return NextResponse.json({ success: true, files });
  } catch (error) {
    console.error("Lỗi GET:", error);
    return NextResponse.json(
      { success: false, message: "Không thể lấy danh sách file" },
      { status: 500 },
    );
  }
}

// 2. Xử lý tải file lên
export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json(
        { success: false, message: "Không tìm thấy file nào được chọn!" },
        { status: 400 },
      );
    }

    // Giới hạn 10MB
    const MAX_SIZE = 10 * 1024 * 1024;
    if (file.size > MAX_SIZE) {
      return NextResponse.json(
        {
          success: false,
          message: `File quá lớn (${(file.size / (1024 * 1024)).toFixed(2)}MB). Giới hạn là 10MB`,
        },
        { status: 413 },
      );
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const dirPath = path.join(process.cwd(), "public/uploads");
    if (!fs.existsSync(dirPath)) {
      await mkdir(dirPath, { recursive: true });
    }

    // Tạo tên file an toàn (Thời gian + Tên gốc không khoảng trắng)
    const safeName = `${Date.now()}-${file.name.replace(/\s+/g, "_")}`;
    const uploadPath = path.join(dirPath, safeName);

    await writeFile(uploadPath, buffer);

    return NextResponse.json({
      success: true,
      fileName: safeName,
      message: "Tải lên thành công",
    });
  } catch (error) {
    console.error("Lỗi POST:", error);
    return NextResponse.json(
      { success: false, message: "Lỗi hệ thống khi lưu file" },
      { status: 500 },
    );
  }
}
