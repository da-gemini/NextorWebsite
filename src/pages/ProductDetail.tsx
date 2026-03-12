import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { products } from "@/data/products";

const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = products.find((p) => p.slug === slug);

  if (!product) return <Navigate to="/products" replace />;

  return (
    <main className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/products" className="inline-flex items-center text-sm font-body text-muted-foreground hover:text-foreground mb-8 transition-colors">
          <ArrowLeft size={16} className="mr-2" /> All Products
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image */}
          <div className="rounded-xl overflow-hidden aspect-[4/3]">
            <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
          </div>

          {/* Details */}
          <div>
            <h1 className="text-foreground mb-4">{product.title}</h1>
            <p className="font-body text-muted-foreground leading-relaxed mb-8 max-w-lg">
              {product.description}
            </p>

            {/* Specs Table */}
            <h3 className="text-foreground mb-4">Specifications</h3>
            <div className="mb-8">
              {product.specs.map((spec) => (
                <div key={spec.label} className="flex justify-between py-3 border-b border-border last:border-0">
                  <span className="font-body text-sm font-medium text-muted-foreground">{spec.label}</span>
                  <span className="font-body text-sm text-foreground tabular-nums">{spec.value}</span>
                </div>
              ))}
            </div>

            {/* Applications */}
            <h3 className="text-foreground mb-3">Applications</h3>
            <div className="flex flex-wrap gap-2 mb-10">
              {product.applications.map((app) => (
                <span key={app} className="inline-block px-3 py-1.5 rounded-md bg-muted font-body text-xs font-medium text-muted-foreground">
                  {app}
                </span>
              ))}
            </div>

            <Link
              to="/contact"
              className="inline-flex items-center h-11 px-8 rounded-lg bg-primary text-primary-foreground font-body font-medium text-sm shadow-sm hover:scale-[1.02] active:scale-[0.97] transition-transform"
            >
              Request a Quote <ArrowRight className="ml-2" size={16} />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductDetail;
