import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Navigate to success together?",
      answer: "Let's navigate the path to success together! With expert guidance and innovative solutions, we'll help you overcome challenges and reach your business goals. Join us in creating a roadmap for growth, and turn your vision into reality with strategic partnerships and support"
    },
    {
      question: "Client satisfaction",
      answer: "We maintain a 98% client satisfaction rate through our commitment to excellence and putting clients at the heart of everything we do."
    },
    {
      question: "Precision solutions for progress?", 
      answer: "Our precision solutions are designed to drive measurable progress for your business through targeted strategies and innovative approaches."
    },
    {
      question: "Genius at work, success guaranteed?",
      answer: "Our team of experts brings years of experience and proven methodologies to ensure your business achieves its goals and objectives."
    },
    {
      question: "Client centric approach",
      answer: "We prioritize our clients' needs and goals, ensuring every solution is tailored specifically to drive their success and growth."
    }
  ];

  return (
    <section className="py-20 bg-muted/20 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Content */}
          <div className="space-y-6">
            <Badge variant="secondary" className="text-sm">
              FAQ's
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
              <span className="gradient-primary bg-clip-text text-transparent">
                Frequently asked question
              </span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Explore answers to the most frequently asked questions, providing you 
              with helpful insights and clarity
            </p>
            
            {/* FAQ Image placeholder */}
            <div className="relative rounded-3xl overflow-hidden shadow-primary h-64 mt-8">
              <div className="absolute inset-0 gradient-secondary opacity-20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-2">
                  <div className="w-16 h-16 rounded-full gradient-primary mx-auto flex items-center justify-center">
                    <span className="text-white font-bold text-2xl">?</span>
                  </div>
                  <p className="text-muted-foreground">FAQ Support</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - FAQ Accordion */}
          <div className="space-y-4">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border border-border/50 rounded-2xl px-6 bg-card/50 backdrop-blur-sm"
                >
                  <AccordionTrigger className="text-left hover:text-primary transition-smooth py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;