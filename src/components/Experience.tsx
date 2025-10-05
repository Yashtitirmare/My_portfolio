import { Card } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

import { experienceData } from "@/data/experienceData";
import experienceImage from "../assets/experience/expBlue.svg"

export const Experience = () => {
  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-glow">
            {experienceData.title}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Education Info */}
          <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/20 animate-scale-in flex justify-center items-center hover:glow-effect">
            <img
              src={experienceImage}
              alt="Experience Image"
              className="w-full h-auto object-contain rounded-2xl"
            />
          </Card>

          <div className="space-y-6 animate-fade-in-up">
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-300 hover:glow-effect">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{experienceData.date1}</h3>
                  <h3 className="font-semibold mb-1">{experienceData.title1}</h3>
                  <p className="text-muted-foreground">
                    {experienceData.description1}
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
                  <h3 className="font-semibold mb-1">{experienceData.date2}</h3>
                  <h3 className="font-semibold mb-1">{experienceData.title2}</h3>
                  <p className="text-muted-foreground">
                    {experienceData.description2}
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
                  <h3 className="font-semibold mb-1">{experienceData.date3}</h3>
                  <h3 className="font-semibold mb-1">{experienceData.title3}</h3>
                  <p className="text-muted-foreground">
                    {experienceData.description3}
                  </p>
                </div>
              </div>
            </Card>
          </div>

          
        </div>
      </div>
    </section>
  );
};
