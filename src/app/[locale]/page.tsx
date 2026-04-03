"use client";

import ContactSection from "@/components/contact/ContactSection";
import HeroSection from "@/components/home/hero/HeroSection";
import ProjectSection from "@/components/projects/ProjectSection";
import ResumeSection from "@/components/resume/ResumeSection";
import SkillSection from "@/components/skills/SkillSection";
import TestimonialSection from "@/components/testimonials/TestimonialSection";

import ServiceSection from "@/components/services/ServiceSection";
import { Toaster } from "react-hot-toast";
import UploadSection from "@/components/uploadfiles/UploadSection";
// import { useTranslations, useLocale } from "next-intl";
import AnimationLayout from "../../../layouts/AnimationLayout";

export default function HomePage() {
  // const t = useTranslations("HomePage");
  // const currentLocale = useLocale();
  // const otherLocale = currentLocale === "vi" ? "en" : "vi";

  return (
    <AnimationLayout>
      <HeroSection />
      <ServiceSection />
      <ResumeSection />
      <SkillSection />
      <ProjectSection />
      <TestimonialSection />
      <UploadSection />
      <ContactSection />
      <Toaster />
    </AnimationLayout>
  );
}
