"use client";

import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { useRef } from "react";
import { useLenisScroll } from "../lib/lenisScroll";

import ShowcaseCard from "../components/ui/showcaseCards";
import showcaseArrow from "@/public/showcaseArrow.svg";

type showcaseProps = {
  images: (string | StaticImageData)[][];
};

export default function ShowcaseGrid({ images }: showcaseProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  useLenisScroll(containerRef, true);
  return (
    <div
      ref={containerRef}
      className="relative overflow-y-auto max-h-[44vw] overscroll-contain"
      data-prevent-lenis
    >
      <motion.div initial="hidden" animate="show">
        {images.map((image, index) => (
          <ShowcaseCard key={index} images={image} idx={`card-${index}`} />
        ))}
      </motion.div>

      <motion.button
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        onClick={() => {
          const container = containerRef.current;
          const target = document.getElementById("card-0");

          if (container && target) {
            const top =
              target.getBoundingClientRect().top -
              container.getBoundingClientRect().top +
              container.scrollTop;

            container.scrollTo({
              top,
              behavior: "smooth",
            });
          }
        }}
        className="fixed bottom-[2.5vw] right-[2vw] cursor-pointer z-50"
      >
        <Image src={showcaseArrow} alt="arrow" className="w-[5vw]" />
      </motion.button>
    </div>
  );
}
