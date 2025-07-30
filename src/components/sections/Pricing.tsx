import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Start-up",
      subtitle: "1 request at a time",
      price: "$599",
      period: "Per month.",
      features: [
        "Single page website designs",
        "Logo design", 
        "App design",
        "Slide decks",
        "Content calendar",
        "Social media graphics"
      ],
      popular: false
    },
    {
      name: "Mid-level",
      subtitle: "2 request at a time", 
      price: "$799",
      period: "Per month.",
      features: [
        "Single page website designs",
        "Logo design",
        "App design", 
        "Slide decks",
        "Content calendar",
        "Social media graphics",
        "Content calendar",
        "Social media graphics"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      subtitle: "3 request at a time",
      price: "$999", 
      period: "Per month.",
      features: [
        "Single page website designs",
        "Logo design",
        "App design",
        "Slide decks", 
        "Content calendar",
        "Social media graphics",
        "Content calendar"
      ],
      popular: false
    }
  ];

  return (
    <section className="py-20 bg-background relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-48 h-48 bg-primary/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center space-y-6 mb-16">
          <Badge variant="secondary" className="text-sm">
            Pricing
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
            <span className="gradient-primary bg-clip-text text-transparent">
              Affordable pricing plan
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative transition-smooth hover:shadow-primary ${
                plan.popular 
                  ? 'border-primary shadow-primary scale-105' 
                  : 'border-border/50'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="gradient-primary text-white">
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center space-y-4 pb-8">
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <p className="text-muted-foreground text-sm">{plan.subtitle}</p>
                
                <div className="space-y-2">
                  <div className="text-4xl font-bold">{plan.price}</div>
                  <p className="text-muted-foreground text-sm">{plan.period}</p>
                </div>

                <Button 
                  className={`w-full ${
                    plan.popular 
                      ? 'gradient-primary text-white shadow-primary' 
                      : 'variant-outline'
                  }`}
                >
                  Purchase
                </Button>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <h4 className="font-semibold text-lg">What's included?</h4>
                </div>

                <div className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-muted-foreground text-sm">{feature}</span>
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

export default Pricing;