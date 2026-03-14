import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const articles = [
  {
    date: "March 10, 2026",
    category: "Litigation",
    title: "Navigating Commercial Disputes in India: Key Strategies for 2026",
    excerpt:
      "An overview of the evolving landscape of commercial litigation in India, including recent judicial trends and practical strategies for businesses facing contractual disputes.",
  },
  {
    date: "February 22, 2026",
    category: "Arbitration",
    title: "The Rise of Institutional Arbitration in India",
    excerpt:
      "India's arbitration ecosystem is maturing rapidly. We examine how institutional arbitration centres are reshaping dispute resolution and what it means for businesses.",
  },
  {
    date: "February 5, 2026",
    category: "Company Law",
    title: "Corporate Governance Reforms: What Directors Need to Know",
    excerpt:
      "Recent amendments to the Companies Act have introduced new compliance requirements for boards. This article highlights the key changes and their practical implications.",
  },
  {
    date: "January 18, 2026",
    category: "Civil Law",
    title: "Property Disputes and Title Verification: A Practical Guide",
    excerpt:
      "Property litigation remains one of the most common civil matters in India. We provide a concise guide to title verification, common pitfalls, and protective measures.",
  },
  {
    date: "January 3, 2026",
    category: "Legal Updates",
    title: "Supreme Court Roundup: Notable Judgments from Q4 2025",
    excerpt:
      "A curated summary of significant Supreme Court decisions from the last quarter that impact commercial law, property rights, and arbitration practice.",
  },
];

const Insights = () => (
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
        <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Insights</h1>
        <p className="text-lg md:text-xl opacity-90 font-body">
          Legal perspectives, analysis, and thought leadership
        </p>
      </motion.div>
    </section>

    {/* Articles */}
    <section className="py-20 px-6">
      <div className="section-container max-w-[800px]">
        <div className="space-y-8">
          {articles.map((a, i) => (
            <motion.article
              key={a.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="bg-card p-8 rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.08)] border-l-4 border-accent"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-sm text-accent font-semibold uppercase tracking-wide font-body">
                  {a.category}
                </span>
                <span className="text-sm text-muted-foreground font-body">•</span>
                <span className="text-sm text-muted-foreground font-body">{a.date}</span>
              </div>
              <h3 className="font-display text-xl font-semibold text-primary mb-3">{a.title}</h3>
              <p className="text-muted-foreground leading-relaxed font-body text-justify">
                {a.excerpt}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>

    <Footer />
    <WhatsAppButton />
  </div>
);

export default Insights;
