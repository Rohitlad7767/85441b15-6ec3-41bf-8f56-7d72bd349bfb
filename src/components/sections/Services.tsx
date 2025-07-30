import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, TrendingUp, Shield, DollarSign } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: TrendingUp,
      title: "Financial growth",
      description: "Achieving financial growth requires strategic planning, efficient resource use, and a focus on expanding markets or diversifying products.",
      color: "text-secondary"
    },
    {
      icon: DollarSign,
      title: "Business solutions", 
      description: "Cash flow visibility is the ability to clearly understand and monitor the movement of funds in and out of a business, providing real-time.",
      color: "text-accent"
    },
    {
      icon: Shield,
      title: "Secure money",
      description: "With today's increasing reliance on digital transactions and online banking, the need for secure money practices has never been greater.",
      color: "text-primary"
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/20 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 left-20 w-48 h-48 bg-accent/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center space-y-6 mb-16">
          <Badge variant="secondary" className="text-sm">
            Services
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold leading-tight max-w-4xl mx-auto">
            Accelerating success with{" "}
            <span className="gradient-primary bg-clip-text text-transparent">
              tailored consulting solutions
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We specialize in consulting solutions that support growth, improve operational 
            performance, and build a solid foundation for your business's future success.
          </p>
          <Button 
            variant="outline" 
            className="transition-smooth hover:shadow-primary"
          >
            View All Services
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-primary transition-smooth cursor-pointer border-border/50 bg-card/50 backdrop-blur-sm"
            >
              <CardContent className="p-8 space-y-6">
                <div className="relative h-48 rounded-2xl overflow-hidden mb-6">
                  <div className="absolute inset-0 gradient-secondary opacity-20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <service.icon className={`w-16 h-16 ${service.color}`} />
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-bold group-hover:text-primary transition-smooth">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4">
                  <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-primary"></div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-smooth" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;