import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";
import ContactSection from "@/components/ContactSection";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServicesSection />
      <TestimonialsSection />
      <PricingSection />
      <ContactSection />
      <WhatsAppButton />
      
      {/* Footer */}
      <footer className="bg-deep-clean text-white py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Sparkling Clean Services</h3>
          <p className="text-white/80 mb-6">
            Professional housekeeping and cleaning services you can trust
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-8">
            <span className="text-white/90">(555) 123-4567</span>
            <span className="text-white/90">info@sparklingclean.com</span>
            <span className="text-white/90">Available 24/7</span>
          </div>
          <div className="border-t border-white/20 pt-6">
            <p className="text-white/60 text-sm">
              © 2024 Sparkling Clean Services. All rights reserved. Licensed, Bonded & Insured.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
