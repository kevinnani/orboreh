import { NavLink } from "@/components/NavLink";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { useState } from "react";
import OrBoreh from "../assets/OrBoreh.png"


const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-featured online shopping platform with payment integration, product management, and user authentication.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=500&fit=crop",
      tags: ["React", "Node.js", "MySQL", "Stripe"],
      category: "Web Development",
      link: "#"
    },
    {
      title: "Educational Portal",
      description: "Interactive learning management system for schools with online classes, assignments, and progress tracking.",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=500&fit=crop",
      tags: ["React", "Express", "MongoDB", "WebRTC"],
      category: "Education",
      link: "#"
    },
    {
      title: "Brand Identity Design",
      description: "Complete brand identity package including logo, color palette, typography, and brand guidelines for a tech startup.",
      image: "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=800&h=500&fit=crop",
      tags: ["Adobe Illustrator", "Photoshop", "Figma"],
      category: "Design",
      link: "#"
    },
    {
      title: "Business Brochure Design",
      description: "Professional tri-fold brochure design for a consulting firm with modern layouts and compelling visuals.",
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&h=500&fit=crop",
      tags: ["InDesign", "Photoshop", "Print Design"],
      category: "Design",
      link: "#"
    },
    {
      title: "Corporate Website",
      description: "Professional website for a business consulting firm with service pages, team profiles, and client testimonials.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop",
      tags: ["HTML5", "CSS3", "JavaScript"],
      category: "Business",
      link: "#"
    },
    {
      title: "Restaurant Website",
      description: "Modern, responsive website for a restaurant chain with online ordering, menu management, and reservations.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=500&fit=crop",
      tags: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
      category: "Web Development",
      link: "#"
    },
    {
      title: "Real Estate Portal",
      description: "Dynamic property listing platform with advanced search, virtual tours, and lead management system.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=500&fit=crop",
      tags: ["React", "Node.js", "MySQL", "Google Maps API"],
      category: "Web Development",
      link: "#"
    },
    {
      title: "Social Media Campaign",
      description: "Complete social media marketing campaign with graphics, content strategy, and analytics for a fashion brand.",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=500&fit=crop",
      tags: ["Canva", "Photoshop", "Instagram", "Analytics"],
      category: "Design",
      link: "#"
    },
    {
      title: "Educational Course Website",
      description: "Online learning platform for professional courses with video lessons, quizzes, and certificate generation.",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=500&fit=crop",
      tags: ["React", "Node.js", "MongoDB"],
      category: "Education",
      link: "#"
    },
    {
      title: "Business Strategy Posters",
      description: "Series of infographic posters for business strategy workshops and corporate training sessions.",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=500&fit=crop",
      tags: ["Illustrator", "InDesign", "Infographic"],
      category: "Design",
      link: "#"
    },
    {
      title: "Corporate Identity Package",
      description: "Complete branding package for a business including business cards, letterheads, and presentation templates.",
      image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=800&h=500&fit=crop",
      tags: ["Illustrator", "Photoshop", "Branding"],
      category: "Business",
      link: "#"
    },
    {
      title: "Healthcare Dashboard",
      description: "Patient management system with appointment scheduling, medical records, and real-time monitoring.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=500&fit=crop",
      tags: ["React", "Material UI", "Node.js", "MongoDB"],
      category: "Web Development",
      link: "#"
    }
  ];

  const categories = ["All", "Web Development", "Design", "Education", "Business"];
  
  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      {/* Simple Navigation for Projects Page */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <NavLink to="/" className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            <img  className="h-10 w-auto sm:h-12 md:h-14 lg:h-16 object-contain" src={OrBoreh} alt="" />
            </NavLink>
            <div className="flex items-center gap-4">
              <ThemeToggle />
              <NavLink to="/">
                <Button variant="hero">
                  Back to Home
                </Button>
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center animate-fade-in">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Portfolio
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Completed <span className="text-primary">Projects</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore a selection of successful projects that showcase my expertise in web development, 
            design, and digital solutions. Each project represents a unique challenge and creative solution.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className="rounded-full"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-primary/90 text-primary-foreground">
                      {project.category}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Button size="sm" className="flex-1 gap-2">
                      <ExternalLink className="h-4 w-4" />
                      View Project
                    </Button>
                    <Button size="sm" variant="outline">
                      <Github className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's work together to bring your vision to life with professional web solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => window.location.href = 'mailto:naveenksarill@gmail.com'}
            >
              Get In Touch
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => window.open('https://wa.me/917382592333', '_blank')}
            >
              WhatsApp Me
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-muted-foreground">
            © 2025 Kevin Nani. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Projects;
