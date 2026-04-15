import { motion } from "framer-motion";
import ProductCard from "@/components/ProductCard";
import PageTransition from "@/components/PageTransition";
import { products } from "@/data/products";

const Products = () => (
  <PageTransition>
    <main className="py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-foreground mb-2">Our Products</h1>
        <p className="font-body text-sm text-muted-foreground mb-8 max-w-xl">
          Four core product categories — each sourced, tested, and delivered to the highest standards.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {products.map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.07 }}
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
