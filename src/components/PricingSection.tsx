import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, MessageCircle, Star } from "lucide-react";

const pricingPlans = [
  {
    name: "Basic Clean",
    price: "$80",
    frequency: "per visit",
    description: "Perfect for regular maintenance cleaning",
    features: [
      "Vacuum all floors",
      "Dust surfaces & furniture",
      "Clean bathrooms",
      "Kitchen cleaning",
      "Empty trash bins",
      "Basic organization"
    ],
    popular: false,
    buttonText: "Get Quote"
  },
  {
    name: "Deep Clean",
    price: "$150",
    frequency: "per visit",
    description: "Comprehensive cleaning for maximum freshness",
    features: [
      "Everything in Basic Clean",
      "Inside appliance cleaning",
      "Baseboards & window sills",
      "Light fixture cleaning",
      "Detailed bathroom scrub",
      "Cabinet front cleaning",
      "Floor mopping & sanitizing"
    ],
    popular: true,
    buttonText: "Most Popular"
  },
  {
    name: "Premium Service",
    price: "$220",
    frequency: "per visit",
    description: "Ultimate cleaning experience with extras",
    features: [
      "Everything in Deep Clean",
      "Interior window cleaning",
      "Oven & refrigerator deep clean",
      "Laundry folding",
      "Plant watering",
      "Eco-friendly products",
      "Same-day availability",
      "100% satisfaction guarantee"
    ],
    popular: false,
    buttonText: "Choose Premium"
  }
];

const PricingSection = () => {
  const openWhatsApp = (planName: string) => {
    const message = `Hi! I'm interested in the ${planName} cleaning service. Can you provide more details and schedule a visit?`;
    const phoneNumber = "+1234567890"; // Replace with your WhatsApp business number
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Transparent Pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            No hidden fees, no surprises. Choose the cleaning package that fits your needs and budget. 
            All prices include supplies and equipment.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {pricingPlans.map((plan, index) => (
            <Card 
              key={plan.name}
              className={`relative group bg-gradient-card shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-2 animate-slide-up ${
                plan.popular ? 'ring-2 ring-primary scale-105' : ''
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-accent text-white px-6 py-2 rounded-full text-sm font-bold flex items-center gap-2">
                  <Star className="w-4 h-4 fill-current" />
                  Most Popular
                </div>
              )}
              
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl font-bold text-foreground mb-2">
                  {plan.name}
                </CardTitle>
                <div className="mb-4">
                  <span className="text-4xl md:text-5xl font-bold text-primary">
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground ml-2">
                    {plan.frequency}
                  </span>
                </div>
                <p className="text-muted-foreground">
                  {plan.description}
                </p>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-clean-green mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button 
                  onClick={() => openWhatsApp(plan.name)}
                  className={`w-full py-6 text-lg font-semibold transition-all duration-300 hover:scale-105 ${
                    plan.popular 
                      ? 'bg-gradient-accent hover:opacity-90 text-white shadow-hover' 
                      : 'bg-primary hover:bg-primary/90 text-white'
                  }`}
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  {plan.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="bg-soft-mint/50 rounded-2xl p-8 md:p-12 text-center animate-fade-in">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Need a Custom Quote?
          </h3>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Every home is unique. Contact us for a personalized quote based on your specific needs, 
            home size, and frequency preferences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => openWhatsApp("Custom Quote")}
              size="lg"
              className="bg-clean-green hover:bg-clean-green/90 text-white px-8 py-6 text-lg font-semibold shadow-hover transition-all duration-300 hover:scale-105"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Get Custom Quote
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-6 text-lg font-semibold transition-all duration-300"
            >
              Schedule Free Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;