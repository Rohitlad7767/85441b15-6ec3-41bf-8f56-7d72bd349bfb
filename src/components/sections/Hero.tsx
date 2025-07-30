import { Button } from "@/components/ui/button";
import { ArrowRight, Plus } from "lucide-react";
import heroMain from "@/assets/hero-main.jpg";
import heroSecondary from "@/assets/hero-secondary.jpg";
import isabellaImg from "@/assets/team/isabella.jpg";
import michaelImg from "@/assets/team/michael.jpg";
import sophiaImg from "@/assets/team/sophia.jpg";
import jamesImg from "@/assets/team/james.jpg";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen gradient-hero relative overflow-hidden pt-20">
      {/* Background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-accent/10 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-2">
              <p className="text-muted-foreground text-sm uppercase tracking-wider">
                Creative digital business
              </p>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Grow business
                <br />
                with great{" "}
                <span className="gradient-primary bg-clip-text text-transparent">
                  advise
                </span>
              </h1>
            </div>

            <p className="text-lg text-muted-foreground max-w-xl">
              Empower your business to thrive with expert advice tailored to your goals, 
              ensuring growth, innovation, and long-term success. Unlock your potential 
              with trusted guidance
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <Button 
                size="lg" 
                className="gradient-primary text-white shadow-primary transition-smooth hover:shadow-glow"
              >
                Get started now
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>

              {/* Team avatars */}
              <div className="flex items-center space-x-4">
                <div className="flex -space-x-2">
                  <img
                    src={isabellaImg}
                    alt="Isabella Rodriguez"
                    className="w-10 h-10 rounded-full border-2 border-background object-cover"
                  />
                  <img
                    src={michaelImg}
                    alt="Michael Smith"
                    className="w-10 h-10 rounded-full border-2 border-background object-cover"
                  />
                  <img
                    src={sophiaImg}
                    alt="Sophia Miller"
                    className="w-10 h-10 rounded-full border-2 border-background object-cover"
                  />
                  <img
                    src={jamesImg}
                    alt="James Martinez"
                    className="w-10 h-10 rounded-full border-2 border-background object-cover"
                  />
                  <div className="w-10 h-10 rounded-full border-2 border-background bg-muted flex items-center justify-center">
                    <Plus className="w-4 h-4 text-muted-foreground" />
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Grow Your Business with 4,600+ Other Members<br />
                  in a Collaborative and Supportive Network
                </p>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4 h-[600px]">
              {/* Large image */}
              <div className="col-span-1 row-span-2 relative rounded-3xl overflow-hidden shadow-primary">
                <img
                  src={heroMain}
                  alt="Business professional"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
              </div>
              
              {/* Small image */}
              <div className="col-span-1 relative rounded-2xl overflow-hidden shadow-secondary">
                <img
                  src={heroSecondary}
                  alt="Business collaboration"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-accent/20 to-transparent"></div>
              </div>
            </div>

            {/* Floating brand logos */}
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="flex items-center justify-center space-x-8 opacity-60">
                <div className="text-muted-foreground text-sm font-medium">logoipsum</div>
                <div className="text-muted-foreground text-sm font-medium">logoipsum</div>
                <div className="text-muted-foreground text-sm font-medium">logoipsum</div>
                <div className="text-muted-foreground text-sm font-medium">logoipsum</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;