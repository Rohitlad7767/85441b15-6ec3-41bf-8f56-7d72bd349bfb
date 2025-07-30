import { Separator } from "@/components/ui/separator";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: "About", href: "#about" },
      { name: "Services", href: "#services" },
      { name: "Projects", href: "#projects" },
      { name: "Team", href: "#team" }
    ],
    services: [
      { name: "Financial Growth", href: "#" },
      { name: "Business Solutions", href: "#" },
      { name: "Secure Money", href: "#" },
      { name: "Business Intelligence", href: "#" }
    ],
    resources: [
      { name: "Blog", href: "#blog" },
      { name: "Case Studies", href: "#" },
      { name: "FAQ", href: "#" },
      { name: "Support", href: "#" }
    ]
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">//</span>
              </div>
              <span className="text-xl font-bold text-foreground">Bizent</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Empowering businesses to thrive with expert advice tailored to your goals, 
              ensuring growth, innovation, and long-term success.
            </p>
            <div className="text-xs text-muted-foreground">
              © {currentYear} Bizent. All rights reserved.
            </div>
          </div>

          {/* Company Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Company</h3>
            <nav className="space-y-3">
              {footerLinks.company.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-muted-foreground hover:text-foreground transition-smooth text-sm"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Services Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Services</h3>
            <nav className="space-y-3">
              {footerLinks.services.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-muted-foreground hover:text-foreground transition-smooth text-sm"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Resources Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Resources</h3>
            <nav className="space-y-3">
              {footerLinks.resources.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-muted-foreground hover:text-foreground transition-smooth text-sm"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="text-xs text-muted-foreground">
            Built with ❤️ for growing businesses worldwide
          </div>
          <div className="flex items-center space-x-6 text-xs text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-smooth">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-smooth">Terms of Service</a>
            <a href="#" className="hover:text-foreground transition-smooth">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;