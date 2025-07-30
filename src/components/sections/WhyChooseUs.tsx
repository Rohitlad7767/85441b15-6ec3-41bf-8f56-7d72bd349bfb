import { Badge } from "@/components/ui/badge";
import { CheckCircle, Users, Target, Zap } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: CheckCircle,
      title: "Proven expertise",
      description: "Highlight the years of experience, industry expertise"
    },
    {
      icon: Users,
      title: "Client centric approach", 
      description: "Describe how you prioritize client satisfaction"
    },
    {
      icon: Target,
      title: "Skilled team of experts",
      description: "Introduce your team's qualifications and how their skills"
    },
    {
      icon: Zap,
      title: "Flexible and scalable solutions",
      description: "Highlight your ability to adapt to businesses of various"
    }
  ];

  return (
    <section className="py-20 bg-background relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 right-10 w-48 h-48 bg-primary/10 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="text-sm">
                Why choose us
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                Reasons why we are{" "}
                <span className="gradient-primary bg-clip-text text-transparent">
                  best business ideas maker
                </span>
              </h2>
              <p className="text-lg text-muted-foreground">
                We excel in crafting business ideas with innovation, market insight, 
                and tailored solutions, ensuring your success.
              </p>
            </div>

            <div className="grid gap-6">
              {reasons.map((reason, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <reason.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">{reason.title}</h3>
                    <p className="text-muted-foreground text-sm">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Image placeholder */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-primary h-[500px]">
              <div className="absolute inset-0 gradient-secondary opacity-20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 rounded-full gradient-primary mx-auto flex items-center justify-center">
                    <Target className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">Business Excellence</h3>
                  <p className="text-muted-foreground">Driving growth through innovation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;