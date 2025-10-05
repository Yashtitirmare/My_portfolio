import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { achivementData } from "@/data/achivementData";


export const Achivements = () => {
    const [showAll, setShowAll] = useState(false);

     const displayedAchievements = showAll
    ? achivementData.achivements
    : achivementData.achivements.slice(0, 3);
  return (
    <section id="achivements" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-glow">
            {achivementData.title}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {achivementData.description}
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 ">
            
          {displayedAchievements.map((achivement, index) => (
            <Card
              key={index}
              className="p-6 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-300 hover:glow-effect animate-scale-in group flex flex-col"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <achivement.icon className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {achivement.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {achivement.description}
                </p>
              </div>
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
