
import { Github, Linkedin, Twitter, ExternalLink } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary/50 dark:bg-secondary/10 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center">
          <div className="flex space-x-6 mb-8">
            <a href="#" className="text-foreground hover:text-highlight transition-colors" aria-label="GitHub">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="text-foreground hover:text-highlight transition-colors" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="text-foreground hover:text-highlight transition-colors" aria-label="Twitter">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-foreground hover:text-highlight transition-colors" aria-label="Website">
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
          
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 text-center md:text-left mb-8">
            <a href="#home" className="hover:text-highlight transition-colors">Home</a>
            <a href="#about" className="hover:text-highlight transition-colors">About</a>
            <a href="#skills" className="hover:text-highlight transition-colors">Skills</a>
            <a href="#projects" className="hover:text-highlight transition-colors">Projects</a>
            <a href="#resume" className="hover:text-highlight transition-colors">Resume</a>
            <a href="#contact" className="hover:text-highlight transition-colors">Contact</a>
          </div>
          
          <p className="text-muted-foreground">
            © {currentYear} John Doe. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
