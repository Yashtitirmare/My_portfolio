import Marquee from "react-fast-marquee";
import "../styles/skills.css"

import { skillsData } from '../data/skillData'
import { skillsImage } from '../utils/skillsImage'

export const Skills = () => {
  
  return (
    <div className="py-20 skills" id="skills">
            <div className="skillsHeader">
                <h2 className="text-glow">Skills</h2>
            </div>
            <div className="skillsContainer">
                <div className="skill--scroll">
                    <Marquee 
                        gradient={false} 
                        speed={80} 
                        pauseOnHover={true}
                        pauseOnClick={true} 
                        delay={0}
                        play={true} 
                        direction="left"
                    >
                        {skillsData.map((skill, id) => (
                            <div className="skill--box" key={id}>
                                <img src={skillsImage(skill)} alt={skill} />
                                <h3 >
                                    {skill}
                                </h3>
                            </div>
                        ))}
                    </Marquee>
                </div>
            </div>
        </div>
  );
};
