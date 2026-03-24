"use client";

import Image from "next/image";

import Arrow from "@/public/arrow.svg";

export default function Hero() {
  return (
    <section className="relative w-screen overflow-hidden font-Excon" id="home">
      <div className="flex justify-between">
        <div className="flex flex-col items-start leading-[0.67] text-[26vw] -translate-x-[2vw]">
          <span>mahi</span>
          <span>kr</span>
        </div>

        <div className="flex flex-col text-[9vw] [writing-mode:vertical-rl] rotate-180 leading-none -translate-x-[0.5vw] items-start">
          <span>design</span>
          <span>recreate</span>
          <span>develop</span>
        </div>
      </div>
      <div className="relative flex justify-end m-[2.5vw] animate-up-down -translate-x-[12vw] will-change-transform">
        <Image className="w-[3vw]" src={Arrow} alt="arrow" />
      </div>
    </section>
  );
}
