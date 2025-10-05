import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

import { educationData } from "@/data/educationData";
import educationImage from "../assets/education/eduBlue.svg"

export const Education = () => {
  return (
    <section id="education" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-glow">
            {educationData.title}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Education Info */}
          <div className="space-y-6 animate-fade-in-up">
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-300 hover:glow-effect">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{educationData.date1}</h3>
                  <h3 className="font-semibold mb-1">{educationData.title1}</h3>
                  <p className="text-muted-foreground">
                    {educationData.description1}
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-300 hover:glow-effect">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{educationData.date2}</h3>
                  <h3 className="font-semibold mb-1">{educationData.title2}</h3>
                  <p className="text-muted-foreground">
                    {educationData.description2}
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/20 animate-scale-in flex justify-center items-center hover:glow-effect">
            <img
              src={educationImage}
              alt="About Image"
              className="w-full h-auto object-contain rounded-2xl"
            />
          </Card>
        </div>
      </div>
    </section>
  );
};
