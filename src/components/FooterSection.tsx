import { Button } from "@/components/ui/button";
import { Quote, ArrowRight, Play } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="relative bg-gradient-to-br from-primary via-primary-glow to-accent text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(255,255,255,0.1)_0%,transparent_50%)] opacity-30" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.1)_0%,transparent_50%)] opacity-30" />
      
      <div className="container mx-auto px-4 py-24 relative z-10">
        {/* Testimonial Section */}
        <div className="text-center mb-20">
          <div className="max-w-4xl mx-auto">
            <Quote className="h-12 w-12 mx-auto mb-8 opacity-60" />
            <blockquote className="text-2xl md:text-3xl font-light mb-8 leading-relaxed">
              "Using PolyMedia, our NGO reduced localization time by 90% and reached 
              audiences in 15 new languages within our first month."
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-lg font-bold">JS</span>
              </div>
              <div className="text-left">
                <div className="font-semibold">Dr. Jennifer Smith</div>
                <div className="text-white/80">Director of Global Outreach, EduGlobal NGO</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Go Global?
          </h2>
          <p className="text-xl mb-12 opacity-90 max-w-3xl mx-auto">
            Join thousands of creators and organizations who are reaching global audiences 
            in their native languages. Start today or book a demo.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              variant="outline" 
              size="xl" 
              className="bg-white/20 border-white/30 text-white hover:bg-white hover:text-primary backdrop-blur-sm group"
            >
              Get Started Free
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="ghost" 
              size="xl" 
              className="text-white hover:bg-white/20 group"
            >
              <Play className="mr-2 h-5 w-5" />
              Request a Demo
            </Button>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="text-center border-t border-white/20 pt-12">
          <div className="flex flex-wrap justify-center items-center gap-8 mb-8">
            <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm">
              <div className="w-2 h-2 bg-white rounded-full" />
              <span className="text-sm">Enterprise Security</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm">
              <div className="w-2 h-2 bg-white rounded-full" />
              <span className="text-sm">GDPR Compliant</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm">
              <div className="w-2 h-2 bg-white rounded-full" />
              <span className="text-sm">99.9% Uptime SLA</span>
            </div>
          </div>

          {/* Footer Links */}
          <div className="flex flex-wrap justify-center gap-8 text-sm opacity-80 mb-8">
            <a href="#" className="hover:opacity-100 transition-opacity">Privacy Policy</a>
            <a href="#" className="hover:opacity-100 transition-opacity">Terms of Service</a>
            <a href="#" className="hover:opacity-100 transition-opacity">Documentation</a>
            <a href="#" className="hover:opacity-100 transition-opacity">Support</a>
            <a href="#" className="hover:opacity-100 transition-opacity">Contact</a>
          </div>

          {/* Copyright */}
          <div className="text-center text-sm opacity-60">
            <p>© 2024 PolyMedia. All rights reserved. Built for a multilingual world.</p>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
    </footer>
  );
};

export default FooterSection;