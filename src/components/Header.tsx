import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Products", path: "/products" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

const Header = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-card/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <Link to="/" className="font-display font-bold text-xl text-foreground tracking-tight">
          Nextor<span className="text-primary">.</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="relative px-4 py-2 text-sm font-body font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg"
            >
              {location.pathname === link.path && (
                <motion.div
                  layoutId="nav-active"
                  className="absolute inset-0 bg-muted rounded-lg"
                  transition={{ type: "spring", duration: 0.4, bounce: 0 }}
                />
              )}
              <span className="relative z-10">{link.label}</span>
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            to="/contact"
            className="inline-flex items-center h-11 px-8 rounded-lg bg-primary text-primary-foreground font-body font-medium text-sm shadow-sm hover:scale-[1.02] active:scale-[0.97] transition-transform"
          >
            Request a Quote
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-foreground"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-card border-b border-border px-4 pb-4"
        >
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMobileOpen(false)}
              className={`block py-3 text-sm font-body font-medium border-b border-border last:border-0 ${
                location.pathname === link.path ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setMobileOpen(false)}
            className="mt-4 inline-flex items-center justify-center w-full h-11 px-8 rounded-lg bg-primary text-primary-foreground font-body font-medium text-sm"
          >
            Request a Quote
          </Link>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
