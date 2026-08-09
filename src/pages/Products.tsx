import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Compass } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import PageTransition from "@/components/PageTransition";
import { productsByCategory } from "@/data/products";
import { siteConfig } from "@/config/site";

const Products = () => {
  const { sourcing } = siteConfig;

  return (
    <PageTransition>
      <main className="py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-foreground mb-2">Our Products</h1>
          <p className="font-body text-sm text-muted-foreground mb-8 max-w-xl">
            Agricultural products, food ingredients, and specialty commodities — each sourced, graded, and delivered to
            your specifications.
          </p>

          <div className="space-y-10">
            {productsByCategory.map((group) => (
              <section key={group.category}>
                <div className="flex items-center gap-3 mb-4">
                  <h2 className="text-foreground whitespace-nowrap">{group.category}</h2>
                  <span className="h-px flex-1 bg-border" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {group.items.map((p, i) => (
                    <motion.div
                      key={p.slug}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: Math.min(i, 4) * 0.05 }}
                    >
                      <ProductCard title={p.title} description={p.shortDescription} image={p.image} slug={p.slug} />
                    </motion.div>
                  ))}
                </div>
              </section>
            ))}
          </div>


          {/* Looking for something else */}
          <div className="mt-10 bg-card border border-border rounded-2xl p-7 md:p-9">
            <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
              <Compass className="text-primary" size={18} />
            </div>
            <h2 className="text-foreground mb-3">{sourcing.heading}</h2>
            <div className="max-w-2xl space-y-3 mb-4">
              {sourcing.paragraphs.map((text, i) => (
                <p key={i} className="font-body text-sm text-muted-foreground leading-relaxed">
                  {text}
                </p>
              ))}
            </div>
            <p className="font-body text-sm font-medium text-foreground max-w-2xl mb-5">{sourcing.closing}</p>
            <Link
              to="/contact"
              className="group inline-flex items-center h-10 px-6 rounded-lg bg-primary text-primary-foreground font-body font-medium text-sm shadow-md hover:shadow-lg hover:bg-primary/90 active:scale-[0.97] transition-all"
            >
              {sourcing.buttonText}
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={15} />
            </Link>
          </div>
        </div>
      </main>
    </PageTransition>
  );
};

export default Products;
