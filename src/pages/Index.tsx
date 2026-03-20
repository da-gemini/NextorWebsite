import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Globe, Leaf, ChevronRight } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import SectionHeading from "@/components/SectionHeading";
import { products } from "@/data/products";
import { siteConfig } from "@/config/site";

const iconMap = { Shield, Globe, Leaf } as const;

const fade = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Index = () => {
  const { hero, whyUs, cta } = siteConfig;

  return (
    <main>
      {/* ── Hero ── */}
      <section className="relative min-h-[60svh] flex items-center justify-center text-center px-4 py-14 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-[var(--hero-gradient)]" />
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary/8 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-accent/8 rounded-full blur-[100px]" />

        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.12 }}
          className="max-w-3xl mx-auto relative z-10"
        >
          <motion.span
            variants={fade}
            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-body text-xs font-semibold uppercase tracking-wider mb-6"
          >
            {hero.badge}
          </motion.span>

          <motion.h1 variants={fade} className="text-foreground mb-4">
            {hero.heading}
          </motion.h1>

          <motion.p variants={fade} className="font-body text-base text-muted-foreground max-w-xl mx-auto mb-8 leading-relaxed">
            {hero.subheading}
          </motion.p>

          <motion.div variants={fade} className="flex items-center justify-center gap-3 flex-wrap">
            <Link
              to="/products"
              className="group inline-flex items-center h-11 px-7 rounded-lg bg-primary text-primary-foreground font-body font-medium text-sm shadow-md hover:shadow-lg hover:bg-primary/90 active:scale-[0.97] transition-all duration-200"
            >
              {hero.ctaPrimary}
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center h-11 px-7 rounded-lg border border-border bg-card text-foreground font-body font-medium text-sm hover:bg-secondary hover:border-primary/20 active:scale-[0.97] transition-all duration-200"
            >
              {hero.ctaSecondary}
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* ── Products ── */}
      <section className="bg-card py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-8">
            <SectionHeading
              title="Our Products"
              subtitle="Four core product lines, sourced and tested to meet the highest standards."
            />
            <Link to="/products" className="hidden sm:inline-flex items-center text-sm font-body font-medium text-primary hover:underline">
              View all <ChevronRight size={14} className="ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {products.map((p, i) => (
              <motion.div
                key={p.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.35, delay: i * 0.08 }}
              >
                <ProductCard title={p.title} description={p.shortDescription} image={p.image} slug={p.slug} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Us ── */}
      <section className="py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title={whyUs.heading} subtitle={whyUs.subheading} center />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {whyUs.items.map((item, i) => {
              const Icon = iconMap[item.icon];
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.08 }}
                  className="bg-card rounded-xl p-7 border border-border hover:border-primary/20 hover:shadow-md transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="text-primary" size={20} />
                  </div>
                  <h3 className="text-foreground text-base font-display font-semibold mb-2">{item.title}</h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="py-14 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="max-w-4xl mx-auto bg-primary rounded-2xl p-10 md:p-14 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-72 h-72 bg-accent/15 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3" />
          <h2 className="text-primary-foreground mb-3 relative z-10">{cta.heading}</h2>
          <p className="font-body text-primary-foreground/80 mb-7 text-base max-w-lg mx-auto relative z-10">
            {cta.subheading}
          </p>
          <Link
            to="/contact"
            className="group relative z-10 inline-flex items-center h-11 px-7 rounded-lg bg-card text-foreground font-body font-medium text-sm shadow-md hover:shadow-lg active:scale-[0.97] transition-all duration-200"
          >
            {cta.buttonText}
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
          </Link>
        </motion.div>
      </section>
    </main>
  );
};

export default Index;
