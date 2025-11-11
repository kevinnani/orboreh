import { NavLink } from "@/components/NavLink";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import OrBoreh from "../assets/OrBoreh.png"

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <NavLink to="/" className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            <img  className="h-10 w-auto sm:h-12 md:h-14 lg:h-16 object-contain" src={OrBoreh} alt="" />
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <a
              href="#home"
              className="text-foreground hover:text-primary transition-colors"
            >
              Home
            </a>
            <a
              href="#services"
              className="text-foreground hover:text-primary transition-colors"
            >
              Services
            </a>
            <a
              href="#tech-stack"
              className="text-foreground hover:text-primary transition-colors"
            >
              Tech Stack
            </a>
            <NavLink
              to="/projects"
              className="text-foreground hover:text-primary transition-colors"
              activeClassName="text-primary font-semibold"
            >
              Projects
            </NavLink>
            <a
              href="#contact"
              className="text-foreground hover:text-primary transition-colors"
            >
              Contact
            </a>
            <ThemeToggle />
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => window.location.href = 'mailto:naveenksarill@gmail.com'}
            >
              Get In Touch
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4">
            <a
              href="#home"
              className="block text-foreground hover:text-primary transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Home
            </a>
            <a
              href="#services"
              className="block text-foreground hover:text-primary transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Services
            </a>
            <a
              href="#tech-stack"
              className="block text-foreground hover:text-primary transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Tech Stack
            </a>
            <NavLink
              to="/projects"
              className="block text-foreground hover:text-primary transition-colors py-2"
              activeClassName="text-primary font-semibold"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </NavLink>
            <a
              href="#contact"
              className="block text-foreground hover:text-primary transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
            <div className="flex items-center gap-4">
              <ThemeToggle />
              <Button 
                variant="hero" 
                size="lg" 
                className="flex-1"
                onClick={() => window.location.href = 'mailto:naveenksarill@gmail.com'}
              >
                Get In Touch
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
