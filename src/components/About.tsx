import { Users, Target, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const values = [
    {
      icon: Users,
      title: "Community First",
      description: "We believe in the power of collective action and community-driven solutions."
    },
    {
      icon: Target,
      title: "Focused Impact",
      description: "Every initiative is designed with clear goals and measurable outcomes."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for the highest standards in all our programs and services."
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              About Our Organization
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Mithila Samaj Bikash Manch has been working tirelessly for the upliftment of communities in the Mithila region through sustainable development programs.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Our Story</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 2008, Mithila Samaj Bikash Manch emerged from a vision to create lasting positive change in rural communities across the Mithila region. We recognized that sustainable development requires a holistic approach that addresses education, healthcare, economic empowerment, and environmental conservation.
                </p>
                <p>
                  Over the years, we have grown from a small group of dedicated volunteers to a comprehensive organization working across multiple districts. Our programs have touched the lives of thousands of families, helping them build better futures for themselves and their communities.
                </p>
                <p>
                  Today, we continue to innovate and expand our reach, always staying true to our core mission of empowering communities through collaborative action and sustainable solutions.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Our Mission</h3>
              <div className="bg-gradient-card p-6 rounded-lg shadow-soft">
                <p className="text-lg text-foreground mb-4">
                  "To empower rural communities in the Mithila region through comprehensive development programs that promote education, health, economic growth, and environmental sustainability."
                </p>
                <div className="border-l-4 border-primary pl-4">
                  <p className="text-muted-foreground italic">
                    We envision a future where every individual in our region has access to quality education, healthcare, and economic opportunities, living in harmony with their environment.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Values */}
          <div>
            <h3 className="text-2xl font-bold text-foreground text-center mb-8">Our Core Values</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="bg-gradient-card border-0 shadow-soft hover:shadow-medium transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="flex justify-center mb-4">
                      <div className="p-3 bg-primary/10 rounded-full">
                        <value.icon className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                    <h4 className="text-xl font-semibold text-foreground mb-3">{value.title}</h4>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;