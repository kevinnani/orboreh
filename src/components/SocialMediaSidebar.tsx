import { useState } from "react";
import { Github, Linkedin, Twitter, Instagram, Facebook } from "lucide-react";

export const SocialMediaSidebar = () => {
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/kevinnani",
      color: "hover:bg-[#333]",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "#",
      color: "hover:bg-[#0077b5]",
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: "#",
      color: "hover:bg-[#1DA1F2]",
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "#",
      color: "hover:bg-[#E4405F]",
    },
    {
      name: "Facebook",
      icon: Facebook,
      url: "#",
      color: "hover:bg-[#1877F2]",
    },
  ];

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-3 animate-slide-in-right">
      {socialLinks.map((social) => (
        <div key={social.name} className="relative group">
          <a
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-12 h-12 rounded-full border-2 border-primary bg-background flex items-center justify-center transition-all duration-300 hover:scale-110 hover:border-transparent ${social.color} hover:text-white shadow-lg hover:shadow-xl`}
            onMouseEnter={() => setHoveredIcon(social.name)}
            onMouseLeave={() => setHoveredIcon(null)}
          >
            <social.icon className="h-5 w-5" />
          </a>
          
          {/* Tooltip */}
          <div
            className={`absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-foreground text-background rounded-lg text-sm font-medium whitespace-nowrap pointer-events-none transition-all duration-300 ${
              hoveredIcon === social.name
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-2"
            }`}
          >
            {social.name}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full w-0 h-0 border-8 border-transparent border-l-foreground" />
          </div>
        </div>
      ))}
    </div>
  );
};
