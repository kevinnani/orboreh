import { Navbar } from "@/components/Navbar";
import { Chatbot } from "@/components/Chatbot";
import { ScrollAnimations } from "@/components/ScrollAnimations";
import { SocialMediaSidebar } from "@/components/SocialMediaSidebar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, Mail, Github, Linkedin, Twitter, CheckCircle2, MessageCircle, TrendingUp, Search, Palette, Briefcase, GraduationCap, ImageIcon, Globe, Bot, Smartphone, Code2, Database, Layout, Server, Zap } from "lucide-react";
import heroImage from "@/assets/hero-profile.jpg";

const Index = () => {
  const phoneNumber = "+917382592333"; // WhatsApp number
  const displayPhone1 = "+91 7382591233";
  const displayPhone2 = "+91 9701290472";
  const email = "naveenksarill@gmail.com";

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = formData.get('name');
    const userEmail = formData.get('email');
    const message = formData.get('message');
    
    const mailtoLink = `mailto:${email}?subject=Message from ${name}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${userEmail}\n\nMessage:\n${message}`)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="min-h-screen bg-background relative">
      <ScrollAnimations />
      {/* <SocialMediaSidebar /> */}
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in-up">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
               Welcome to {" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  OrBoreh
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground">
                A creative professional specializing in digital marketing, SEO, brand design, 
                and business solutions. I help businesses grow their online presence and 
                achieve their goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="lg" className="gap-2" onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}>
                  View Services <ArrowRight className="h-5 w-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="gap-2"
                  onClick={() => window.location.href = `mailto:${email}?subject=Consultation Request`}
                >
                  <Mail className="h-5 w-5" />
                  Schedule a Consultation
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="gap-2"
                  onClick={() => window.location.href = `mailto:${email}`}
                >
                  <Mail className="h-5 w-5" />
                  Get in Touch
                </Button>
              </div>
              
              {/* Social Links */}
              <div className="flex gap-4 pt-4">
                <a 
                  href="https://github.com/kevinnani" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
                >
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>
            
            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-3xl animate-pulse"></div>
              <div className="absolute -inset-4 bg-gradient-to-r from-primary to-secondary rounded-3xl opacity-20 blur-2xl animate-glow"></div>
              <img 
                src={heroImage} 
                alt="Kevin Nani - Professional Profile" 
                className="relative rounded-3xl shadow-2xl w-full h-auto object-cover "
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Services That Drive Results
            </h2>
            <p className="text-xl text-muted-foreground">
              From marketing to design, I offer comprehensive freelancing services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
               {
                icon: Palette,
                title: "Graphic Design",
                description: "Transform ideas into stunning visuals that capture attention and communicate your message effectively."
              },
              {
                icon: TrendingUp,
                title: "Digital Marketing",
                description: "Drive growth with targeted campaigns that increase brand awareness and convert visitors into loyal customers."
              },
                {
                icon: Globe,
                title: "Website Design",
                description: "Build responsive static and dynamic websites that deliver exceptional user experiences and drive conversions."
              },
              {
                icon: Search,
                title: "SEO & Analytics",
                description: "Boost your search rankings and gain valuable insights to make data-driven decisions that maximize ROI."
              },
              {
                icon: Palette,
                title: "Brand Design",
                description: "Create a memorable brand identity that resonates with your audience and sets you apart from competitors."
              },
              {
                icon: Briefcase,
                title: "Business Strategy",
                description: "Develop strategic roadmaps that align with your goals and unlock new opportunities for sustainable growth."
              },
              {
                icon: GraduationCap,
                title: "Content Creation",
                description: "Engage your audience with compelling content that tells your story and drives meaningful interactions."
              },
              {
                icon: ImageIcon,
                title: "Social Media",
                description: "Build a strong social presence that connects with your community and amplifies your brand message."
              },
             
            
              {
                icon: Bot,
                title: "AI Services",
                description: "Leverage cutting-edge AI solutions to automate processes, enhance customer experiences, and gain competitive advantages."
              },
              {
                icon: Smartphone,
                title: "Chatbots",
                description: "Implement intelligent chatbots that provide 24/7 customer support, qualify leads, and boost engagement."
              },
              {
                icon: Briefcase,
                title: "Consulting",
                description: "Get expert guidance to navigate challenges, optimize operations, and achieve your business objectives."
              }
            ].map((service, index) => (
              <Card 
                key={index}
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:scale-105 border-border bg-card animate-fade-in relative overflow-hidden group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <CardHeader className="relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-primary to-secondary flex items-center justify-center mb-4 group-hover:animate-glow">
                    <service.icon className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-sm">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button 
                    variant="hero" 
                    className="w-full gap-2"
                    onClick={() => window.open(`https://wa.me/${phoneNumber}?text=Hi, I'm interested in ${service.title}`, '_blank')}
                  >
                    <MessageCircle className="h-4 w-4" />
                    Book via WhatsApp
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full gap-2"
                    onClick={() => window.location.href = `mailto:${email}?subject=Booking: ${service.title}`}
                  >
                    <Mail className="h-4 w-4" />
                    Book via Email
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="tech-stack" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              My Tech Stack
            </h2>
            <p className="text-xl text-muted-foreground">
              Technologies and frameworks I use to build exceptional digital experiences
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Code2,
                title: "HTML & CSS",
                description: "Semantic HTML5 and modern CSS3 with animations",
                skills: ["HTML5", "CSS3", "Flexbox", "Grid"]
              },
              {
                icon: Zap,
                title: "JavaScript",
                description: "Modern ES6+ JavaScript for dynamic applications",
                skills: ["ES6+", "DOM", "Async/Await", "APIs"]
              },
              {
                icon: Code2,
                title: "React.js",
                description: "Building scalable single-page applications",
                skills: ["Hooks", "Redux", "Context API", "Router"]
              },
              {
                icon: Server,
                title: "Node.js",
                description: "Server-side JavaScript for backend services",
                skills: ["Express", "REST APIs", "Auth", "Middleware"]
              },
              {
                icon: Database,
                title: "MySQL",
                description: "Relational database management",
                skills: ["SQL", "Design", "Joins", "Optimization"]
              },
              {
                icon: Palette,
                title: "Tailwind CSS",
                description: "Utility-first CSS framework",
                skills: ["Responsive", "Components", "Dark Mode"]
              },
              {
                icon: Layout,
                title: "Bootstrap",
                description: "Responsive web design framework",
                skills: ["Grid", "Components", "Utilities"]
              },
              {
                icon: Smartphone,
                title: "Material UI",
                description: "React Material Design components",
                skills: ["Components", "Theming", "Icons"]
              },
              {
                icon: Palette,
                title: "Adobe Photoshop",
                description: "Professional image editing",
                skills: ["Editing", "Digital Art", "Retouching"]
              },
              {
                icon: Palette,
                title: "Adobe Illustrator",
                description: "Vector graphics design",
                skills: ["Logos", "Illustrations", "Typography"]
              },
              {
                icon: Layout,
                title: "Figma",
                description: "Collaborative interface design",
                skills: ["UI Design", "Prototyping", "Wireframes"]
              },
              {
                icon: Palette,
                title: "Canva",
                description: "Easy graphic design platform",
                skills: ["Social Media", "Marketing", "Posters"]
              }
            ].map((tech, index) => (
              <Card 
                key={index}
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <CardHeader>
                  <div className="mb-4">
                    <tech.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{tech.title}</CardTitle>
                  <CardDescription className="text-sm">{tech.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {tech.skills.map((skill, idx) => (
                      <span key={idx} className="text-xs px-2 py-1 rounded-md bg-primary/10 text-primary">
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our Success Story
            </h2>
            <p className="text-xl text-muted-foreground">
              Numbers that speak for our commitment to excellence
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-xl transition-all hover:-translate-y-2 animate-fade-in">
              <CardHeader>
                <div className="mx-auto w-20 h-20 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center mb-4">
                  <CheckCircle2 className="h-10 w-10 text-primary-foreground" />
                </div>
                <CardTitle className="text-5xl font-bold mb-2 text-primary">150+</CardTitle>
                <CardDescription className="text-lg">Projects Completed</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center hover:shadow-xl transition-all hover:-translate-y-2 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <CardHeader>
                <div className="mx-auto w-20 h-20 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center mb-4">
                  <TrendingUp className="h-10 w-10 text-primary-foreground" />
                </div>
                <CardTitle className="text-5xl font-bold mb-2 text-primary">120+</CardTitle>
                <CardDescription className="text-lg">Happy Customers</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center hover:shadow-xl transition-all hover:-translate-y-2 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <CardHeader>
                <div className="mx-auto w-20 h-20 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center mb-4">
                  <Briefcase className="h-10 w-10 text-primary-foreground" />
                </div>
                <CardTitle className="text-5xl font-bold mb-2 text-primary">3+</CardTitle>
                <CardDescription className="text-lg">Years Experience</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      {/* <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About Me
            </h2>
            <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-primary">
              Naveen Kumar Sarilla
            </h3>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
              I am a <span className="text-primary font-semibold">front-end developer</span> with <span className="text-primary font-semibold">three years of experience</span> in building high-performing and interactive web applications. My expertise includes <span className="text-primary font-semibold">React.js, Redux, JavaScript, Tailwind CSS, and Node.js</span>, allowing me to create dynamic user interfaces and seamless user experiences.
            </p>
            <div className="max-w-2xl mx-auto space-y-3 text-left">
              <div className="flex items-start gap-3">
                <span className="text-primary text-xl">✓</span>
                <span className="text-muted-foreground">Passionate about crafting beautiful, responsive, and user-friendly web applications</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary text-xl">✓</span>
                <span className="text-muted-foreground">Skilled in modern web technologies and performance optimization</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary text-xl">✓</span>
                <span className="text-muted-foreground">Dedicated to delivering high-quality code and innovative solutions</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Computer Science Engineering",
                description: "My foundation in Computer Science Engineering has equipped me with strong problem-solving skills, data structures, and software development expertise."
              },
              {
                title: "Bachelor of Commerce",
                description: "This degree has provided me with a solid understanding of financial management, business operations, and analytics."
              },
              {
                title: "Master of Business Administration",
                description: "My MBA has enhanced my strategic thinking, leadership, and decision-making abilities, allowing me to approach projects with a business-oriented mindset."
              }
            ].map((edu, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all hover:-translate-y-1 animate-scale-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardHeader>
                  <CardTitle>{edu.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{edu.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let's Build Something Great Together
            </h2>
            <p className="text-xl text-muted-foreground mb-4">
              Whether you need marketing expertise, design services, or business consulting, 
              I'm here to help bring your vision to life.
            </p>
            <div className="space-y-2 text-lg">
              <p className="text-primary font-semibold">Contact No: {displayPhone1} | {displayPhone2}</p>
              <p className="text-primary font-semibold">Email: {email}</p>
            </div>
          </div>

          <Card className="hover:shadow-2xl transition-all">
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input name="name" placeholder="Your Name" required />
                </div>
                <div>
                  <Input name="email" type="email" placeholder="Your Email" required />
                </div>
                <div>
                  <Textarea name="message" placeholder="Your Message" rows={6} required />
                </div>
                <Button type="submit" variant="hero" size="lg" className="w-full gap-2">
                  Send Message <ArrowRight className="h-5 w-5" />
                </Button>
              </form>
            </CardContent>
          </Card>
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

      {/* Chatbot */}
      <Chatbot />
    </div>
  );
};

export default Index;
