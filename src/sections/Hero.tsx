"use client";

import Image from "next/image";

import Arrow from "@/public/arrow.svg";

export default function Hero() {
  return (
    <>
      <div className="relative flex justify-between font-Excon" id="home">
        <div className="Hero-name flex flex-col -mx-12.5 items-start text-[500px] -mt-48">
          <span>mahi</span>
          <span className="-mt-104">kr</span>
        </div>
        <div className="Hero-work flex flex-col -rotate-90 items-start text-[170px] mb-35 -mt-6 text-hero-work justify-end">
          <span className="-mb-23">design</span>
          <span className="-mb-23">recreate</span>
          <span>develop</span>
        </div>
      </div>
      <div className="relative flex justify-end -mt-30 mr-60 animate-up-down">
        <Image src={Arrow} alt="arrow" />
      </div>
    </>
  );
}
