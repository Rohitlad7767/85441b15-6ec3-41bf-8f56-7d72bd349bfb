import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Proven solutions for real-world challenges",
      description: "Proven solutions for real-world challenges emphasize the practical application of expertise, innovation, and technology to address pressing issues and deliver",
      category: "Strategy"
    },
    {
      title: "Our project showcase achievements and impact", 
      description: "Our project showcase is a reflection of the achievements and impact that define an organization's expertise and value. It represents a curated collection of",
      category: "Growth"
    },
    {
      title: "Business Solutions in action explore our projects",
      description: "At Business Solutions in Action, we invite you to Explore Our Projects and witness the transformative impact of our tailored solutions. Our portfolio showcases",
      category: "Innovation"
    },
    {
      title: "Projects portfolio proven success across industries",
      description: "A projects portfolio showcasing proven success across industries highlights an organization's ability to deliver impactful results in diverse sectors. It serves",
      category: "Success"
    }
  ];

  return (
    <section className="py-20 bg-muted/20 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-secondary/10 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center space-y-6 mb-16">
          <Badge variant="secondary" className="text-sm">
            Project & case studies
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold leading-tight max-w-4xl mx-auto">
            Let's looks our{" "}
            <span className="gradient-primary bg-clip-text text-transparent">
              global projects
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore our global projects to see the impact of our work around the world 
            and understand how our tailored solutions make a difference.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-primary transition-smooth cursor-pointer border-border/50 bg-card/50 backdrop-blur-sm"
            >
              <CardContent className="p-8 space-y-6">
                <div className="relative h-48 rounded-2xl overflow-hidden mb-6">
                  <div className="absolute inset-0 gradient-secondary opacity-20"></div>
                  <div className="absolute top-4 left-4">
                    <Badge variant="outline" className="text-xs">
                      {project.category}
                    </Badge>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                      <ArrowRight className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-bold group-hover:text-primary transition-smooth leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4">
                  <span className="text-sm text-muted-foreground">Learn more</span>
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

export default Projects;