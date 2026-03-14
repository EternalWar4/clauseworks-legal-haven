import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Target, Eye, BookOpen } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const values = [
  {
    icon: Target,
    title: "Our Mission",
    desc: "To provide exceptional legal representation that safeguards the rights and interests of our clients, delivering strategic solutions with unwavering commitment to justice and professional excellence.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    desc: "To be a trusted name in the Indian legal landscape, known for integrity, innovation, and the highest standards of advocacy across litigation, arbitration, and corporate law.",
  },
  {
    icon: BookOpen,
    title: "Our Philosophy",
    desc: "We believe that every legal challenge deserves a thoughtful, tailored approach. By combining deep legal knowledge with practical insight, we strive to turn complex legal matters into clear paths forward.",
  },
];

const AboutUs = () => (
  <div className="min-h-screen bg-background">
    <Navbar />

    {/* Hero Banner */}
    <section className="bg-gradient-to-br from-primary to-primary-dark text-primary-foreground py-20 md:py-28 px-6 text-center">
      <motion.div
        className="max-w-[800px] mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">About Clauseworks</h1>
        <p className="text-lg md:text-xl opacity-90 font-body">
          A legacy of legal excellence rooted in New Delhi
        </p>
      </motion.div>
    </section>

    {/* Story Section */}
    <section className="py-20 px-6">
      <div className="section-container max-w-[800px]">
        <motion.div {...fadeUp}>
          <h2 className="font-display text-3xl md:text-4xl text-primary font-bold mb-6">
            Our Story
          </h2>
          <div className="space-y-5 text-muted-foreground font-body leading-relaxed text-justify">
            <p>
              Clauseworks was founded with a singular vision: to deliver legal services of the highest calibre while maintaining an unwavering commitment to our clients' interests. Based in New Delhi, the firm has grown from its inception into a trusted name in litigation, arbitration, and corporate law.
            </p>
            <p>
              Our founding team brings together decades of combined experience across India's courts and tribunals, having successfully represented clients in some of the most complex and high-stakes legal matters. This depth of experience, combined with a forward-looking approach, allows us to offer strategic counsel that is both practical and effective.
            </p>
            <p>
              At Clauseworks, we understand that legal challenges require more than textbook solutions. Every client engagement is approached with fresh perspective, meticulous research, and a commitment to achieving the best possible outcome. Our firm's culture emphasises collaboration, continuous learning, and ethical practice above all else.
            </p>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Mission / Vision / Philosophy */}
    <section className="py-20 px-6 bg-secondary">
      <div className="section-container">
        <h2 className="font-display text-3xl md:text-4xl text-center text-primary font-bold mb-12">
          What Drives Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-card p-8 rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.08)] text-center"
            >
              <div className="w-[70px] h-[70px] bg-primary rounded-full flex items-center justify-center mx-auto mb-5">
                <v.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold text-primary mb-3">{v.title}</h3>
              <p className="text-muted-foreground font-body leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <Footer />
    <WhatsAppButton />
  </div>
);

export default AboutUs;
