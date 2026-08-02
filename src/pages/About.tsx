import { Link } from "react-router-dom";
import { ArrowRight, Compass } from "lucide-react";
import PageTransition from "@/components/PageTransition";
import { siteConfig } from "@/config/site";

const About = () => {
  const { about, sourcing } = siteConfig;

  return (
    <PageTransition>
      <main className="py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-8">
            <h1 className="text-foreground mb-2">{about.heading}</h1>
            <p className="font-display text-base text-primary italic mb-5">{about.subheading}</p>
            {about.paragraphs.map((text, i) => (
              <p key={i} className="font-body text-sm text-muted-foreground leading-relaxed mb-3">
                {text}
              </p>
            ))}
          </div>

          {/* Mission */}
          <div className="bg-primary rounded-2xl p-7 md:p-9 mb-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-56 h-56 bg-accent/15 rounded-full blur-[70px] -translate-y-1/2 translate-x-1/3" />
            <h2 className="text-primary-foreground mb-2 relative z-10">{about.mission.heading}</h2>
            <p className="font-body text-sm text-primary-foreground/85 leading-relaxed max-w-2xl relative z-10">
              {about.mission.text}
            </p>
          </div>

          {/* Looking for something else */}
          <div className="bg-card border border-border rounded-2xl p-7 md:p-9 mb-8">
            <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
              <Compass className="text-primary" size={18} />
            </div>
            <h2 className="text-foreground mb-3">{sourcing.heading}</h2>
            <div className="max-w-2xl space-y-3 mb-4">
              {sourcing.paragraphs.map((text, i) => (
                <p key={i} className="font-body text-sm text-muted-foreground leading-relaxed">
                  {text}
                </p>
              ))}
            </div>
            <p className="font-body text-sm font-medium text-foreground max-w-2xl">{sourcing.closing}</p>
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
