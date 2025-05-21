
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin } from "lucide-react";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted:", formData);
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="section bg-secondary/30 dark:bg-secondary/80 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 -left-40 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl dark:bg-primary/5"></div>
      <div className="absolute -bottom-20 -right-40 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl dark:bg-primary/5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="section-title">Contact Me</h2>
        <p className="text-muted-foreground max-w-2xl mt-4 mb-12">
          Have a question or want to work together? Feel free to contact me using the form below or 
          through any of the provided contact details.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-1 space-y-8">
            <div className="fade-in-section bg-background/60 dark:bg-secondary/40 backdrop-blur-sm p-6 rounded-xl shadow-soft">
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mr-4 shrink-0">
                  <Mail className="text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">Email</h3>
                  <p className="text-muted-foreground">hello@johndoe.com</p>
                  <a href="mailto:hello@johndoe.com" className="text-primary hover:underline inline-block mt-2">
                    Send an email
                  </a>
                </div>
              </div>
            </div>
            
            <div className="fade-in-section bg-background/60 dark:bg-secondary/40 backdrop-blur-sm p-6 rounded-xl shadow-soft">
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mr-4 shrink-0">
                  <Phone className="text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">Phone</h3>
                  <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  <a href="tel:+15551234567" className="text-primary hover:underline inline-block mt-2">
                    Give me a call
                  </a>
                </div>
              </div>
            </div>
            
            <div className="fade-in-section bg-background/60 dark:bg-secondary/40 backdrop-blur-sm p-6 rounded-xl shadow-soft">
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mr-4 shrink-0">
                  <MapPin className="text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">Location</h3>
                  <p className="text-muted-foreground">New York, NY</p>
                  <p className="text-muted-foreground">United States</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-2 fade-in-section">
            <form onSubmit={handleSubmit} className="bg-background/60 dark:bg-secondary/40 backdrop-blur-sm p-8 rounded-xl shadow-soft">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">Your Name</label>
                  <Input 
                    id="name"
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="h-12 bg-background/80 dark:bg-secondary/60 border-border focus:border-primary"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">Your Email</label>
                  <Input 
                    id="email"
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="h-12 bg-background/80 dark:bg-secondary/60 border-border focus:border-primary"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">Subject</label>
                <Input 
                  id="subject"
                  type="text"
                  name="subject"
                  placeholder="How can I help you?"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="h-12 bg-background/80 dark:bg-secondary/60 border-border focus:border-primary"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">Your Message</label>
                <Textarea 
                  id="message"
                  name="message"
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="min-h-32 bg-background/80 dark:bg-secondary/60 border-border focus:border-primary"
                  rows={6}
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full md:w-auto bg-primary hover:bg-primary/90 shadow-button btn-hover"
                disabled={isSubmitting}
                size="lg"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
