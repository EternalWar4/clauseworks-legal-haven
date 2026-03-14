import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Scale, Handshake, Building2, FileText } from "lucide-react";

const caseStudies = [
  {
    icon: Scale,
    area: "Litigation",
    title: "Complex Commercial Dispute Resolution",
    summary:
      "Successfully represented a leading enterprise in a multi-crore commercial dispute before the Delhi High Court, securing a favourable judgment that set a significant precedent in contract enforcement law.",
    outcome: "Favourable judgment with full claim recovery",
  },
  {
    icon: Handshake,
    area: "Arbitration",
    title: "International Arbitration Under ICC Rules",
    summary:
      "Acted as lead counsel in an international arbitration involving cross-border contractual obligations. Navigated complex jurisdictional issues and achieved a settlement that preserved the client's commercial relationships.",
    outcome: "Successful settlement preserving business relations",
  },
  {
    icon: Building2,
    area: "Company Law",
    title: "Corporate Restructuring & Compliance",
    summary:
      "Advised a mid-size conglomerate on a comprehensive restructuring programme, including regulatory compliance, board governance reforms, and seamless integration of newly acquired entities under the Companies Act.",
    outcome: "Smooth restructuring with full regulatory approval",
  },
  {
    icon: FileText,
    area: "Civil Suits",
    title: "High-Value Property Dispute",
    summary:
      "Represented the plaintiff in a contested property matter involving overlapping title claims. Through meticulous documentation and strategic litigation, secured an injunction and ultimate title confirmation in the client's favour.",
    outcome: "Title confirmed with permanent injunction granted",
  },
];

const Expertise = () => (
  <div className="min-h-screen bg-background">
    <Navbar />

    {/* Hero */}
    <section className="bg-gradient-to-br from-primary to-primary-dark text-primary-foreground py-20 md:py-28 px-6 text-center">
      <motion.div
        className="max-w-[800px] mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Our Expertise</h1>
        <p className="text-lg md:text-xl opacity-90 font-body">
          Proven results across litigation, arbitration, and corporate law
        </p>
      </motion.div>
    </section>

    {/* Case Studies */}
    <section className="py-20 px-6">
      <div className="section-container">
        <h2 className="font-display text-3xl md:text-4xl text-center text-primary font-bold mb-4">
          Case Studies
        </h2>
        <p className="text-center text-muted-foreground max-w-[700px] mx-auto mb-12 font-body">
          Representative matters that demonstrate the depth and breadth of our legal practice
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-card p-8 rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.08)] border-t-4 border-accent"
            >
              <div className="flex items-center gap-3 mb-4">
                <c.icon className="w-10 h-10 text-accent" strokeWidth={1.5} />
                <span className="text-sm font-semibold text-accent uppercase tracking-wide font-body">
                  {c.area}
                </span>
              </div>
              <h3 className="font-display text-xl font-semibold text-primary mb-3">{c.title}</h3>
              <p className="text-muted-foreground leading-relaxed font-body text-justify mb-4">
                {c.summary}
              </p>
              <div className="bg-secondary rounded px-4 py-2">
                <span className="text-sm font-semibold text-primary font-body">Outcome: </span>
                <span className="text-sm text-muted-foreground font-body">{c.outcome}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <Footer />
    <WhatsAppButton />
  </div>
);

export default Expertise;
