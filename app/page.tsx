import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TherapySection from "@/components/TherapySection";
import QualificationsSection from "@/components/QualificationsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <div className="flex flex-col">
      <section id="home">
        <HeroSection />
      </section>
      <section id="about">
        <AboutSection />
      </section>
      <section id="therapy">
        <TherapySection />
      </section>
      <section id="qualifications">
        <QualificationsSection />
      </section>
      <section id="experience">
        <ExperienceSection />
      </section>
      <section id="contact">
        <ContactSection />
      </section>
    </div>
  );
}
