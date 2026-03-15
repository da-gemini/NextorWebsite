import { Link } from "react-router-dom";
import { ArrowRight, Users, TrendingUp, MapPin } from "lucide-react";
import PageTransition from "@/components/PageTransition";
import { siteConfig } from "@/config/site";

const statIcons = [Users, TrendingUp, MapPin];

const About = () => {
  const { about } = siteConfig;

  return (
    <PageTransition>
      <main className="py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Content */}
          <div className="max-w-3xl mb-10">
            <h1 className="text-foreground mb-5">{about.heading}</h1>
            {about.paragraphs.map((text, i) => (
              <p key={i} className={`font-body text-muted-foreground leading-relaxed mb-4 ${i === 0 ? "text-base" : "text-sm"}`}>
                {text}
              </p>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            {about.stats.map((stat, i) => {
              const Icon = statIcons[i];
              return (
                <div key={stat.label} className="bg-card border border-border rounded-xl p-6 flex items-center gap-4 hover:border-primary/20 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Icon className="text-primary" size={20} />
                  </div>
                  <div>
                    <div className="font-display font-bold text-2xl text-foreground">{stat.value}</div>
                    <div className="font-body text-xs text-muted-foreground">{stat.label}</div>
                  </div>
                </div>
              );
            })}
          </div>

          <Link
            to="/contact"
            className="group inline-flex items-center h-11 px-7 rounded-lg bg-primary text-primary-foreground font-body font-medium text-sm shadow-md hover:shadow-lg hover:bg-primary/90 active:scale-[0.97] transition-all duration-200"
          >
            Get in Touch <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
          </Link>
        </div>
      </main>
    </PageTransition>
  );
};

export default About;
