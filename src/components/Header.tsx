import Image from "next/image";
import pattern_red from "../../public/pattern-red.svg";
import pattern_blue from "../../public/pattern-blue.svg";

export default function Hero() {
  return (
    <div className="relative flex justify-between items-center font-array text-[35px] mx-20 my-10">
      <div className="relative">
        mahesh
        <Image
          className="absolute top-0 right-0"
          src={pattern_red}
          alt="Pattern Red"
        />
      </div>
      <div className="relative">
        kumar
        <Image
          className="absolute top-0 right-0"
          src={pattern_blue}
          alt="Pattern Blue"
          fill
        />
      </div>
    </div>
  );
}
