import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Disclaimer from "@/components/Disclaimer";
import PracticeAreas from "@/components/PracticeAreas";
import WhyChoose from "@/components/WhyChoose";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <Hero />
    <Disclaimer />
    <PracticeAreas />
    <WhyChoose />
    <Contact />
    <Footer />
  </div>
);

export default Index;
