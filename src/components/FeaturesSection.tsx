import { Upload, Globe, Smartphone, TrendingUp } from "lucide-react";
import uploadImage from "@/assets/upload-files.jpg";
import multilingualImage from "@/assets/multilingual-conversion.jpg";
import brandedAppImage from "@/assets/branded-app.jpg";
import analyticsImage from "@/assets/analytics-dashboard.jpg";

const features = [
  {
    icon: Upload,
    title: "One Upload. Multiple Formats.",
    description: "PDFs and eBooks become audio; videos get subtitles and optional dubs.",
    image: uploadImage,
    gradient: "from-primary to-primary-glow"
  },
  {
    icon: Globe,
    title: "Language Coverage Made Easy.",
    description: "Select target languages, and PolyMedia does the rest with voice-quality precision.",
    image: multilingualImage,
    gradient: "from-accent to-orange-500"
  },
  {
    icon: Smartphone,
    title: "White-Label Distribution.",
    description: "Your branding, your app. QR codes and app listings auto-generate on publish.",
    image: brandedAppImage,
    gradient: "from-primary-glow to-primary"
  },
  {
    icon: TrendingUp,
    title: "Monetization & Analytics in One Place.",
    description: "Choose Free, Pay-per-Download, or Subscription options. Track downloads, listens, revenue, and languages.",
    image: analyticsImage,
    gradient: "from-purple-500 to-accent"
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-24 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Feature Highlights
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to transform your content into a global, multilingual experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-background rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-2 border border-border/50"
            >
              {/* Feature Image */}
              <div className="relative mb-6 rounded-xl overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-tr ${feature.gradient} opacity-20 group-hover:opacity-30 transition-opacity`} />
              </div>

              {/* Feature Icon */}
              <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${feature.gradient} mb-4`}>
                <feature.icon className="h-6 w-6 text-white" />
              </div>

              {/* Feature Content */}
              <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary/30 transition-colors pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Additional Global Reach Section */}
        <div className="mt-20 text-center bg-gradient-to-r from-primary/5 via-primary-light/10 to-accent/5 rounded-3xl p-12 border border-primary/10">
          <h3 className="text-3xl font-bold mb-4 text-foreground">
            Global Audience. Local Feel.
          </h3>
          <p className="text-xl text-muted-foreground mb-8 max-w-4xl mx-auto">
            Share content via app, web link, or QR—accessible offline, anytime, anywhere. 
            Transform your content into a truly global experience that feels personal to every user.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2 px-4 py-2 bg-background/80 rounded-full">
              <div className="w-3 h-3 bg-primary rounded-full" />
              <span className="font-medium">QR Code Distribution</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-background/80 rounded-full">
              <div className="w-3 h-3 bg-accent rounded-full" />
              <span className="font-medium">Offline Access</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-background/80 rounded-full">
              <div className="w-3 h-3 bg-primary-glow rounded-full" />
              <span className="font-medium">Cross-Platform</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;