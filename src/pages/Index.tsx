import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SpiritualitySection from "@/components/SpiritualitySection";
import ActivitiesSection from "@/components/ActivitiesSection";
import MazingiraSection from "@/components/MazingiraSection";
import EventsSection from "@/components/EventsSection";
import GallerySection from "@/components/GallerySection";
import JoinSection from "@/components/JoinSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SpiritualitySection />
      <ActivitiesSection />
      <MazingiraSection />
      <EventsSection />
      <GallerySection />
      <JoinSection />
      <ContactSection />
    </div>
  );
};

export default Index;
