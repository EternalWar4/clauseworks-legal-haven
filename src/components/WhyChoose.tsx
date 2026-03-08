import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Zap, ShieldCheck } from "lucide-react";

const features = [
  { icon: GraduationCap, title: "Expert Legal Team", desc: "Our attorneys bring extensive experience and deep expertise in litigation, arbitration, and corporate law, ensuring top-tier legal representation." },
  { icon: Briefcase, title: "Client-Centric Approach", desc: "We prioritize understanding your unique needs and objectives, crafting tailored legal strategies that align with your business goals." },
  { icon: Zap, title: "Efficient Solutions", desc: "Committed to delivering timely and cost-effective legal solutions without compromising on quality or attention to detail." },
  { icon: ShieldCheck, title: "Proven Track Record", desc: "Successfully represented clients in complex legal matters with a strong record of favorable outcomes and client satisfaction." },
];

const WhyChoose = () => (
  <section id="why-choose" className="py-20 px-6 bg-secondary">
    <div className="section-container">
      <h2 className="font-display text-3xl md:text-4xl text-center text-primary font-bold mb-12">
        Why Choose Clauseworks
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="text-center p-6"
          >
            <div className="w-[70px] h-[70px] bg-primary rounded-full flex items-center justify-center mx-auto mb-5">
              <f.icon className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="font-display text-lg font-semibold text-primary mb-3">{f.title}</h3>
            <p className="text-muted-foreground font-body">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChoose;
