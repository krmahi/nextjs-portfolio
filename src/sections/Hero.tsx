"use client";
import Image from "next/image";

import Arrow from "@/public/arrow.svg";

export default function Hero() {
  return (
    <div className="relative" id="home">
      <Image
        className="absolute animate-up-down bottom-0 right-40"
        src={Arrow}
        alt="Arrow"
      />
    </div>
  );
}
