import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

const Products = () => {
  return (
    <main className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-foreground mb-4">Our Products</h1>
        <p className="font-body text-lg text-muted-foreground mb-12 max-w-2xl">
          We trade in four core product categories. Each is sourced, tested, and delivered to meet the highest industry standards.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <ProductCard
              key={p.slug}
              title={p.title}
              description={p.shortDescription}
              image={p.image}
              slug={p.slug}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Products;
