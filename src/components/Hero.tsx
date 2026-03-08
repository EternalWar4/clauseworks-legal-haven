import { motion } from "framer-motion";

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

const Hero = () => (
  <section
    id="home"
    className="bg-gradient-to-br from-primary to-primary-dark text-primary-foreground py-24 md:py-32 px-6 text-center"
  >
    <motion.div
      className="max-w-[900px] mx-auto"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
        Excellence in Legal Representation
      </h1>
      <p className="text-lg md:text-xl opacity-95 mb-8 max-w-[700px] mx-auto font-body">
        Premier law firm in New Delhi specializing in Litigation, Arbitration,
        and Corporate Law. Committed to delivering strategic legal solutions
        with integrity and expertise.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button
          onClick={() => scrollTo("contact")}
          className="px-8 py-3.5 bg-accent hover:bg-accent-dark text-accent-foreground font-semibold rounded transition-all hover:-translate-y-0.5 hover:shadow-lg"
        >
          Schedule a Consultation
        </button>
        <button
          onClick={() => scrollTo("practice-areas")}
          className="px-8 py-3.5 border-2 border-primary-foreground text-primary-foreground font-semibold rounded transition-all hover:bg-primary-foreground hover:text-primary"
        >
          Our Expertise
        </button>
      </div>
    </motion.div>
  </section>
);

export default Hero;
