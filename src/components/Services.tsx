import { GraduationCap, Heart, Home, Leaf } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import educationImage from '@/assets/education-service.jpg';
import healthcareImage from '@/assets/healthcare-service.jpg';
import communityImage from '@/assets/community-service.jpg';

const Services = () => {
  const services = [
    {
      icon: GraduationCap,
      title: "Education Programs",
      description: "Providing quality education, adult literacy programs, and skill development workshops to empower communities through knowledge.",
      image: educationImage,
      features: ["Primary & Secondary Education", "Adult Literacy Classes", "Vocational Training", "Scholarship Programs"]
    },
    {
      icon: Heart,
      title: "Healthcare Services",
      description: "Delivering essential healthcare services, health awareness programs, and medical camps to ensure community wellness.",
      image: healthcareImage,
      features: ["Mobile Health Clinics", "Health Awareness Camps", "Mother & Child Care", "Emergency Medical Aid"]
    },
    {
      icon: Home,
      title: "Community Development",
      description: "Building infrastructure, promoting economic opportunities, and strengthening community bonds for sustainable growth.",
      image: communityImage,
      features: ["Infrastructure Development", "Microfinance Programs", "Women Empowerment", "Community Centers"]
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We provide comprehensive services designed to address the diverse needs of our communities and create lasting positive impact.
            </p>
          </div>

          {/* Services Grid */}
          <div className="space-y-12">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300">
                <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  {/* Image */}
                  <div className={`relative h-64 lg:h-auto ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent"></div>
                  </div>

                  {/* Content */}
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <CardHeader className="p-0 mb-6">
                      <div className="flex items-center mb-4">
                        <div className="p-3 bg-primary/10 rounded-full mr-4">
                          <service.icon className="h-8 w-8 text-primary" />
                        </div>
                        <h3 className="text-2xl font-bold text-foreground">{service.title}</h3>
                      </div>
                      <p className="text-muted-foreground text-lg leading-relaxed">
                        {service.description}
                      </p>
                    </CardHeader>

                    <CardContent className="p-0">
                      <div className="mb-6">
                        <h4 className="font-semibold text-foreground mb-3">Key Features:</h4>
                        <ul className="space-y-2">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-muted-foreground">
                              <Leaf className="h-4 w-4 text-secondary mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <Button variant="default" className="bg-gradient-primary hover:shadow-medium transition-all duration-300">
                        Learn More
                      </Button>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;