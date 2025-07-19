import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const openWhatsApp = () => {
    const message = "Hi! I'm interested in your cleaning services. Can you provide more information?";
    const phoneNumber = "+1234567890"; // Replace with your WhatsApp business number
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    setIsExpanded(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
      {/* Expanded Message */}
      {isExpanded && (
        <div className="bg-card shadow-hover rounded-lg p-4 max-w-xs animate-scale-in border border-border">
          <div className="flex justify-between items-start mb-3">
            <h4 className="font-semibold text-foreground">Need Help?</h4>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsExpanded(false)}
              className="h-6 w-6 text-muted-foreground hover:text-foreground"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mb-4">
            Get instant quotes and answers via WhatsApp!
          </p>
          <Button
            onClick={openWhatsApp}
            className="w-full bg-clean-green hover:bg-clean-green/90 text-white font-medium"
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            Start Chat
          </Button>
        </div>
      )}

      {/* Main WhatsApp Button */}
      <Button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-16 h-16 rounded-full bg-clean-green hover:bg-clean-green/90 text-white shadow-hover transition-all duration-300 hover:scale-110 animate-pulse"
        size="icon"
      >
        <MessageCircle className="w-8 h-8" />
      </Button>
    </div>
  );
};

export default WhatsAppButton;