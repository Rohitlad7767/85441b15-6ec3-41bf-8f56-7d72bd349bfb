import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Calendar } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      title: "Company news recent developments and success reality stories",
      excerpt: "Over the past quarter, we've made significant strides, achieving both growth and innovation across our divisions. Our recent partnership with Partner Company has already yielded substantial benefits, allowing us to expand our product line and bring even more value to our customers.",
      date: "Dec 19, 2024",
      category: "Company News"
    },
    {
      title: "Recognizing employees and celebrating team successes together",
      excerpt: "Recognizing employees and celebrating team successes is an essential aspect of building a positive and productive workplace culture. Acknowledging the hard work and contributions of individuals and teams not only boosts morale but also fosters a sense of belonging and pride within the organization.",
      date: "Dec 13, 2024", 
      category: "Team"
    },
    {
      title: "Business trends you should watch in the coming year",
      excerpt: "One trend to watch is the growing emphasis on sustainability. Consumers and businesses alike are increasingly prioritizing environmentally conscious practices, making it essential for companies to integrate sustainability into their strategies. This shift not only responds to environmental concerns.",
      date: "15 Dec, 2024",
      category: "Trends"
    }
  ];

  return (
    <section id="blog" className="py-20 bg-background relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 left-10 w-48 h-48 bg-accent/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center space-y-6 mb-16">
          <Badge variant="secondary" className="text-sm">
            Blog
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold leading-tight max-w-4xl mx-auto">
            Explore{" "}
            <span className="gradient-primary bg-clip-text text-transparent">
              blogs & insights
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover expert articles, in-depth analyses, and the latest insights across various sectors, 
            all crafted to inspire and inform. Whether you're looking to deepen your understanding of 
            market dynamics
          </p>
          <Button 
            variant="outline" 
            className="transition-smooth hover:shadow-primary"
          >
            View More
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-primary transition-smooth cursor-pointer border-border/50 bg-card/50 backdrop-blur-sm"
            >
              <CardContent className="p-6 space-y-6">
                <div className="relative h-48 rounded-2xl overflow-hidden mb-6">
                  <div className="absolute inset-0 gradient-secondary opacity-20"></div>
                  <div className="absolute top-4 left-4">
                    <Badge variant="outline" className="text-xs">
                      {post.category}
                    </Badge>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                      <Calendar className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-lg font-bold group-hover:text-primary transition-smooth leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border/50">
                  <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                    <Calendar className="w-3 h-3" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground group-hover:text-primary transition-smooth">
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-smooth" />
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

export default Blog;