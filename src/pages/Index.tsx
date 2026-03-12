import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import DisclaimerModal from "@/components/DisclaimerModal";
import PracticeAreas from "@/components/PracticeAreas";
import WhyChoose from "@/components/WhyChoose";
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
  </div>
);

export default Index;
