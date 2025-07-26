import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: "MITHILA SAMAJ BIKASH MANCH",
      subtitle: "EMPOWERING COMMUNITIES FOR SUSTAINABLE DEVELOPMENT",
      buttonText: "BECOME OUR MEMBER",
      buttonLink: "#contact"
    },
    {
      title: "KNOW",
      subtitle: "OUR VISION & GOALS",
      buttonText: "ABOUT US",
      buttonLink: "#about"
    },
    {
      title: "GET CONNECTED",
      subtitle: "TO OUR UPCOMING EVENTS",
      buttonText: "CONTACT US",
      buttonLink: "#contact"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center mt-20 md:mt-32">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-slate-900/70"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in tracking-wide">
            {slides[currentSlide].title}
          </h1>
          
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-8"></div>
          
          <h2 className="text-xl md:text-2xl mb-12 text-gray-200 animate-fade-in tracking-wider font-light">
            {slides[currentSlide].subtitle}
          </h2>
          
          <div className="animate-fade-in">
            <Button 
              size="lg" 
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg font-medium tracking-wide"
            >
              {slides[currentSlide].buttonText}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Slide Indicators */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? 'bg-orange-500' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;