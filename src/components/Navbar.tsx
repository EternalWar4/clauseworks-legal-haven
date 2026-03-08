import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/clauseworks-logo.png";

const navLinks = [
  { label: "Home", target: "home" },
  { label: "Practice Areas", target: "practice-areas" },
  { label: "Why Choose Us", target: "why-choose" },
  { label: "Contact", target: "contact" },
];

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-background sticky top-0 z-50 shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
      <div className="section-container flex items-center justify-between py-3">
        <button onClick={() => scrollTo("home")} className="flex items-center gap-2">
          <img src={logo} alt="Clauseworks Logo" className="h-10 w-10 object-contain" />
          <span className="font-display text-2xl font-bold text-primary">
            Clause<span className="text-accent">works</span>
          </span>
        </button>

        <button className="md:hidden text-primary" onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>

        <ul className="hidden md:flex gap-8">
          {navLinks.map((l) => (
            <li key={l.target}>
              <button
                onClick={() => scrollTo(l.target)}
                className="font-body font-medium text-foreground hover:text-primary transition-colors"
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {open && (
        <ul className="md:hidden bg-background shadow-md px-6 pb-4 flex flex-col gap-4">
          {navLinks.map((l) => (
            <li key={l.target}>
              <button
                onClick={() => { scrollTo(l.target); setOpen(false); }}
                className="font-body font-medium text-foreground hover:text-primary transition-colors"
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
