"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

import github from "@/public/github.svg";
import instagram from "@/public/instagram.svg";
import behance from "@/public/behance.svg";

export default function Footer() {
  const social = [
    { path: behance, alt: "behancelogo", link: "behance.com" },
    { path: instagram, alt: "instagramlogo", link: "instagram.com" },
    { path: github, alt: "githublogo", link: "github.com" },
  ];
  const { scrollYProgress } = useScroll();

  const y = useTransform(scrollYProgress, [0.95, 1], ["0%", "15%"]);

  return (
    <div className="relative mx-[6vw] mb-[10vw]">
      <div className="relative z-10 bg-[url('/texture-slice.webp')] bg-repeat bg-auto h-[24vw] rounded-[4vw] py-[2vw] px-[5vw] overflow-clip">
        <div className="flex justify-between">
          <div className="flex gap-[2vw]">
            {social.map((img, index) => (
              <span key={index} className="flex justify-center items-center">
                <a href={img.link}>
                  <Image src={img.path} alt={img.alt} className="w-[3vw]" />
                </a>
              </span>
            ))}
          </div>
          <div className="font-ppneue text-[1.8vw]">Indore, India</div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 font-potta text-[25vw] leading-[16vw] flex items-end justify-center -z-50">
          mahikr
        </div>
      </div>
      <motion.div
        style={{ y }}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
        viewport={{ once: false }}
        className="absolute left-0 right-0 bottom-0 mx-auto w-full h-[24vw] bg-footer rounded-[4vw] z-0 flex items-end justify-center pb-[0.7vw] "
      >
        <div className="font-ppneue text-[1.6vw]">mahesh.kr.2277@gmail.com</div>
      </motion.div>
    </div>
  );
}
