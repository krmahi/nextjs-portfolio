import { Marquee } from "../components/ui/Marquee";
import RotatingSkill from "../components/rotatingSkill";

export default function Skills() {
  return (
    <div className="my-12" id="skills">
      <Marquee
        className="text-[9.4rem] font-ppneue"
        gap={60}
        // fadeEdges
        // fadeWidth={300}
        speed={70}
        speedOnHover={30}
      >
        <div>Graphic Designer</div>
        <RotatingSkill type="roles" angle={0} reverse />
        <div>illustrator</div>
        <RotatingSkill type="roles" angle={50} reverse />
        <div>Digital Artist</div>
        <RotatingSkill type="roles" angle={100} reverse />
      </Marquee>
      <Marquee
        className="text-[7.5rem] -my-15.5 font-ppneue"
        gap={10}
        // fadeEdges
        // fadeWidth={500}
        speed={70}
        speedOnHover={30}
        reverse
      >
        <div>Adobe Photoshop </div>
        <RotatingSkill type="tools" angle={0} />
        <div>Fresco</div>
        <RotatingSkill type="tools" angle={50} />
        <div>Figma</div>
        <RotatingSkill type="tools" angle={100} />
        <div>Adobe Illustrator</div>
        <RotatingSkill type="tools" angle={270} />
      </Marquee>
    </div>
  );
}
