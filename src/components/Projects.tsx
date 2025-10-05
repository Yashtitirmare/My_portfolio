import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

import { projectData } from "@/data/projectData";

export const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll
    ? projectData.projects
    : projectData.projects.slice(0, 3);
  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-glow">
            {projectData.title}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {projectData.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, index) => (
            <Card
              key={index}
              className="p-6 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-300 hover:glow-effect animate-scale-in group flex flex-col"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              {(project.github || project.live) && (
                <div className="flex gap-4 mt-auto">
                  {project.github && (
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="flex-1"
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  )}
                  {project.live && (
                    <Button variant="hero" size="sm" asChild className="flex-1">
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live
                      </a>
                    </Button>
                  )}
                </div>
              )}
            </Card>
          ))}
        </div>
        {/* View More Button */}
        <div className="text-center mt-10">
          <Button
            onClick={() => setShowAll(!showAll)}
            variant="outline"
            size="lg"
            className="flex-1 hover:glow-effect"
          >
            {showAll ? "View Less" : "View More"}
          </Button>
        </div>
      </div>
    </section>
  );
};
