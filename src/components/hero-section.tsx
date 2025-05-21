
import { ArrowDown } from "lucide-react";
import { Button } from "./ui/button";

export const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      {/* Background gradient elements */}
      <div className="absolute top-40 -left-40 w-96 h-96 bg-primary/20 rounded-full filter blur-3xl opacity-50 dark:opacity-20 animate-pulse-soft"></div>
      <div className="absolute bottom-20 -right-40 w-96 h-96 bg-primary/30 rounded-full filter blur-3xl opacity-50 dark:opacity-20 animate-pulse-soft"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center">
          <p className="text-primary font-medium mb-4 animate-slide-up opacity-0" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
            Hello, I'm
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up opacity-0" style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}>
            John Doe
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl mb-8 animate-slide-up opacity-0" style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}>
            <span className="font-medium">Full Stack Developer</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mb-10 animate-slide-up opacity-0" style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}>
            I create elegant, efficient, and user-friendly digital experiences that solve real-world problems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up opacity-0" style={{ animationDelay: "1s", animationFillMode: "forwards" }}>
            <Button size="lg" className="bg-primary hover:bg-primary/90 shadow-button btn-hover">
              View My Work
            </Button>
            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/5 btn-hover">
              Contact Me
            </Button>
          </div>
        </div>
      </div>
      
      <a 
        href="#about" 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-muted-foreground hover:text-primary transition-colors animate-slide-up opacity-0 group"
        style={{ animationDelay: "1.2s", animationFillMode: "forwards" }}
      >
        <span className="mb-2 text-sm font-medium">Scroll Down</span>
        <ArrowDown className="group-hover:translate-y-1 transition-transform" />
      </a>
    </section>
  );
};
