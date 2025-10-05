import { Card } from "@/components/ui/card";

import {aboutData} from "@/data/aboutData";

export const About = () => {

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-glow">{aboutData.title}</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {aboutData.description}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {aboutData.features.map((feature, index) => (
            <Card
              key={index}
              className="p-8 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-300 hover:glow-effect animate-scale-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <feature.icon className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
