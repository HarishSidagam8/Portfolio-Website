
import { useEffect, useRef } from "react";

export const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const elements = document.querySelectorAll('.fade-in-section');
    elements.forEach(el => observer.observe(el));
    
    return () => observer.disconnect();
  }, []);
  
  return (
    <section id="about" className="section bg-secondary/50 dark:bg-secondary/10">
      <div className="container mx-auto px-4">
        <h2 className="section-title">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="fade-in-section">
            <div className="aspect-square relative overflow-hidden rounded-lg">
              <div className="h-full w-full bg-gradient-to-br from-highlight to-highlight/30 flex items-center justify-center text-white text-8xl font-bold">
                JD
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4 fade-in-section">
              Full Stack Developer <span className="text-highlight">based in New York</span>
            </h3>
            <p className="text-muted-foreground mb-6 fade-in-section">
              I'm a passionate Full Stack Developer with a strong focus on creating clean, 
              user-friendly, and high-performing web applications. With over 5 years of experience
              in the field, I've developed a wide range of skills that allow me to tackle complex
              projects with confidence and creativity.
            </p>
            <p className="text-muted-foreground mb-8 fade-in-section">
              My goal is to build products that not only meet technical requirements but also 
              provide exceptional user experiences. I believe in writing clean, maintainable code 
              and staying up-to-date with the latest industry standards and practices.
            </p>
            
            <div className="grid grid-cols-2 gap-4 fade-in-section">
              <div>
                <p className="font-medium">Name:</p>
                <p className="text-muted-foreground">John Doe</p>
              </div>
              <div>
                <p className="font-medium">Email:</p>
                <p className="text-muted-foreground">hello@johndoe.com</p>
              </div>
              <div>
                <p className="font-medium">From:</p>
                <p className="text-muted-foreground">New York, USA</p>
              </div>
              <div>
                <p className="font-medium">Experience:</p>
                <p className="text-muted-foreground">5+ Years</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
