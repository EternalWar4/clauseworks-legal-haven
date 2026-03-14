import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import clauseworksIcon from "@/assets/clauseworks-icon.png";

type NavItem =
  | { label: string; type: "scroll"; target: string }
  | { label: string; type: "link"; to: string };

const homeNavLinks: NavItem[] = [
  { label: "Home", type: "scroll", target: "home" },
  { label: "About Us", type: "link", to: "/about" },
  { label: "Expertise", type: "link", to: "/expertise" },
  { label: "Insights", type: "link", to: "/insights" },
  { label: "Contact", type: "scroll", target: "contact" },
];

const subpageNavLinks: NavItem[] = [
  { label: "Home", type: "link", to: "/" },
  { label: "About Us", type: "link", to: "/about" },
  { label: "Expertise", type: "link", to: "/expertise" },
  { label: "Insights", type: "link", to: "/insights" },
  { label: "Contact", type: "link", to: "/#contact" },
];

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

const NavItemRenderer = ({ item, onClick }: { item: NavItem; onClick?: () => void }) => {
  const location = useLocation();

  if (item.type === "scroll") {
    return (
      <button
        onClick={() => { scrollTo(item.target); onClick?.(); }}
        className="font-body font-medium text-foreground hover:text-primary transition-colors"
      >
        {item.label}
      </button>
    );
  }

  const isActive = location.pathname === item.to;
  return (
    <Link
      to={item.to}
      onClick={onClick}
      className={`font-body font-medium transition-colors ${isActive ? "text-primary font-semibold" : "text-foreground hover:text-primary"}`}
    >
      {item.label}
    </Link>
  );
};

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";
  const navLinks = isHome ? homeNavLinks : subpageNavLinks;

  return (
    <nav className="bg-background sticky top-0 z-50 shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
      <div className="section-container flex items-center justify-between py-3">
        <Link to="/" className="flex items-center gap-2">
          <img src={clauseworksIcon} alt="Clauseworks logo" className="h-12 w-12" />
          <span className="font-display text-3xl font-bold text-primary">
            Clause<span className="text-accent">Works</span>
          </span>
        </Link>

        <button className="md:hidden text-primary" onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>

        <ul className="hidden md:flex gap-8">
          {navLinks.map((l) => (
            <li key={l.label}>
              <NavItemRenderer item={l} />
            </li>
          ))}
        </ul>
      </div>

      {open && (
        <ul className="md:hidden bg-background shadow-md px-6 pb-4 flex flex-col gap-4">
          {navLinks.map((l) => (
            <li key={l.label}>
              <NavItemRenderer item={l} onClick={() => setOpen(false)} />
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
