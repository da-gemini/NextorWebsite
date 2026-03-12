import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Users, TrendingUp, MapPin } from "lucide-react";

const stats = [
  { icon: Users, value: "500+", label: "Clients Worldwide" },
  { icon: TrendingUp, value: "30+", label: "Countries Served" },
  { icon: MapPin, value: "10+", label: "Years Experience" },
];

const About = () => {
  return (
    <main className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="max-w-3xl"
        >
          <h1 className="text-foreground mb-5">About Nextor</h1>
          <p className="font-body text-base text-muted-foreground leading-relaxed mb-5">
            Nextor is a trading company specializing in the sourcing and export of essential commodities — cotton tissues, guar gum, rice, and honey. We connect quality producers with global buyers who demand consistency, traceability, and competitive pricing.
          </p>
          <p className="font-body text-sm text-muted-foreground leading-relaxed mb-5">
            Founded with a commitment to transparency, we work directly with certified farms, processing units, and manufacturing facilities. Every product we trade comes with full documentation — from origin certificates to laboratory test reports.
          </p>
          <p className="font-body text-sm text-muted-foreground leading-relaxed mb-5">
            Our network spans over 30 countries. Whether you need a single container or a long-term supply agreement, our logistics and compliance teams ensure smooth, reliable delivery to your door.
          </p>
          <p className="font-body text-sm text-muted-foreground leading-relaxed mb-8">
            We believe in building long-term partnerships, not one-time transactions. That means we invest in understanding your requirements, your industry standards, and your timelines — so you can focus on your business while we handle the supply.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="bg-card border border-border rounded-xl p-6 flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <stat.icon className="text-primary" size={20} />
              </div>
              <div>
                <div className="font-display font-bold text-2xl text-foreground">{stat.value}</div>
                <div className="font-body text-xs text-muted-foreground">{stat.label}</div>
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.25 }}
        >
          <Link
            to="/contact"
            className="group inline-flex items-center h-11 px-7 rounded-lg bg-primary text-primary-foreground font-body font-medium text-sm shadow-md hover:shadow-lg hover:bg-primary/90 active:scale-[0.97] transition-all duration-200"
          >
            Get in Touch <ArrowRight className="ml-2 group-hover:translate-x-0.5 transition-transform" size={16} />
          </Link>
        </motion.div>
      </div>
    </main>
  );
};

export default About;
