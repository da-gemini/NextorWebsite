import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { products } from "@/data/products";

const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = products.find((p) => p.slug === slug);

  if (!product) return <Navigate to="/products" replace />;

  return (
    <main className="py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/products" className="inline-flex items-center text-sm font-body text-muted-foreground hover:text-foreground mb-6 transition-colors">
          <ArrowLeft size={16} className="mr-2" /> All Products
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="rounded-xl overflow-hidden aspect-[4/3]"
          >
            <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
          </motion.div>

          {/* Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <h1 className="text-foreground mb-3">{product.title}</h1>
            <p className="font-body text-sm text-muted-foreground leading-relaxed mb-7 max-w-lg">
              {product.description}
            </p>

            {/* Specs Table */}
            <h3 className="text-foreground mb-3">Specifications</h3>
            <div className="mb-7 bg-card rounded-lg border border-border overflow-hidden">
              {product.specs.map((spec, i) => (
                <div key={spec.label} className={`flex justify-between px-4 py-3 ${i % 2 === 0 ? 'bg-muted/40' : ''}`}>
                  <span className="font-body text-sm font-medium text-muted-foreground">{spec.label}</span>
                  <span className="font-body text-sm text-foreground tabular-nums">{spec.value}</span>
                </div>
              ))}
            </div>

            {/* Applications */}
            <h3 className="text-foreground mb-3">Applications</h3>
            <div className="flex flex-wrap gap-2 mb-8">
              {product.applications.map((app) => (
                <span key={app} className="inline-block px-3 py-1.5 rounded-md bg-primary/10 font-body text-xs font-medium text-primary">
                  {app}
                </span>
              ))}
            </div>

            <Link
              to="/contact"
              className="group inline-flex items-center h-11 px-7 rounded-lg bg-primary text-primary-foreground font-body font-medium text-sm shadow-md hover:shadow-lg hover:bg-primary/90 active:scale-[0.97] transition-all duration-200"
            >
              Request a Quote <ArrowRight className="ml-2 group-hover:translate-x-0.5 transition-transform" size={16} />
            </Link>
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default ProductDetail;
