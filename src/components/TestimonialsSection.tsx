import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "Downtown, City",
    rating: 5,
    text: "Absolutely amazing service! They transformed my home into a sparkling clean sanctuary. The attention to detail is incredible, and they use eco-friendly products which I love.",
    service: "Weekly Residential Cleaning"
  },
  {
    name: "Michael Chen",
    location: "Business District",
    rating: 5,
    text: "Professional, reliable, and thorough. Our office has never looked better. The team is always punctual and respectful of our business environment.",
    service: "Commercial Office Cleaning"
  },
  {
    name: "Emily Rodriguez",
    location: "Suburbia Heights",
    rating: 5,
    text: "I was amazed at how clean they got my house after our renovation. They removed all the construction dust and made everything spotless. Highly recommend!",
    service: "Post-Construction Deep Clean"
  },
  {
    name: "David Thompson",
    location: "Riverside District",
    rating: 5,
    text: "The deep cleaning service exceeded my expectations. Every corner of my home is now pristine. The team is professional, friendly, and incredibly efficient.",
    service: "Deep Cleaning Service"
  },
  {
    name: "Lisa Wang",
    location: "Green Valley",
    rating: 5,
    text: "I love that they use eco-friendly products. My family feels safe, and the house smells fresh and clean. Their regular maintenance service is fantastic!",
    service: "Eco-Friendly Regular Cleaning"
  },
  {
    name: "Robert Martinez",
    location: "City Center",
    rating: 5,
    text: "Outstanding service! They helped me prepare my apartment for moving out, and I got my full security deposit back. Their attention to detail is unmatched.",
    service: "Move-Out Cleaning"
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <section className="py-20 px-6 bg-soft-mint/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers 
            have to say about our cleaning services.
          </p>
        </div>

        <div className="relative">
          {/* Main Testimonial Display */}
          <div className="bg-card rounded-2xl shadow-card p-8 md:p-12 mb-8 animate-scale-in">
            <Quote className="w-12 h-12 text-primary/20 mb-6" />
            
            <div className="mb-6">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-lg md:text-xl text-foreground leading-relaxed mb-6">
                "{testimonials[currentIndex].text}"
              </p>
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-xl font-bold text-foreground">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-muted-foreground">
                  {testimonials[currentIndex].location}
                </p>
                <p className="text-sm text-primary font-medium mt-1">
                  {testimonials[currentIndex].service}
                </p>
              </div>
              
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prevTestimonial}
                  className="rounded-full hover:bg-primary hover:text-white transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={nextTestimonial}
                  className="rounded-full hover:bg-primary hover:text-white transition-colors"
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-primary scale-125"
                    : "bg-muted hover:bg-primary/50"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          {[
            { number: "500+", label: "Happy Clients" },
            { number: "5.0", label: "Average Rating" },
            { number: "3", label: "Years Experience" },
            { number: "24/7", label: "Available" },
          ].map((stat, index) => (
            <div key={stat.label} className="text-center animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;