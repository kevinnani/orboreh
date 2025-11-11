import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  TrendingUp, 
  Search, 
  Palette, 
  Briefcase, 
  GraduationCap, 
  ImageIcon,
  ArrowRight,
  CheckCircle2
} from "lucide-react";

const services = [
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description: "Strategic marketing campaigns that drive growth and engagement across all digital channels.",
    features: [
      "Social Media Marketing",
      "Content Strategy",
      "Email Campaigns",
      "Analytics & Insights"
    ]
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Boost your online visibility and rank higher on search engines with proven SEO strategies.",
    features: [
      "Keyword Research",
      "On-Page SEO",
      "Link Building",
      "Technical SEO Audit"
    ]
  },
  {
    icon: Palette,
    title: "Brand Design",
    description: "Create a memorable brand identity that resonates with your target audience.",
    features: [
      "Logo Design",
      "Brand Guidelines",
      "Visual Identity",
      "Color Palette"
    ]
  },
  {
    icon: Briefcase,
    title: "Business Consulting",
    description: "Strategic business solutions to optimize operations and accelerate growth.",
    features: [
      "Business Strategy",
      "Market Analysis",
      "Process Optimization",
      "Growth Planning"
    ]
  },
  {
    icon: GraduationCap,
    title: "Educational Marketing",
    description: "Specialized marketing solutions for schools, colleges, and educational startups.",
    features: [
      "Enrollment Campaigns",
      "Student Engagement",
      "Educational Content",
      "Campus Branding"
    ]
  },
  {
    icon: ImageIcon,
    title: "Poster & Graphics Design",
    description: "Eye-catching designs for marketing materials, events, and business promotions.",
    features: [
      "Event Posters",
      "Business Flyers",
      "Social Media Graphics",
      "Print Materials"
    ]
  }
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Services That Drive Results
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            From marketing to design, I offer comprehensive freelancing services to help your business thrive in the digital age.
          </p>
          <Button variant="hero" size="lg" className="gap-2">
            Start Your Project <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border bg-card"
              >
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-primary to-secondary flex items-center justify-center mb-4">
                    <service.icon className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-foreground">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Take Your Business to the Next Level?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's collaborate and create something amazing together. Get in touch today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="gap-2">
              Schedule a Consultation <ArrowRight className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg">
              View Portfolio
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

export default Services;
