import React from "react";
import { Marquee } from "../components/ui/Marquee";
import RotatingSkill from "../components/rotatingSkill";

export default function Skills() {
  const Roles = [
    "Graphic Designer",
    <RotatingSkill type="roles" angle={0} reverse />,
    "illustrator",
    <RotatingSkill type="roles" angle={50} reverse />,
    "Digital Artist",
    <RotatingSkill type="roles" angle={100} reverse />,
  ];
  const Tools = [
    "Adobe Photoshop",
    <RotatingSkill type="tools" angle={0} />,
    "Fresco",
    <RotatingSkill type="tools" angle={50} />,
    "Figma",
    <RotatingSkill type="tools" angle={100} />,
    "Adobe Illustrator",
    <RotatingSkill type="tools" angle={270} />,
  ];
  return (
    <div className="my-[2vw]" id="skills">
      <Marquee
        className="text-[8vw] font-ppneue"
        gap={3}
        // fadeEdges
        // fadeWidth={500}
        speed={70}
        speedOnHover={30}
      >
        {Roles.map((Roles, index) => (
          <React.Fragment key={index}>{Roles}</React.Fragment>
        ))}
      </Marquee>
      <Marquee
        className="text-[6.3vw] -translate-y-[3vw] font-ppneue"
        gap={3}
        // fadeEdges
        // fadeWidth={500}
        speed={70}
        speedOnHover={30}
        reverse
      >
        {Tools.map((Tools, index) => (
          <React.Fragment key={index}>{Tools}</React.Fragment>
        ))}
      </Marquee>
    </div>
  );
}
