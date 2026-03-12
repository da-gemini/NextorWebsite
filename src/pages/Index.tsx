import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Globe, Leaf, ChevronRight } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const Index = () => {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-[70svh] grid place-content-center text-center px-4 py-16 overflow-hidden">
        <div className="absolute inset-0 bg-[var(--hero-gradient)]" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />
        
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="max-w-3xl mx-auto relative z-10"
        >
          <motion.span
            variants={fadeUp}
            transition={{ duration: 0.4 }}
            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-body text-xs font-semibold uppercase tracking-wider mb-6"
          >
            Trusted by 500+ businesses worldwide
          </motion.span>
          <motion.h1 variants={fadeUp} transition={{ duration: 0.5 }} className="text-foreground mb-5">
            Reliable Sourcing for Essential Goods
          </motion.h1>
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="font-body text-base text-muted-foreground max-w-xl mx-auto mb-8 leading-relaxed"
          >
            We provide high-grade cotton tissues, guar gum, rice, and honey for global industries. Quality you can trust, at scale.
          </motion.p>
          <motion.div variants={fadeUp} transition={{ duration: 0.5 }} className="flex items-center justify-center gap-3 flex-wrap">
            <Link
              to="/products"
              className="group inline-flex items-center h-11 px-7 rounded-lg bg-primary text-primary-foreground font-body font-medium text-sm shadow-md hover:shadow-lg hover:bg-primary/90 active:scale-[0.97] transition-all duration-200"
            >
              View Products <ArrowRight className="ml-2 group-hover:translate-x-0.5 transition-transform" size={16} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center h-11 px-7 rounded-lg border border-border bg-card text-foreground font-body font-medium text-sm hover:bg-secondary active:scale-[0.97] transition-all duration-200"
            >
              Request a Quote
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Product Grid */}
      <section className="bg-card py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-foreground mb-2">Our Products</h2>
              <p className="font-body text-sm text-muted-foreground max-w-md">
                Four core product lines, sourced and tested to meet the highest standards.
              </p>
            </div>
            <Link to="/products" className="hidden sm:inline-flex items-center text-sm font-body font-medium text-primary hover:underline">
              View all <ChevronRight size={14} className="ml-1" />
            </Link>
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
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
        </div>
      </section>

      {/* Commitment */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-foreground text-center mb-3">Why Partner With Us</h2>
          <p className="font-body text-sm text-muted-foreground text-center mb-10 max-w-lg mx-auto">
            We combine deep industry expertise with rigorous quality standards to deliver reliable supply chains.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                icon: Shield,
                title: "Quality Assured",
                desc: "Every batch tested against international standards. Certificates of analysis with every shipment.",
              },
              {
                icon: Globe,
                title: "Global Reach",
                desc: "Exports to 30+ countries across Asia, Europe, Africa, and the Americas with reliable logistics.",
              },
              {
                icon: Leaf,
                title: "Sustainable Sourcing",
                desc: "Direct partnerships with certified farms ensure traceability and ethical supply chain practices.",
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="bg-card rounded-xl p-7 shadow-sm border border-border hover:shadow-md hover:border-primary/20 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="text-primary" size={20} />
                </div>
                <h3 className="text-foreground text-base font-display font-semibold mb-2">{item.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto bg-primary rounded-2xl p-10 md:p-14 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
          <h2 className="text-primary-foreground mb-3 relative z-10">Ready to Source?</h2>
          <p className="font-body text-primary-foreground/80 mb-7 text-base max-w-lg mx-auto relative z-10">
            Tell us what you need. Our team will respond with pricing and specifications within 24 hours.
          </p>
          <Link
            to="/contact"
            className="group relative z-10 inline-flex items-center h-11 px-7 rounded-lg bg-card text-foreground font-body font-medium text-sm shadow-md hover:shadow-lg active:scale-[0.97] transition-all duration-200"
          >
            Request a Quote <ArrowRight className="ml-2 group-hover:translate-x-0.5 transition-transform" size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Index;
