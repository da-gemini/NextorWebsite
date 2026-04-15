import { Link } from "react-router-dom";
import { ArrowRight, Users, TrendingUp, MapPin } from "lucide-react";
import PageTransition from "@/components/PageTransition";
import { siteConfig } from "@/config/site";

const statIcons = [Users, TrendingUp, MapPin];

const About = () => {
  const { about } = siteConfig;

  return (
    <PageTransition>
      <main className="py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-8">
            <h1 className="text-foreground mb-4">{about.heading}</h1>
            {about.paragraphs.map((text, i) => (
              <p key={i} className={`font-body text-muted-foreground leading-relaxed mb-3 ${i === 0 ? "text-sm" : "text-xs"}`}>
                {text}
              </p>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
            {about.stats.map((stat, i) => {
              const Icon = statIcons[i];
              return (
                <div key={stat.label} className="bg-card border border-border rounded-xl p-5 flex items-center gap-3 hover:border-primary/20 transition-colors">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Icon className="text-primary" size={18} />
                  </div>
                  <div>
                    <div className="font-display font-bold text-xl text-foreground">{stat.value}</div>
                    <div className="font-body text-xs text-muted-foreground">{stat.label}</div>
                  </div>
                </div>
              );
            })}
          </div>

          <Link
            to="/contact"
            className="group inline-flex items-center h-10 px-6 rounded-lg bg-primary text-primary-foreground font-body font-medium text-sm shadow-md hover:shadow-lg hover:bg-primary/90 active:scale-[0.97] transition-all"
          >
            Get in Touch <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={15} />
          </Link>
        </div>
      </main>
    </PageTransition>
  );
};

export default About;
