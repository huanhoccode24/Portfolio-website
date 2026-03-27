import Title from "@/components/general/Titles";
import React from "react";
import ServiceCard from "./ServiceCard";

export default function ServiceSection() {
  return (
    <section id="services">
      {/* Title */}
      <Title title="Tôi có thể giúp gì cho bạn?" />
      <div className="w-[90%] sm:w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-20 text-justify">
        <div data-aos="fade-right">
          <ServiceCard
            name="UI/UX"
            icon="/images/s1.png"
            description="Thiết kế giao diện hiện đại, tối ưu hóa trải nghiệm người dùng nhằm tạo 
            ra các sản phẩm không chỉ đẹp mắt mà còn dễ dàng tương tác và đạt hiệu quả cao."
          />
        </div>

        <div data-aos="fade-right" data-aos-delay="100">
          <ServiceCard
            name="Web/Mobile App"
            icon="/images/s2.png"
            description="Phát triển ứng dụng Web và Mobile chuyên nghiệp, tối ưu hiệu suất và mang lại giá trị 
            thực tế cho người dùng thông qua mã nguồn chất lượng cao."
          />
        </div>

        <div data-aos="fade-right" data-aos-delay="200">
          <ServiceCard
            name="Design/Creative"
            icon="/images/s3.png"
            description="Chuyển hóa ý tưởng thành giao diện trực quan và sáng tạo. 
            Tập trung vào việc xây dựng bộ nhận diện đặc trưng, đảm bảo tính 
            thẩm mỹ đồng nhất và thu hút người dùng ngay từ cái nhìn đầu tiên."
          />
        </div>

        <div data-aos="fade-right" data-aos-delay="300">
          <ServiceCard
            name="Development"
            icon="/images/s4.png"
            description="Hiện thực hóa các tính năng phức tạp bằng mã nguồn tối ưu. 
            Tôi ưu tiên viết code sạch, dễ mở rộng và bảo trì, 
            đảm bảo hệ thống vận hành ổn định, mượt mà và an toàn."
          />
        </div>
      </div>
    </section>
  );
}
