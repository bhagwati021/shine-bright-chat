import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, Star } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const openWhatsApp = () => {
    const message = "Hi! I'm interested in SK Facility cleaning services. Can you provide more information?";
    const phoneNumber = "+1234567890"; // Replace with your WhatsApp business number
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-20">
        <div className="animate-fade-in">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Star className="w-6 h-6 text-yellow-400 fill-current" />
            <Star className="w-6 h-6 text-yellow-400 fill-current" />
            <Star className="w-6 h-6 text-yellow-400 fill-current" />
            <Star className="w-6 h-6 text-yellow-400 fill-current" />
            <Star className="w-6 h-6 text-yellow-400 fill-current" />
            <span className="text-white/90 ml-2 font-medium">5.0 • 500+ Happy Clients</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            SK Facility
            <span className="bg-gradient-accent bg-clip-text text-transparent block">
              Professional Cleaning
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Professional housekeeping and cleaning services that transform your space into a pristine sanctuary. 
            Trusted by hundreds of satisfied customers.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              onClick={openWhatsApp}
              className="bg-clean-green hover:bg-clean-green/90 text-white px-8 py-6 text-lg font-semibold shadow-hover transition-all duration-300 hover:scale-105"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Get Free Quote via WhatsApp
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-6 text-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now: (555) 123-4567
            </Button>
          </div>
          
          <div className="mt-12 flex items-center justify-center gap-8 text-white/80">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">24/7</div>
              <div className="text-sm">Available</div>
            </div>
            <div className="w-px h-12 bg-white/30" />
            <div className="text-center">
              <div className="text-2xl font-bold text-white">Insured</div>
              <div className="text-sm">& Bonded</div>
            </div>
            <div className="w-px h-12 bg-white/30" />
            <div className="text-center">
              <div className="text-2xl font-bold text-white">Eco-Friendly</div>
              <div className="text-sm">Products</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-clean-green/20 rounded-full blur-xl animate-pulse delay-1000" />
    </section>
  );
};

export default HeroSection;