"use client";

import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";

type ShowcaseCardProps = {
  images: (string | StaticImageData)[];
  title?: string;
  idx?: string;
};

export default function ShowcaseCard({
  images,
  title,
  idx,
}: ShowcaseCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
      // whileHover={{ scale: 1.01, y: -6 }}
      className="bg-[url('/texture-slice.webp')] bg-repeat bg-auto grid grid-cols-[repeat(auto-fit,minmax(22vw,1fr))] gap-[2vw] relative h-[44vw] rounded-2xl my-[3vw] mx-[4vw] p-[3vw] will-change-transform border-[0.2vw] border-[#D8CFB7]"
      id={idx}
    >
      {images.map((image, index) => (
        <div key={index} className="relative overflow-hidden rounded-2xl">
          <Image
            src={image}
            alt={title ?? "showcase"}
            fill
            className="object-cover object-center scale-110 transition-all duration-700 ease-in-out hover:scale-100 hover:brightness-95 will-change-transform"
          />
        </div>
      ))}
    </motion.div>
  );
}
