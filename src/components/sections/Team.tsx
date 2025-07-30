import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import isabellaImg from "@/assets/team/isabella.jpg";
import michaelImg from "@/assets/team/michael.jpg";
import sophiaImg from "@/assets/team/sophia.jpg";
import jamesImg from "@/assets/team/james.jpg";

const Team = () => {
  const teamMembers = [
    {
      name: "Laura Wilburn",
      title: "Accounting Manager",
      image: isabellaImg
    },
    {
      name: "James Martinez", 
      title: "Product designer",
      image: jamesImg
    },
    {
      name: "Isabella Rodriguez",
      title: "Financial analyst", 
      image: isabellaImg
    },
    {
      name: "Sophia Miller",
      title: "Marketing specialist",
      image: sophiaImg
    },
    {
      name: "Michael Smith",
      title: "Project manager",
      image: michaelImg
    },
    {
      name: "Sarah Patel",
      title: "Business manager",
      image: sophiaImg
    }
  ];

  return (
    <section className="py-20 bg-background relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 right-10 w-48 h-48 bg-accent/10 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center space-y-6 mb-16">
          <Badge variant="secondary" className="text-sm">
            Team
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold leading-tight max-w-4xl mx-auto">
            Our experts, your{" "}
            <span className="gradient-primary bg-clip-text text-transparent">
              partners in success
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our experts are your trusted partners in success, offering tailored solutions, 
            insights, and support to help your business thrive
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-primary transition-smooth cursor-pointer border-border/50 bg-card/50 backdrop-blur-sm"
            >
              <CardContent className="p-6 text-center space-y-4">
                <div className="relative mx-auto w-32 h-32 rounded-2xl overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-smooth"></div>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-lg font-bold group-hover:text-primary transition-smooth">
                    {member.name}
                  </h3>
                  <p className="text-muted-foreground text-sm">{member.title}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;