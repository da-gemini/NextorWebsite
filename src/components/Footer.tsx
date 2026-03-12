import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-foreground text-muted py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <h3 className="font-display font-bold text-lg text-card mb-2">
              Nextor<span className="text-accent">.</span>
            </h3>
            <p className="font-body text-xs leading-relaxed opacity-60 max-w-xs">
              High-grade cotton tissues, guar gum, rice, and honey for industries worldwide.
            </p>
          </div>
          <div>
            <h4 className="font-display font-semibold text-card text-xs uppercase tracking-wider mb-3">Products</h4>
            <ul className="space-y-1.5 font-body text-xs opacity-60">
              <li><Link to="/products/cotton-tissues" className="hover:opacity-100 transition-opacity">Cotton Tissues</Link></li>
              <li><Link to="/products/guar-gum" className="hover:opacity-100 transition-opacity">Guar Gum</Link></li>
              <li><Link to="/products/rice" className="hover:opacity-100 transition-opacity">Rice</Link></li>
              <li><Link to="/products/honey" className="hover:opacity-100 transition-opacity">Honey</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display font-semibold text-card text-xs uppercase tracking-wider mb-3">Company</h4>
            <ul className="space-y-1.5 font-body text-xs opacity-60">
              <li><Link to="/about" className="hover:opacity-100 transition-opacity">About Us</Link></li>
              <li><Link to="/contact" className="hover:opacity-100 transition-opacity">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display font-semibold text-card text-xs uppercase tracking-wider mb-3">Contact</h4>
            <ul className="space-y-1.5 font-body text-xs opacity-60">
              <li>info@nextor.com</li>
              <li>+91 98765 43210</li>
              <li>Ahmedabad, India</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-muted-foreground/15 text-center font-body text-xs opacity-40">
          © {new Date().getFullYear()} Nextor Trading. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
