"use client";
import Image from "next/image";

import Header from "@/src/components/Header";
import middleHero from "../../public/middleHero.svg";
import Arrow from "../../public/arrow.svg";

export default function Hero() {
  return (
    <div className="relative" id="home">
      <Header />
      <div className="flex justify-center items-center my-40">
        <Image src={middleHero} alt="Middle Hero" />
      </div>
      <Image
        className="absolute animate-up-down bottom-0 right-40"
        src={Arrow}
        alt="Arrow"
      />
    </div>
  );
}
