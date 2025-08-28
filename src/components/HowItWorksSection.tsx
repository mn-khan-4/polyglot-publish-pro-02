import { Upload, Globe, Rocket, Share, BarChart3 } from "lucide-react";

const steps = [
  {
    icon: Upload,
    title: "Upload",
    description: "Drag & drop your PDFs, eBooks, or videos.",
    number: "01"
  },
  {
    icon: Globe,
    title: "Choose Languages",
    description: "Select which ones you want to support.",
    number: "02"
  },
  {
    icon: Rocket,
    title: "Publish",
    description: "Auto-syncs to your branded mobile app.",
    number: "03"
  },
  {
    icon: Share,
    title: "Share & Monetize",
    description: "Distribute via QR, app, or direct link.",
    number: "04"
  },
  {
    icon: BarChart3,
    title: "Analyze",
    description: "Insights on engagement, revenue, and preferred languages.",
    number: "05"
  }
];

const HowItWorksSection = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,hsl(var(--primary-light))_25%,hsl(var(--primary-light))_50%,transparent_50%,transparent_75%,hsl(var(--primary-light))_75%)] opacity-5 bg-[length:20px_20px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Five simple steps to transform your content into a global, multilingual experience
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Desktop Layout */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-5 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="text-center group">
                  {/* Step Number */}
                  <div className="relative mb-6">
                    <div className="w-16 h-16 mx-auto rounded-full bg-gradient-hero flex items-center justify-center text-white font-bold text-lg shadow-large group-hover:shadow-glow transition-all duration-300 group-hover:scale-110">
                      {step.number}
                    </div>
                    {index < steps.length - 1 && (
                      <div className="absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary via-primary-light to-primary opacity-30 hidden lg:block" 
                           style={{ width: 'calc(100% - 2rem)' }} />
                    )}
                  </div>

                  {/* Icon */}
                  <div className="mb-4">
                    <div className="w-12 h-12 mx-auto rounded-lg bg-gradient-card flex items-center justify-center shadow-soft group-hover:shadow-medium transition-all duration-300">
                      <step.icon className="h-6 w-6 text-primary group-hover:text-primary-glow transition-colors" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="lg:hidden space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start gap-6 p-6 bg-gradient-card rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 group">
                {/* Step Number & Icon */}
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-full bg-gradient-hero flex items-center justify-center text-white font-bold mb-3 shadow-large group-hover:shadow-glow transition-all duration-300">
                    {step.number}
                  </div>
                  <div className="w-10 h-10 mx-auto rounded-lg bg-background flex items-center justify-center shadow-soft">
                    <step.icon className="h-5 w-5 text-primary" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 rounded-full text-primary font-medium">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse-soft" />
            <span>Ready in under 5 minutes</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;