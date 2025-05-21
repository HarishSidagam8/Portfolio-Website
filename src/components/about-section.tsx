
import { useRef } from "react";

export const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  return (
    <section id="about" ref={sectionRef} className="section bg-secondary/30 dark:bg-secondary/80 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 -right-40 w-80 h-80 bg-primary/10 rounded-full filter blur-3xl dark:bg-primary/5"></div>
      <div className="absolute -bottom-40 -left-20 w-80 h-80 bg-primary/10 rounded-full filter blur-3xl dark:bg-primary/5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="section-title">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          <div className="fade-in-section">
            <div className="aspect-square relative overflow-hidden rounded-2xl shadow-card">
              <div className="h-full w-full bg-gradient-to-br from-primary to-primary/50 flex items-center justify-center text-white text-8xl font-bold">
                JD
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-6 fade-in-section">
              Full Stack Developer <span className="text-primary">based in New York</span>
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
            
            <div className="grid grid-cols-2 gap-6 fade-in-section">
              <div className="bg-background/80 backdrop-blur-sm p-4 rounded-xl shadow-soft">
                <p className="font-medium text-primary mb-1">Name:</p>
                <p className="text-foreground">John Doe</p>
              </div>
              <div className="bg-background/80 backdrop-blur-sm p-4 rounded-xl shadow-soft">
                <p className="font-medium text-primary mb-1">Email:</p>
                <p className="text-foreground">hello@johndoe.com</p>
              </div>
              <div className="bg-background/80 backdrop-blur-sm p-4 rounded-xl shadow-soft">
                <p className="font-medium text-primary mb-1">From:</p>
                <p className="text-foreground">New York, USA</p>
              </div>
              <div className="bg-background/80 backdrop-blur-sm p-4 rounded-xl shadow-soft">
                <p className="font-medium text-primary mb-1">Experience:</p>
                <p className="text-foreground">5+ Years</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
