
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
          <div className="fade-in-section bg-background/60 dark:bg-secondary/40 backdrop-blur-sm p-6 rounded-2xl shadow-soft">
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <span className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-500 flex items-center justify-center mr-3 text-lg font-bold">F</span>
              Frontend
            </h3>
            <div className="space-y-6">
              {frontendSkills.map((skill, index) => (
                <div key={skill.name} style={{ animationDelay: `${0.1 * index}s` }} className="animate-fade-in opacity-0" style={{ animationFillMode: "forwards" }}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-primary">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2 bg-secondary" indicatorClassName="bg-blue-500" />
                </div>
              ))}
            </div>
          </div>
          
          <div className="fade-in-section bg-background/60 dark:bg-secondary/40 backdrop-blur-sm p-6 rounded-2xl shadow-soft">
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <span className="w-10 h-10 rounded-xl bg-green-500/20 text-green-500 flex items-center justify-center mr-3 text-lg font-bold">B</span>
              Backend
            </h3>
            <div className="space-y-6">
              {backendSkills.map((skill, index) => (
                <div key={skill.name} style={{ animationDelay: `${0.1 * index}s` }} className="animate-fade-in opacity-0" style={{ animationFillMode: "forwards" }}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-primary">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2 bg-secondary" indicatorClassName="bg-green-500" />
                </div>
              ))}
            </div>
          </div>
          
          <div className="fade-in-section bg-background/60 dark:bg-secondary/40 backdrop-blur-sm p-6 rounded-2xl shadow-soft">
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <span className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-500 flex items-center justify-center mr-3 text-lg font-bold">O</span>
              Other Skills
            </h3>
            <div className="space-y-6">
              {otherSkills.map((skill, index) => (
                <div key={skill.name} style={{ animationDelay: `${0.1 * index}s` }} className="animate-fade-in opacity-0" style={{ animationFillMode: "forwards" }}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-primary">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2 bg-secondary" indicatorClassName="bg-purple-500" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
