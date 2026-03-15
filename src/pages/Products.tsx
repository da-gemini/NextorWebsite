import { motion } from "framer-motion";
import ProductCard from "@/components/ProductCard";
import PageTransition from "@/components/PageTransition";
import { products } from "@/data/products";

const Products = () => (
  <PageTransition>
    <main className="py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-foreground mb-3">Our Products</h1>
        <p className="font-body text-base text-muted-foreground mb-10 max-w-2xl">
          We trade in four core product categories. Each is sourced, tested, and delivered to meet the highest industry standards.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {products.map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: i * 0.08 }}
            >
              <ProductCard title={p.title} description={p.shortDescription} image={p.image} slug={p.slug} />
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  </PageTransition>
);

export default Products;
