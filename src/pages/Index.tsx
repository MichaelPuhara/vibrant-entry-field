
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import FoundingTeam from "@/components/FoundingTeam";
import MissionStatement from "@/components/MissionStatement";
import GoalSection from "@/components/GoalSection";
import ServicesSection from "@/components/ServicesSection";
import ExampleSection from "@/components/ExampleSection";
import ProjectsSection from "@/components/ProjectsSection";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  // Smooth scroll implementation
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]');
      
      if (anchor) {
        e.preventDefault();
        const targetId = anchor.getAttribute('href') as string;
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          window.scrollTo({
            top: targetElement.getBoundingClientRect().top + window.scrollY - 80,
            behavior: 'smooth'
          });
        }
      }
    };
    
    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <AboutSection />
        <FoundingTeam />
        <MissionStatement />
        <GoalSection />
        <ServicesSection />
        <ExampleSection />
        <ProjectsSection />
        <CallToAction />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
