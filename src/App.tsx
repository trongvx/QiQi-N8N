import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import VideoDemoSection from "@/components/VideoDemoSection";
import TargetAudienceSection from "@/components/TargetAudienceSection";
import OutcomesSection from "@/components/OutcomesSection";
import CurriculumSection from "@/components/CurriculumSection";
import ClientsSection from "@/components/ClientsSection";
import InstructorSection from "@/components/InstructorSection";
import PricingSection from "@/components/PricingSection";
import ConsultationForm from "@/components/ConsultationForm";
import FinalCTA from "@/components/FinalCTA";
import FooterSection from "@/components/FooterSection";
import Modal from "@/components/Modal";

/**
 * Main App Component
 * Orchestrates the landing page sections with a consistent dark cinematic theme.
 */
const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-black overflow-x-hidden selection:bg-cyan-500/30">
      <Navbar />
      
      {/* Page Sections */}
      <div className="relative">
        <HeroSection />
        
        {/* Animated Scroll indicator for Hero only */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-12 z-20 hidden lg:block animate-bounce opacity-30">
          <div className="w-[1px] h-16 bg-gradient-to-b from-cyan-400 to-transparent" />
        </div>
      </div>

      <VideoDemoSection />
      <CurriculumSection />
      <TargetAudienceSection />
      <InstructorSection />
      <OutcomesSection />
      <ClientsSection />
      <PricingSection onOpenModal={() => setIsModalOpen(true)} />
      <ConsultationForm />
      <FooterSection />

      {/* Registration Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ConsultationForm isModal />
      </Modal>
    </main>
  );
};

export default App;
