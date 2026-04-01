import Title from "@/components/general/Titles";
import React from "react";
import ServiceCard from "./ServiceCard";
import { useTranslations } from "next-intl";

export default function ServiceSection() {
  const t = useTranslations("Services");

  return (
    <section id="services">
      {/* Title */}
      <Title title={t("ServiceTitle")} />
      <div className="w-[90%] sm:w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-20 text-justify">
        <div data-aos="fade-right">
          <ServiceCard
            name={t("Items.UI-UX.Name")}
            icon="/images/s1.png"
            description={t("Items.UI-UX.Desc")}
          />
        </div>

        <div data-aos="fade-right" data-aos-delay="100">
          <ServiceCard
            name={t("Items.Web-MobileApp.Name")}
            icon="/images/s2.png"
            description={t("Items.Web-MobileApp.Desc")}
          />
        </div>

        <div data-aos="fade-right" data-aos-delay="200">
          <ServiceCard
            name={t("Items.Design-Creative.Name")}
            icon="/images/s3.png"
            description={t("Items.Design-Creative.Desc")}
          />
        </div>

        <div data-aos="fade-right" data-aos-delay="300">
          <ServiceCard
            name={t("Items.Development.Name")}
            icon="/images/s4.png"
            description={t("Items.Development.Desc")}
          />
        </div>
      </div>
    </section>
  );
}
