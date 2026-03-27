import ContactSection from "@/components/contact/ContactSection";
import HeroSection from "@/components/home/hero/HeroSection";
import ProjectSection from "@/components/projects/ProjectSection";
import ResumeSection from "@/components/resume/ResumeSection";
import SkillSection from "@/components/skills/SkillSection";
import TestimonialSection from "@/components/testimonials/TestimonialSection";
import AnimationLayout from "../../layouts/AnimationLayout";
import ServiceSection from "@/components/services/ServiceSection";
import { Toaster } from "react-hot-toast";
import UploadSection from "@/components/uploadfiles/UploadSection";

export default function Home() {
  return (
    <AnimationLayout>
      <HeroSection />
      <ServiceSection />
      <ResumeSection />
      <ProjectSection />
      <SkillSection />
      {/* <TestimonialSection /> */}
      <UploadSection />
      <ContactSection />
      <Toaster />
    </AnimationLayout>
  );
}
