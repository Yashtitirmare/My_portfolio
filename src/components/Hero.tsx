import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

import { headerData } from "../data/headerData";

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated background glow */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/20 via-transparent to-transparent animate-pulse-glow" />

      {/* Content */}
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col items-center text-center space-y-8 animate-fade-in-up">
          {/* Avatar with glow effect */}
          <div className="relative">
            <div className="absolute inset-0 bg-primary/30 rounded-full blur-3xl animate-pulse-glow" />
            <img
              src={headerData.image}
              alt="Profile"
              className="relative w-48 h-48 rounded-full border-4 border-primary/50 glow-effect animate-float object-cover"
            />
          </div>

          {/* Name and title */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground text-glow">
              {headerData.title}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              {headerData.description}
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <a href="#contact">Get In Touch</a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#projects">View Projects</a>
            </Button>
          </div>

          {/* Social links */}
          <div className="flex gap-6 pt-4">
            <a
              href={headerData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-primary transition-colors p-3 rounded-full hover:bg-primary/10"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href={headerData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-primary transition-colors p-3 rounded-full hover:bg-primary/10"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href={`mailto:${headerData.email}`}
              className="text-foreground/70 hover:text-primary transition-colors p-3 rounded-full hover:bg-primary/10"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};
