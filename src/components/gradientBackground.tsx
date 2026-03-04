import Image from "next/image";
import heroGradient from "../../public/heroGradient.svg";

export default function GradientBackground() {
  return (
    <div className="absolute top-[20vh] left-[20vw] blur-[200px] z-[-1]">
      <Image src={heroGradient} alt="Hero Gradient" />
    </div>
  );
}
