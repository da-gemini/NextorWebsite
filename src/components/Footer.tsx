import { Link } from "react-router-dom";
import { siteConfig } from "@/config/site";
import { products } from "@/data/products";
import lightLogo from "@/assets/nextor-logo-light.png";


const Footer = () => (
  <footer className="bg-foreground text-background/60 py-6">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {/* Brand */}
        <div className="col-span-2 md:col-span-1">
          <img src={lightLogo} alt="Nextor Enterprises" className="h-11 w-auto object-contain mb-3" width={177} height={44} loading="lazy" />
          <p className="font-body text-xs leading-relaxed max-w-xs text-justify">
            {siteConfig.description}
          </p>
        </div>

        {/* Products (first 6 from src/data/products.ts) */}
        <div>
          <h4 className="font-display font-semibold text-background text-xs uppercase tracking-wider mb-2">Products</h4>
          <ul className="space-y-1 font-body text-xs">
            {products.slice(0, 6).map((p) => (
              <li key={p.slug}>
                <Link to={`/products/${p.slug}`} className="hover:text-background transition-colors">{p.title}</Link>
              </li>
            ))}
            <li><Link to="/products" className="hover:text-background transition-colors">View all →</Link></li>
          </ul>
        </div>


        {/* Company */}
        <div>
          <h4 className="font-display font-semibold text-background text-xs uppercase tracking-wider mb-2">Company</h4>
          <ul className="space-y-1 font-body text-xs">
            <li><Link to="/about" className="hover:text-background transition-colors">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-background transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-display font-semibold text-background text-xs uppercase tracking-wider mb-2">Contact</h4>
          <ul className="space-y-1 font-body text-xs">
            <li>{siteConfig.contact.email}</li>
            <li>{siteConfig.contact.address}</li>
          </ul>
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-background/10 text-center font-body text-xs opacity-50">
        © {new Date().getFullYear()} Nextor Enterprises. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
