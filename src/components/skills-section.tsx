
import { useEffect } from "react";
import { Progress } from "./ui/progress";

interface Skill {
  name: string;
  level: number;
  category: "frontend" | "backend" | "other";
}

const SKILLS: Skill[] = [
  { name: "React", level: 90, category: "frontend" },
  { name: "TypeScript", level: 85, category: "frontend" },
  { name: "HTML/CSS", level: 95, category: "frontend" },
  { name: "Tailwind CSS", level: 90, category: "frontend" },
  { name: "Node.js", level: 85, category: "backend" },
  { name: "Express", level: 80, category: "backend" },
  { name: "MongoDB", level: 75, category: "backend" },
  { name: "PostgreSQL", level: 70, category: "backend" },
  { name: "Git", level: 85, category: "other" },
  { name: "Docker", level: 70, category: "other" },
  { name: "AWS", level: 65, category: "other" },
  { name: "Figma", level: 75, category: "other" }
];

export const SkillsSection = () => {
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

  const frontendSkills = SKILLS.filter(skill => skill.category === "frontend");
  const backendSkills = SKILLS.filter(skill => skill.category === "backend");
  const otherSkills = SKILLS.filter(skill => skill.category === "other");

  return (
    <section id="skills" className="section">
      <div className="container mx-auto px-4">
        <h2 className="section-title">My Skills</h2>
        <p className="text-muted-foreground max-w-2xl mt-4 mb-12">
          With expertise in both frontend and backend technologies, I bring a comprehensive approach 
          to development. Here are the key technologies and tools I work with:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <div className="fade-in-section">
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <span className="w-8 h-8 rounded-full bg-blue-500/20 text-blue-500 flex items-center justify-center mr-3">F</span>
              Frontend
            </h3>
            <div className="space-y-6">
              {frontendSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </div>
          </div>
          
          <div className="fade-in-section" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <span className="w-8 h-8 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center mr-3">B</span>
              Backend
            </h3>
            <div className="space-y-6">
              {backendSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </div>
          </div>
          
          <div className="fade-in-section" style={{ animationDelay: "0.4s" }}>
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <span className="w-8 h-8 rounded-full bg-purple-500/20 text-purple-500 flex items-center justify-center mr-3">O</span>
              Other Skills
            </h3>
            <div className="space-y-6">
              {otherSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
