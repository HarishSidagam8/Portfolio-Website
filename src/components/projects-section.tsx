
import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./ui/dialog";
import { Button } from "./ui/button";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  features: string[];
}

const PROJECTS: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce website with product listings, shopping cart, and checkout.",
    longDescription: "This project is a complete e-commerce solution built with React, Node.js, and MongoDB. It features user authentication, product search and filtering, shopping cart functionality, payment processing with Stripe, and order tracking. The admin panel allows store owners to manage products, track inventory, and process orders.",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    tags: ["React", "Node.js", "MongoDB", "Express", "Redux"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    features: [
      "User authentication and profiles",
      "Product search and filtering",
      "Shopping cart and wishlist",
      "Payment processing with Stripe",
      "Order tracking and history",
      "Admin dashboard for store management"
    ]
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A productivity app for managing tasks, projects, and team collaboration.",
    longDescription: "This task management application helps teams organize their work efficiently. Built with React and Firebase, it includes features like task creation and assignment, due dates, priority levels, project grouping, and real-time updates. The application supports team collaboration with comments, attachments, and progress tracking.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    tags: ["React", "Firebase", "Tailwind CSS", "Context API"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    features: [
      "Task creation and assignment",
      "Due dates and priorities",
      "Project grouping and filtering",
      "Team collaboration features",
      "File attachments and comments",
      "Progress tracking and reporting"
    ]
  },
  {
    id: 3,
    title: "Real Estate Listings",
    description: "A modern property listing platform for real estate agents and buyers.",
    longDescription: "This real estate application connects property buyers with listings from real estate agents. It features property listings with detailed information, search functionality with filters for location, price, and amenities, image galleries, and virtual tours. Users can save favorite properties, schedule viewings, and contact agents directly through the platform.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    tags: ["Next.js", "PostgreSQL", "Tailwind CSS", "Mapbox"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    features: [
      "Property listings with detailed information",
      "Advanced search and filtering",
      "Interactive maps and location services",
      "Image galleries and virtual tours",
      "Saved favorites and property comparisons",
      "Agent contact and viewing scheduler"
    ]
  },
];

export const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="section bg-secondary/30 dark:bg-secondary/80">
      <div className="container mx-auto px-4">
        <h2 className="section-title">My Projects</h2>
        <p className="text-muted-foreground max-w-2xl mt-4 mb-12">
          Here are some of my recent projects that showcase my skills and experience.
          Click on a project to learn more about it.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {PROJECTS.map((project, index) => (
            <div 
              key={project.id} 
              className="bg-background dark:bg-secondary/50 rounded-2xl overflow-hidden shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-2 fade-in-section"
              style={{ animationDelay: `${0.2 * index}s` }}
              onClick={() => setSelectedProject(project)}
            >
              <div className="aspect-video relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/30 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button 
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProject(project);
                    }}
                    className="bg-white text-primary hover:bg-white/90 shadow-button"
                  >
                    View Details
                  </Button>
                </div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="text-xs bg-primary/10 dark:bg-primary/20 text-primary px-3 py-1 rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Button 
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedProject(project);
                  }}
                  className="w-full btn-hover"
                  variant="outline"
                >
                  View Details
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        {selectedProject && (
          <DialogContent className="max-w-3xl bg-background/95 backdrop-blur-md border-border/20 dark:bg-secondary/90">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-foreground">{selectedProject.title}</DialogTitle>
              <DialogDescription className="flex flex-wrap gap-2 mt-2">
                {selectedProject.tags.map((tag) => (
                  <span 
                    key={tag} 
                    className="text-xs bg-primary/10 dark:bg-primary/20 text-primary px-3 py-1 rounded-full font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </DialogDescription>
            </DialogHeader>
            
            <div className="mt-4">
              <div className="aspect-video rounded-xl overflow-hidden mb-6 shadow-soft">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="space-y-4">
                <p className="text-muted-foreground">{selectedProject.longDescription}</p>
                
                <div className="bg-secondary/50 dark:bg-secondary/30 rounded-xl p-4">
                  <h4 className="font-semibold text-lg mb-3 text-foreground">Key Features:</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
                    {selectedProject.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-4 pt-4">
                  {selectedProject.liveUrl && (
                    <Button asChild className="btn-hover">
                      <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                  
                  {selectedProject.githubUrl && (
                    <Button variant="outline" asChild className="border-primary text-primary hover:bg-primary/5 btn-hover">
                      <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
                        <Github className="mr-2 h-4 w-4" />
                        View Code
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
};
