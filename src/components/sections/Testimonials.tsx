import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Star, MessageSquare } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Lauren Wilburn",
      title: "Founder of Product Hunt",
      content: "As a small business owner, your service has been a lifesaver in managing cash flow and optimizing financial strategies. It has truly exceeded my expectations.",
      rating: 5
    },
    {
      name: "Esther Howard", 
      title: "Accounting Manager",
      content: "They truly care about our success, and the results speak for themselves. Highly recommended for any business serious about growth.",
      rating: 5
    },
    {
      name: "Albert Flores",
      title: "Financial Analyst", 
      content: "There's always someone to offer advice or share a solution. We've built strong relationships and found countless ways to improve our business",
      rating: 5
    },
    {
      name: "Jane Cooper",
      title: "Project Manager",
      content: "Business owner, your service has been a lifesaver in managing cash flow and optimizing financial strategies. It has truly exceeded my expectations.",
      rating: 5
    },
    {
      name: "Darrell Steward",
      title: "Product Designer",
      content: "As a small business owner, your service has been a lifesaver in managing cash flow and optimizing financial strategies. It has truly exceeded my expectations.",
      rating: 5
    },
    {
      name: "Sophia Miller",
      title: "Marketing specialist", 
      content: "we've been able to expand our reach and improve our bottom line. The team's insights and expertise have been invaluable, and the platform",
      rating: 5
    },
    {
      name: "Bessie Cooper",
      title: "Graphic Design",
      content: "Their team is always responsive, professional, and focused on our needs. We've seen significant improvements in efficiency and growth since we started working together",
      rating: 5
    },
    {
      name: "Annette Black",
      title: "Business manager",
      content: "Their solutions were tailored to our unique challenges, and the results were beyond what we expected. Our revenue has grown by 25% in just six months!",
      rating: 5
    },
    {
      name: "Cameron Williamson",
      title: "Software Engineer",
      content: "The value we've gained from partnering with they is unparalleled. Their expertise and innovative solutions have helped us save time and money while achieving",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-muted/20 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 left-10 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-primary/10 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center space-y-6 mb-16">
          <Badge variant="secondary" className="text-sm">
            Testimonials
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold leading-tight max-w-4xl mx-auto">
            Clients share their{" "}
            <span className="gradient-primary bg-clip-text text-transparent">
              success stories
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Highlighting how our strategies and solutions helped them achieve remarkable growth, 
            overcome challenges, and reach their business goals
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-primary transition-smooth border-border/50 bg-card/50 backdrop-blur-sm"
            >
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <div className="flex items-start space-x-3">
                  <MessageSquare className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    "{testimonial.content}"
                  </p>
                </div>

                <div className="flex items-center space-x-3 pt-4 border-t border-border/50">
                  <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center">
                    <span className="text-white font-medium text-sm">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <p className="font-medium text-sm">{testimonial.name}</p>
                    <p className="text-muted-foreground text-xs">{testimonial.title}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;