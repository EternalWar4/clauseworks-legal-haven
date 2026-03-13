const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

const Footer = () => (
  <footer className="bg-bg-dark text-primary-foreground pt-12 pb-6 px-6">
    <div className="section-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
      <div>
        <h4 className="font-display text-accent font-semibold mb-3">About Clauseworks</h4>
        <p className="text-sm opacity-80 font-body leading-relaxed text-justify">
          Clauseworks is a premier law firm based in New Delhi, providing comprehensive legal
          services in litigation, arbitration, and corporate law with a commitment to excellence
          and client satisfaction.
        </p>
      </div>
      <div>
        <h4 className="font-display text-accent font-semibold mb-3">Practice Areas</h4>
        {["Litigation", "Arbitration", "Company Law", "Civil Suits"].map((a) => (
          <button
            key={a}
            onClick={() => scrollTo("practice-areas")}
            className="block text-sm opacity-80 hover:text-accent transition-colors mb-1.5 font-body"
          >
            {a}
          </button>
        ))}
      </div>
      <div>
        <h4 className="font-display text-accent font-semibold mb-3">Quick Links</h4>
        {[
          { label: "Home", target: "home" },
          { label: "Practice Areas", target: "practice-areas" },
          { label: "Why Choose Us", target: "why-choose" },
          { label: "Contact", target: "contact" },
        ].map((l) => (
          <button
            key={l.target}
            onClick={() => scrollTo(l.target)}
            className="block text-sm opacity-80 hover:text-accent transition-colors mb-1.5 font-body"
          >
            {l.label}
          </button>
        ))}
      </div>
      <div>
        <h4 className="font-display text-accent font-semibold mb-3">Contact Info</h4>
        <p className="text-sm opacity-80 font-body mb-1.5">New Delhi, India</p>
        <a href="tel:+919354129891" className="block text-sm opacity-80 font-body mb-1.5 hover:text-accent transition-colors">+91 9354129891</a>
        <a href="mailto:contact@clauseworks.in" className="block text-sm opacity-80 font-body hover:text-accent transition-colors">contact@clauseworks.in</a>
      </div>
    </div>
    <div className="section-container border-t border-primary-foreground/10 pt-6 text-center">
      <p className="text-xs opacity-70 font-body">
        © 2026 Clauseworks. All rights reserved. | Attorney Advertising | This website complies
        with Bar Council of India Rules.
      </p>
    </div>
  </footer>
);

export default Footer;
