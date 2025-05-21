
import { Button } from "./ui/button";
import { Download } from "lucide-react";

interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
  responsibilities: string[];
}

interface Education {
  id: number;
  degree: string;
  institution: string;
  period: string;
  description: string;
}

const EXPERIENCES: Experience[] = [
  {
    id: 1,
    role: "Senior Frontend Developer",
    company: "Tech Solutions Inc.",
    period: "Jan 2021 - Present",
    description: "Leading frontend development for enterprise SaaS applications.",
    responsibilities: [
      "Architected and implemented scalable React applications",
      "Mentored junior developers and established coding standards",
      "Improved application performance by 35% through code optimizations",
      "Collaborated with UX team to implement responsive design systems"
    ]
  },
  {
    id: 2,
    role: "Full Stack Developer",
    company: "Digital Innovations Co.",
    period: "Mar 2018 - Dec 2020",
    description: "Developed full stack solutions for e-commerce and fintech clients.",
    responsibilities: [
      "Built RESTful APIs using Node.js and Express",
      "Implemented complex database schemas with MongoDB and PostgreSQL",
      "Designed and developed responsive frontend interfaces with React",
      "Deployed and maintained applications on AWS infrastructure"
    ]
  },
  {
    id: 3,
    role: "Web Developer",
    company: "Creative Agency",
    period: "Jun 2016 - Feb 2018",
    description: "Created dynamic websites for clients across various industries.",
    responsibilities: [
      "Developed responsive websites using HTML, CSS, and JavaScript",
      "Implemented content management systems for client websites",
      "Collaborated with designers to translate mockups into functional websites",
      "Improved website performance and SEO rankings"
    ]
  }
];

const EDUCATION: Education[] = [
  {
    id: 1,
    degree: "Master of Computer Science",
    institution: "Tech University",
    period: "2014 - 2016",
    description: "Specialized in Software Engineering and Data Structures."
  },
  {
    id: 2,
    degree: "Bachelor of Science in Computer Science",
    institution: "State University",
    period: "2010 - 2014",
    description: "Graduated with honors. Focus on Web Development and Algorithms."
  }
];

export const ResumeSection = () => {
  const handleDownloadResume = () => {
    // In a real application, this would download the resume file
    alert("Resume download would start here. In a real application, this would be a link to an actual PDF file.");
  };

  return (
    <section id="resume" className="section">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12">
          <h2 className="section-title mb-6 md:mb-0">My Resume</h2>
          <Button onClick={handleDownloadResume} className="bg-primary hover:bg-primary/90 btn-hover" size="lg">
            <Download className="mr-2 h-4 w-4" />
            Download Resume
          </Button>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Experience */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 flex items-center">
              <span className="w-10 h-10 rounded-xl bg-primary/20 text-primary flex items-center justify-center mr-3 text-lg font-bold">E</span>
              Experience
            </h3>
            
            <div className="space-y-8">
              {EXPERIENCES.map((exp, index) => (
                <div key={exp.id} className="fade-in-section relative border-l-2 border-primary/30 pl-8 pb-8" style={{ animationDelay: `${0.2 * index}s` }}>
                  <div className="absolute w-5 h-5 bg-background dark:bg-secondary border-2 border-primary rounded-full -left-[11px] top-0" />
                  <div className="bg-background/60 dark:bg-secondary/40 backdrop-blur-sm p-6 rounded-xl shadow-soft">
                    <div className="inline-block px-3 py-1 mb-3 rounded-md text-sm font-medium bg-primary/10 text-primary">{exp.period}</div>
                    <h4 className="text-xl font-medium mt-1">{exp.role}</h4>
                    <p className="text-primary mb-2">{exp.company}</p>
                    <p className="text-muted-foreground mb-4">{exp.description}</p>
                    <ul className="space-y-2 mt-3">
                      {exp.responsibilities.map((resp, i) => (
                        <li key={i} className="flex items-start text-muted-foreground">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Education */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 flex items-center">
              <span className="w-10 h-10 rounded-xl bg-primary/20 text-primary flex items-center justify-center mr-3 text-lg font-bold">E</span>
              Education
            </h3>
            
            <div className="space-y-8">
              {EDUCATION.map((edu, index) => (
                <div key={edu.id} className="fade-in-section relative border-l-2 border-primary/30 pl-8 pb-8" style={{ animationDelay: `${0.2 * index}s` }}>
                  <div className="absolute w-5 h-5 bg-background dark:bg-secondary border-2 border-primary rounded-full -left-[11px] top-0" />
                  <div className="bg-background/60 dark:bg-secondary/40 backdrop-blur-sm p-6 rounded-xl shadow-soft">
                    <div className="inline-block px-3 py-1 mb-3 rounded-md text-sm font-medium bg-primary/10 text-primary">{edu.period}</div>
                    <h4 className="text-xl font-medium mt-1">{edu.degree}</h4>
                    <p className="text-primary mb-4">{edu.institution}</p>
                    <p className="text-muted-foreground">{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Certifications */}
            <div className="mt-12">
              <h3 className="text-2xl font-semibold mb-8 flex items-center">
                <span className="w-10 h-10 rounded-xl bg-primary/20 text-primary flex items-center justify-center mr-3 text-lg font-bold">C</span>
                Certifications
              </h3>
              
              <div className="fade-in-section bg-background/60 dark:bg-secondary/40 backdrop-blur-sm p-6 rounded-xl shadow-soft space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-border">
                  <span className="font-medium">AWS Certified Developer</span>
                  <span className="text-primary">2022</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-border">
                  <span className="font-medium">React Advanced Certification</span>
                  <span className="text-primary">2021</span>
                </div>
                <div className="flex justify-between items-center pt-3">
                  <span className="font-medium">Google UX Design Professional</span>
                  <span className="text-primary">2020</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
