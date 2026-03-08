import { motion } from "framer-motion";
import { Scale, Handshake, Building2, FileText } from "lucide-react";

const areas = [
  {
    icon: Scale,
    title: "Litigation",
    desc: "Expert representation in civil and commercial disputes before all courts and tribunals. We handle complex litigation matters with strategic planning and meticulous execution, ensuring your interests are vigorously protected throughout the legal process.",
  },
  {
    icon: Handshake,
    title: "Arbitration",
    desc: "Comprehensive arbitration services including domestic and international arbitration proceedings. Our team provides skilled representation in institutional and ad-hoc arbitrations, offering efficient dispute resolution alternatives to traditional litigation.",
  },
  {
    icon: Building2,
    title: "Company Law",
    desc: "Full-spectrum corporate legal services covering incorporation, compliance, mergers, acquisitions, and corporate governance. We advise businesses on regulatory requirements, corporate restructuring, and commercial transactions under the Companies Act.",
  },
  {
    icon: FileText,
    title: "Civil Suits",
    desc: "Proficient handling of diverse civil matters including property disputes, contractual disagreements, recovery suits, and injunctions. Our approach combines thorough legal research with practical solutions to achieve favorable outcomes for our clients.",
  },
];

const PracticeAreas = () => (
  <section id="practice-areas" className="py-20 px-6">
    <div className="section-container">
      <h2 className="font-display text-3xl md:text-4xl text-center text-primary font-bold mb-4">
        Our Practice Areas
      </h2>
      <p className="text-center text-muted-foreground max-w-[700px] mx-auto mb-12 font-body">
        Comprehensive legal services tailored to meet the complex needs of our clients across
        diverse practice areas
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {areas.map((a, i) => (
          <motion.div
            key={a.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="bg-card p-8 rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.08)] border-t-4 border-accent hover:-translate-y-2 hover:shadow-xl transition-all"
          >
            <a.icon className="w-12 h-12 text-accent mb-4" strokeWidth={1.5} />
            <h3 className="font-display text-xl font-semibold text-primary mb-3">{a.title}</h3>
            <p className="text-muted-foreground leading-relaxed font-body text-justify">{a.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PracticeAreas;
