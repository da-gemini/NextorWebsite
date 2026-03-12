import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface ProductCardProps {
  title: string;
  description: string;
  image: string;
  slug: string;
}

const ProductCard = ({ title, description, image, slug }: ProductCardProps) => {
  return (
    <Link to={`/products/${slug}`}>
      <motion.div
        whileHover="hover"
        className="relative aspect-[4/3] rounded-xl overflow-hidden group cursor-pointer"
      >
        <motion.img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
          variants={{
            hover: { scale: 1.05 },
          }}
          transition={{ type: "spring", duration: 0.4, bounce: 0 }}
        />
        <div className="absolute inset-0 bg-foreground/50 group-hover:bg-foreground/60 transition-colors" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
          <h3 className="font-display font-semibold text-2xl text-card mb-2">{title}</h3>
          <p className="font-body text-sm text-card/80 max-w-[200px]">{description}</p>
        </div>
      </motion.div>
    </Link>
  );
};

export default ProductCard;
