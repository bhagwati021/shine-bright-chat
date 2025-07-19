import { Card, CardContent } from "@/components/ui/card";
import { Home, Building2, Sparkles, Clock, Shield, Recycle } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Residential Cleaning",
    description: "Complete home cleaning including kitchens, bathrooms, bedrooms, and living areas. Regular or one-time service.",
    features: ["Deep cleaning", "Regular maintenance", "Move-in/out cleaning"]
  },
  {
    icon: Building2,
    title: "Commercial Cleaning",
    description: "Professional office and commercial space cleaning. Flexible scheduling to fit your business needs.",
    features: ["Office buildings", "Retail spaces", "Medical facilities"]
  },
  {
    icon: Sparkles,
    title: "Deep Cleaning",
    description: "Intensive cleaning service that reaches every corner. Perfect for seasonal cleaning or special occasions.",
    features: ["Appliance cleaning", "Baseboards & windows", "Detailed sanitization"]
  },
  {
    icon: Clock,
    title: "Regular Maintenance",
    description: "Scheduled cleaning services to keep your space consistently clean. Weekly, bi-weekly, or monthly options.",
    features: ["Flexible scheduling", "Consistent quality", "Trusted cleaners"]
  },
  {
    icon: Shield,
    title: "Post-Construction",
    description: "Specialized cleaning after renovations or construction. Remove dust, debris, and construction residue.",
    features: ["Construction cleanup", "Renovation cleaning", "Final touch-ups"]
  },
  {
    icon: Recycle,
    title: "Eco-Friendly Options",
    description: "Green cleaning solutions that are safe for your family and pets while being environmentally responsible.",
    features: ["Non-toxic products", "Biodegradable cleaners", "Sustainable practices"]
  }
];

const ServicesSection = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Cleaning Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From regular house cleaning to specialized deep cleaning, we offer comprehensive 
            services tailored to your specific needs and schedule.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className="group bg-gradient-card border-0 shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-2 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-accent rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
                
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-clean-green rounded-full" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;