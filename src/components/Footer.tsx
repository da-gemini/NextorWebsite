import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-foreground text-muted py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <h3 className="font-display font-bold text-xl text-card mb-3">
              Nextor<span className="text-primary">.</span>
            </h3>
            <p className="font-body text-sm leading-relaxed max-w-md opacity-70">
              A trusted trading company providing high-grade cotton tissues, guar gum, rice, and honey to industries worldwide. Quality and reliability are the foundation of every partnership.
            </p>
          </div>
          <div>
            <h4 className="font-display font-semibold text-card text-sm uppercase tracking-wider mb-4">Products</h4>
            <ul className="space-y-2 font-body text-sm opacity-70">
              <li><Link to="/products/cotton-tissues" className="hover:opacity-100 transition-opacity">Cotton Tissues</Link></li>
              <li><Link to="/products/guar-gum" className="hover:opacity-100 transition-opacity">Guar Gum</Link></li>
              <li><Link to="/products/rice" className="hover:opacity-100 transition-opacity">Rice</Link></li>
              <li><Link to="/products/honey" className="hover:opacity-100 transition-opacity">Honey</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display font-semibold text-card text-sm uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-2 font-body text-sm opacity-70">
              <li><Link to="/about" className="hover:opacity-100 transition-opacity">About Us</Link></li>
              <li><Link to="/contact" className="hover:opacity-100 transition-opacity">Contact</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-muted-foreground/20 text-center font-body text-xs opacity-50">
          © {new Date().getFullYear()} Nextor Trading. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
