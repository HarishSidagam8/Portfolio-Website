
import { Github, Linkedin, Twitter, ExternalLink } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary/50 dark:bg-secondary/90 py-12 relative overflow-hidden">
      {/* Background decorative blur */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/5 dark:to-background/10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center mb-8">
            <span className="bg-primary text-white p-2 rounded-lg mr-2 text-lg font-bold">JD</span>
            <span className="text-xl font-bold">Portfolio<span className="text-primary">.</span></span>
          </div>
          
          <div className="flex space-x-6 mb-8">
            <a href="#" className="w-10 h-10 rounded-full bg-background/80 dark:bg-secondary/60 flex items-center justify-center text-foreground hover:text-primary hover:bg-background shadow-soft transition-all duration-300 hover:-translate-y-1" aria-label="GitHub">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-background/80 dark:bg-secondary/60 flex items-center justify-center text-foreground hover:text-primary hover:bg-background shadow-soft transition-all duration-300 hover:-translate-y-1" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-background/80 dark:bg-secondary/60 flex items-center justify-center text-foreground hover:text-primary hover:bg-background shadow-soft transition-all duration-300 hover:-translate-y-1" aria-label="Twitter">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-background/80 dark:bg-secondary/60 flex items-center justify-center text-foreground hover:text-primary hover:bg-background shadow-soft transition-all duration-300 hover:-translate-y-1" aria-label="Website">
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
          
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-center mb-8 max-w-3xl">
            <a href="#home" className="text-foreground/80 hover:text-primary transition-colors">Home</a>
            <a href="#about" className="text-foreground/80 hover:text-primary transition-colors">About</a>
            <a href="#skills" className="text-foreground/80 hover:text-primary transition-colors">Skills</a>
            <a href="#projects" className="text-foreground/80 hover:text-primary transition-colors">Projects</a>
            <a href="#resume" className="text-foreground/80 hover:text-primary transition-colors">Resume</a>
            <a href="#contact" className="text-foreground/80 hover:text-primary transition-colors">Contact</a>
          </div>
          
          <p className="text-muted-foreground">
            © {currentYear} John Doe. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
