import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { VideoEditorSection } from "./components/VideoEditorSection";
import { WebDeveloperSection } from "./components/WebDeveloperSection";
import { SkillsSection } from "./components/SkillsSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { AboutSection } from "./components/AboutSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navigation />
      
      <main>
        <div id="home">
          <Hero />
        </div>
        
        <div id="services">
          <VideoEditorSection />
          <WebDeveloperSection />
        </div>
        
        <SkillsSection />
        
        <div id="projects">
          <ProjectsSection />
        </div>
        
        <div id="about">
          <AboutSection />
        </div>
        
        <div id="contact">
          <ContactSection />
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
