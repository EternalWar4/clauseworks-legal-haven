import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import DisclaimerModal from "@/components/DisclaimerModal";
import PracticeAreas from "@/components/PracticeAreas";
import WhyChoose from "@/components/WhyChoose";
import WhatsAppButton from "@/components/WhatsAppButton";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <DisclaimerModal />
    <Navbar />
    <Hero />
    <PracticeAreas />
    <WhyChoose />
    <Contact />
    <Footer />
    <WhatsAppButton />
  </div>
);

export default Index;
