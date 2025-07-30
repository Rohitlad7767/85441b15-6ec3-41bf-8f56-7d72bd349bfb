import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Star } from "lucide-react";
import aboutImage from "@/assets/about-image.jpg";

const About = () => {
  const workAreas = [
    "Financial Growth",
    "Cash Flow Visibility", 
    "Business intelligence",
    "Secure Money",
    "Business solutions",
    "Financial Planning"
  ];

  return (
    <section id="about" className="py-20 bg-background relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="text-sm">
                About us
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                We work with you to make your{" "}
                <span className="gradient-primary bg-clip-text text-transparent">
                  vision a reality
                </span>
              </h2>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-2">
                <div className="text-4xl font-bold gradient-primary bg-clip-text text-transparent">
                  98%
                </div>
                <p className="text-sm font-medium">Client satisfaction</p>
                <p className="text-sm text-muted-foreground">
                  Achieving a 98% client satisfaction rate is a testament to our 
                  unwavering commitment to delivering excellence and putting our 
                  clients at the heart of everything we do.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-sm font-medium">4.8/5</span>
                </div>
                <p className="text-sm font-medium">Trustpilot</p>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">
                    Your partner in corporate strategy achievement
                  </p>
                  <p className="text-xs text-muted-foreground">
                    We pride ourselves on being more than just a service provider—we're 
                    your dedicated partner in achieving corporate strategy success.
                  </p>
                </div>
              </div>
            </div>

            {/* Work Areas */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Our work areas:</h3>
              <div className="grid grid-cols-2 gap-3">
                {workAreas.map((area, index) => (
                  <div key={index} className="text-sm text-muted-foreground">
                    {area}
                  </div>
                ))}
              </div>
            </div>

            <Button 
              variant="outline" 
              className="transition-smooth hover:shadow-primary"
            >
              About US
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-primary">
              <img
                src={aboutImage}
                alt="Business analysis and growth charts"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent"></div>
            </div>

            {/* Floating card */}
            <div className="absolute bottom-8 left-8 bg-card border border-border rounded-2xl p-6 shadow-primary">
              <div className="space-y-2">
                <div className="text-2xl font-bold">A+</div>
                <p className="text-sm font-medium">rating</p>
                <p className="text-xs text-muted-foreground">
                  Avg rating 4.8 makes us world best software
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;