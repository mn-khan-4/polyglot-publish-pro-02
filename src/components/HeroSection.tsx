import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-primary-light/20 to-primary-light/40 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--primary-light))_0%,transparent_50%)] opacity-30" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--accent-light))_0%,transparent_50%)] opacity-20" />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Logo */}
          <div className="mb-8 animate-fade-in-up">
            <img 
              src="/lovable-uploads/4be9d38e-aa53-4c2e-84d5-eee8169cd1b1.png" 
              alt="PolyMedia Logo" 
              className="h-20 mx-auto animate-float"
            />
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent animate-fade-in-up">
            Publish Once.
            <br />
            Reach Everyone.
            <br />
            <span className="text-foreground">In Every Language.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in-up">
            Upload PDFs, eBooks, or videos—PolyMedia instantly converts them into 
            <span className="text-primary font-semibold"> multilingual audio and subtitles</span>, 
            and syncs them to your branded mobile app.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-fade-in-up">
            <Button variant="hero" size="xl" className="group">
              Start Your Free Vault
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="xl" className="group border-2 border-primary hover:bg-primary hover:text-primary-foreground">
              <Play className="mr-2 h-5 w-5" />
              Schedule a Partner Demo
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-muted-foreground animate-fade-in-up">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse-soft" />
              <span>500+ Languages Supported</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse-soft" />
              <span>White-Label Ready</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary-glow rounded-full animate-pulse-soft" />
              <span>Enterprise Grade</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
    </section>
  );
};

export default HeroSection;