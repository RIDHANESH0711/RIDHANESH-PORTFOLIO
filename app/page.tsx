'use client';

import { motion } from 'framer-motion';
import { LoadingScreen } from '@/components/loading-screen';
import { Navbar } from '@/components/navbar';
import { HeroSection } from '@/components/sections/hero-section';
import { AboutSection } from '@/components/sections/about-section';
import { SkillsSection } from '@/components/sections/skills-section';
import { ProjectsSection } from '@/components/sections/projects-section';
import { InternshipSection } from '@/components/sections/internship-section';
import { EducationSection } from '@/components/sections/education-section';
import { CertificationsSection } from '@/components/sections/certifications-section';
import { ContactSection } from '@/components/sections/contact-section';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <Navbar />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10"
      >
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <InternshipSection />
        <EducationSection />
        <CertificationsSection />
        <ContactSection />
      </motion.main>
      <Footer />
    </>
  );
}
