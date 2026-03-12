import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Globe, Leaf } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } },
};

const Index = () => {
  return (
    <main>
      {/* Hero */}
      <section className="min-h-[75svh] grid place-content-center text-center px-4 py-24">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="max-w-3xl mx-auto"
        >
          <motion.h1 variants={fadeUp} transition={{ duration: 0.5 }} className="text-foreground mb-6">
            Reliable Sourcing for Essential Goods
          </motion.h1>
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="font-body text-lg text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed"
          >
            We provide high-grade cotton tissues, guar gum, rice, and honey for global industries. Quality you can trust, at scale.
          </motion.p>
          <motion.div variants={fadeUp} transition={{ duration: 0.5 }} className="flex items-center justify-center gap-4 flex-wrap">
            <Link
              to="/products"
              className="inline-flex items-center h-11 px-8 rounded-lg bg-primary text-primary-foreground font-body font-medium text-sm shadow-sm hover:scale-[1.02] active:scale-[0.97] transition-transform"
            >
              View Products <ArrowRight className="ml-2" size={16} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center h-11 px-8 rounded-lg bg-secondary text-secondary-foreground font-body font-medium text-sm hover:scale-[1.02] active:scale-[0.97] transition-transform"
            >
              Request a Quote
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Product Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {products.map((p) => (
            <motion.div key={p.slug} variants={fadeUp} transition={{ duration: 0.4 }}>
              <ProductCard
                title={p.title}
                description={p.shortDescription}
                image={p.image}
                slug={p.slug}
              />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Commitment */}
      <section className="bg-muted py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-foreground text-center mb-12">Why Partner With Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Quality Assured",
                desc: "Every product batch is tested against international standards. We provide certificates of analysis with every shipment.",
              },
              {
                icon: Globe,
                title: "Global Reach",
                desc: "We export to over 30 countries across Asia, Europe, Africa, and the Americas. Reliable logistics and competitive pricing.",
              },
              {
                icon: Leaf,
                title: "Sustainable Sourcing",
                desc: "Direct partnerships with certified farms and producers ensure traceability and ethical supply chain practices.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-card rounded-xl p-8 shadow-sm">
                <item.icon className="text-primary mb-4" size={28} />
                <h3 className="text-foreground text-lg font-display font-semibold mb-2">{item.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-foreground mb-4">Ready to Source?</h2>
          <p className="font-body text-muted-foreground mb-8 text-lg">
            Tell us what you need. Our team will respond with pricing and specifications within 24 hours.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center h-11 px-8 rounded-lg bg-primary text-primary-foreground font-body font-medium text-sm shadow-sm hover:scale-[1.02] active:scale-[0.97] transition-transform"
          >
            Request a Quote <ArrowRight className="ml-2" size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Index;
