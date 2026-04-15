import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/config/site";

const Header = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/92 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-14">
        {/* Logo — monogram + name */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="font-display font-bold text-sm text-primary-foreground leading-none">N</span>
          </div>
          <span className="font-display font-bold text-base text-foreground tracking-tight">{siteConfig.name}</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-0.5">
          {siteConfig.nav.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="relative px-3.5 py-1.5 text-sm font-body font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md"
            >
              {location.pathname === link.path && (
                <motion.div
                  layoutId="nav-pill"
                  className="absolute inset-0 bg-primary/8 rounded-md"
                  transition={{ type: "spring", duration: 0.35, bounce: 0.1 }}
                />
              )}
              <span className="relative z-10">{link.label}</span>
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <Link
          to="/contact"
          className="hidden md:inline-flex items-center h-8 px-4 rounded-md bg-primary text-primary-foreground font-body font-medium text-xs shadow-sm hover:bg-primary/90 active:scale-[0.97] transition-all"
        >
          Get a Quote
        </Link>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-foreground"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.18 }}
            className="md:hidden bg-background border-b border-border px-4 pb-3 overflow-hidden"
          >
            {siteConfig.nav.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileOpen(false)}
                className={`block py-2.5 text-sm font-body font-medium border-b border-border/50 last:border-0 transition-colors ${
                  location.pathname === link.path ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-2 flex items-center justify-center w-full h-9 rounded-md bg-primary text-primary-foreground font-body font-medium text-sm"
            >
              Get a Quote
            </Link>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
