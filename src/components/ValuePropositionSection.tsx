import { Check, Zap, Shield, Briefcase, Target } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "You build once—reach multilingual learners instantly.",
    description: "No need to manually create content for each language or market."
  },
  {
    icon: Shield,
    title: "No external dubbing or subtitling needed.",
    description: "Our AI handles all the heavy lifting with professional-quality results."
  },
  {
    icon: Briefcase,
    title: "Share full control with your brand front and center.",
    description: "White-label solution that maintains your brand identity throughout."
  },
  {
    icon: Target,
    title: "Smarter than a course platform, broader than an SDK.",
    description: "Purpose-built for content creators who think globally."
  }
];

const ValuePropositionSection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Why PolyMedia?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Transform your content strategy with a platform designed for the global, multilingual world
            </p>
          </div>

          {/* Main Value Props Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group p-8 bg-background/80 backdrop-blur-sm rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 border border-border/50"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 p-3 rounded-lg bg-gradient-hero shadow-medium group-hover:shadow-glow transition-all duration-300">
                    <benefit.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Central Value Statement */}
          <div className="text-center bg-gradient-to-r from-primary/10 via-primary-light/20 to-accent/10 rounded-3xl p-12 border border-primary/20 shadow-large">
            <div className="max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 rounded-full text-primary font-medium mb-6">
                <Check className="h-4 w-4" />
                <span>One Dashboard, Global Impact</span>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Stop thinking in markets.
                <br />
                <span className="bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
                  Start thinking in languages.
                </span>
              </h3>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                PolyMedia doesn't just translate your content—it transforms how you think about 
                global distribution. One upload, infinite possibilities.
              </p>

              {/* Feature Highlights */}
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-4">
                  <div className="text-2xl font-bold text-primary mb-2">500+</div>
                  <div className="text-sm text-muted-foreground">Languages Supported</div>
                </div>
                <div className="text-center p-4">
                  <div className="text-2xl font-bold text-accent mb-2">99.9%</div>
                  <div className="text-sm text-muted-foreground">Uptime Guarantee</div>
                </div>
                <div className="text-center p-4">
                  <div className="text-2xl font-bold text-primary-glow mb-2">24/7</div>
                  <div className="text-sm text-muted-foreground">Global Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuePropositionSection;