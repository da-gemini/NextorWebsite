import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const About = () => {
  return (
    <main className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-foreground mb-6">About Nextor</h1>
          <p className="font-body text-lg text-muted-foreground leading-relaxed mb-6">
            Nextor is a trading company specializing in the sourcing and export of essential commodities — cotton tissues, guar gum, rice, and honey. We connect quality producers with global buyers who demand consistency, traceability, and competitive pricing.
          </p>
          <p className="font-body text-muted-foreground leading-relaxed mb-6">
            Founded with a commitment to transparency, we work directly with certified farms, processing units, and manufacturing facilities. Every product we trade comes with full documentation — from origin certificates to laboratory test reports.
          </p>
          <p className="font-body text-muted-foreground leading-relaxed mb-6">
            Our network spans over 30 countries. Whether you need a single container or a long-term supply agreement, our logistics and compliance teams ensure smooth, reliable delivery to your door.
          </p>
          <p className="font-body text-muted-foreground leading-relaxed mb-10">
            We believe in building long-term partnerships, not one-time transactions. That means we invest in understanding your requirements, your industry standards, and your timelines — so you can focus on your business while we handle the supply.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center h-11 px-8 rounded-lg bg-primary text-primary-foreground font-body font-medium text-sm shadow-sm hover:scale-[1.02] active:scale-[0.97] transition-transform"
          >
            Get in Touch <ArrowRight className="ml-2" size={16} />
          </Link>
        </div>
      </div>
    </main>
  );
};

export default About;
