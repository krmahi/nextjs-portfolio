import Image from "next/image";
import RolesSVG from "../../public/RolesSVG.svg";
import ToolsSVG from "../../public/ToolsSVG.svg";

export type RotatingProps = {
  type: "roles" | "tools";
  angle?: number;
  reverse?: boolean;
};
export default function RotatingSkill({
  type = "roles",
  angle = 0,
  reverse = false,
}: RotatingProps) {
  const src = type == "roles" ? RolesSVG : ToolsSVG;
  return (
    <Image
      style={{ "--rotate-angle": `${angle}deg` } as React.CSSProperties}
      className={`rotate-(--rotate-angle) ${reverse ? "animate-spin-slow-reverse" : "animate-spin-slow"}`}
      src={src}
      alt={type}
    />
  );
}
