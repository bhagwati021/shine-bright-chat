import { Button } from "@/components/ui/button";
import { Menu, Phone } from "lucide-react";

const Header = () => {
  const openWhatsApp = () => {
    const message = "Hi! I'm interested in SK Facility cleaning services. Can you provide more information?";
    const phoneNumber = "+1234567890";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-clean-green rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">SK</span>
          </div>
          <div>
            <h1 className="text-xl font-bold text-deep-clean">SK Facility</h1>
            <p className="text-sm text-gray-600">Professional Cleaning Services</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-gray-700 hover:text-clean-green transition-colors">Services</a>
          <a href="#portfolio" className="text-gray-700 hover:text-clean-green transition-colors">Portfolio</a>
          <a href="#testimonials" className="text-gray-700 hover:text-clean-green transition-colors">Reviews</a>
          <a href="#pricing" className="text-gray-700 hover:text-clean-green transition-colors">Pricing</a>
          <a href="#contact" className="text-gray-700 hover:text-clean-green transition-colors">Contact</a>
        </nav>

        {/* Contact Button */}
        <div className="flex items-center gap-4">
          <Button onClick={openWhatsApp} className="bg-clean-green hover:bg-clean-green/90">
            <Phone className="w-4 h-4 mr-2" />
            Call Now
          </Button>
          <Button variant="ghost" size="sm" className="md:hidden">
            <Menu className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;