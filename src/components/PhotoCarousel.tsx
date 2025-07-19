import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const PhotoCarousel = () => {
  // Dummy photos of cleaning locations
  const portfolioImages = [
    {
      id: 1,
      title: "Office Complex - Downtown",
      description: "Complete office cleaning and sanitization",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=500&h=300&fit=crop"
    },
    {
      id: 2,
      title: "Residential Home - Suburbs",
      description: "Deep house cleaning and organization",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=500&h=300&fit=crop"
    },
    {
      id: 3,
      title: "Medical Facility",
      description: "Specialized medical facility cleaning",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=500&h=300&fit=crop"
    },
    {
      id: 4,
      title: "Restaurant Kitchen",
      description: "Commercial kitchen deep cleaning",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&h=300&fit=crop"
    },
    {
      id: 5,
      title: "Hotel Rooms",
      description: "Hospitality cleaning services",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=300&fit=crop"
    },
    {
      id: 6,
      title: "Retail Store",
      description: "Retail space maintenance cleaning",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500&h=300&fit=crop"
    }
  ];

  return (
    <section id="portfolio" className="py-20 px-6 bg-gradient-to-b from-white to-blue-50/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-deep-clean mb-6">
            Our Work Portfolio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Take a look at some of the locations where SK Facility has provided exceptional cleaning services
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {portfolioImages.map((item) => (
              <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3">
                <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                      <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                      <p className="text-sm text-white/90">{item.description}</p>
                    </div>
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </Carousel>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Ready to see your space transformed?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <span className="text-2xl font-bold text-clean-green">📞 (555) 123-4567</span>
            <span className="text-gray-400">•</span>
            <span className="text-lg text-gray-600">Available 24/7 for Emergency Cleaning</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhotoCarousel;