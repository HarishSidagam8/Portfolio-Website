
import { useState, useEffect } from "react";
import { ThemeToggle } from "./theme-toggle";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { name: "Home", path: "#home" },
  { name: "About", path: "#about" },
  { name: "Skills", path: "#skills" },
  { name: "Projects", path: "#projects" },
  { name: "Resume", path: "#resume" },
  { name: "Contact", path: "#contact" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Update active section based on scroll position
      const sections = document.querySelectorAll("section[id]");
      let currentSection = "home";
      
      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop - 100;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          currentSection = section.id;
        }
      });
      
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);
  
  const isActive = (path: string) => {
    const sectionId = path.replace("#", "");
    return activeSection === sectionId;
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-400",
        scrolled 
          ? "bg-background/80 backdrop-blur-md shadow-soft" 
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold flex items-center">
          <span className="bg-primary text-white p-2 rounded-lg mr-2 text-lg">JD</span>
          <span>Portfolio<span className="text-primary">.</span></span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-2">
          <ul className="flex items-center mr-4">
            {NAV_ITEMS.map((item) => (
              <li key={item.name}>
                <a 
                  href={item.path}
                  className={cn(
                    "px-3 py-2 rounded-md mx-1 text-sm font-medium transition-all duration-300",
                    isActive(item.path) 
                      ? "text-primary bg-primary/10" 
                      : "text-foreground/80 hover:text-primary hover:bg-primary/5"
                  )}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </nav>

        {/* Mobile Navigation Button */}
        <div className="flex items-center md:hidden space-x-4">
          <ThemeToggle />
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
              "p-2 rounded-full text-foreground/80 hover:text-primary hover:bg-primary/10 transition-all duration-300",
              isOpen && "bg-primary/10 text-primary"
            )}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <nav className="md:hidden bg-background/95 backdrop-blur-md shadow-soft border-t animate-slide-in transition-all duration-300">
          <ul className="container mx-auto px-4 py-4 flex flex-col">
            {NAV_ITEMS.map((item) => (
              <li key={item.name} className="my-1">
                <a 
                  href={item.path}
                  onClick={closeMenu}
                  className={cn(
                    "block px-4 py-3 rounded-md text-base font-medium transition-all duration-300",
                    isActive(item.path) 
                      ? "text-primary bg-primary/10" 
                      : "text-foreground/80 hover:text-primary hover:bg-primary/5"
                  )}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};
