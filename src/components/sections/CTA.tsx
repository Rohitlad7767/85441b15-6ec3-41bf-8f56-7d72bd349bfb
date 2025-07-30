import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Mail } from "lucide-react";
import { useState } from "react";

const CTA = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  return (
    <section className="py-20 gradient-hero relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-accent/20 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center">
                <Mail className="w-8 h-8 text-white" />
              </div>
              
              <div className="space-y-4">
                <p className="text-muted-foreground text-sm">
                  Supporting you at every stage of your business journey
                </p>
                <h2 className="text-4xl lg:text-5xl font-bold leading-tight text-foreground">
                  Join our subscribers list to get the{" "}
                  <span className="gradient-primary bg-clip-text text-transparent">
                    latest news
                  </span>
                </h2>
                <p className="text-muted-foreground">
                  Join our subscriber list today to receive the latest news, updates, 
                  and exclusive insights straight to your inbox. Stay informed and ahead of the curve
                </p>
              </div>
            </div>

            {/* Newsletter Form */}
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-background/50 border-border/50"
                required
              />
              <Button 
                type="submit"
                className="gradient-primary text-white shadow-primary transition-smooth hover:shadow-glow"
              >
                Submit
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </form>
          </div>

          {/* Right Content - Additional CTA */}
          <div className="space-y-8">
            <div className="relative rounded-3xl overflow-hidden shadow-primary h-[400px]">
              <div className="absolute inset-0 gradient-secondary opacity-30"></div>
              <div className="absolute inset-0 flex items-center justify-center text-center p-8">
                <div className="space-y-6">
                  <h3 className="text-3xl font-bold text-foreground">
                    Transform your business take the first step today!
                  </h3>
                  <p className="text-muted-foreground">
                    Take the first step today towards growth, innovation, and long-term success with expert
                  </p>
                  <Button 
                    size="lg"
                    className="gradient-primary text-white shadow-primary transition-smooth hover:shadow-glow"
                  >
                    Join Us Today
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;