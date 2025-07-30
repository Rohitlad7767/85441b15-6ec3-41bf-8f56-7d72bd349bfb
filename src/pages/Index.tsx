import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Projects from "@/components/sections/Projects";
import Pricing from "@/components/sections/Pricing";
import Testimonials from "@/components/sections/Testimonials";
import Team from "@/components/sections/Team";
import FAQ from "@/components/sections/FAQ";
import Blog from "@/components/sections/Blog";
import CTA from "@/components/sections/CTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <Projects />
        <Pricing />
        <Testimonials />
        <Team />
        <FAQ />
        <Blog />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
