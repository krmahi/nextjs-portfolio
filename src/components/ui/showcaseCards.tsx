"use client";

import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";

type ShowcaseCardProps = {
  images: (string | StaticImageData)[];
  title?: string;
};

export default function ShowcaseCard({ images, title }: ShowcaseCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.01, y: -6 }}
      className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-6 relative h-187.5 rounded-2xl overflow-hidden bg-foreground my-14 mx-23 p-14"
    >
      {images.map((image, index) => (
        <div key={index} className="relative overflow-hidden rounded-2xl">
          <Image
            src={image}
            alt={title ?? "showcase"}
            fill
            className="object-cover object-center"
          />
        </div>
      ))}
    </motion.div>
  );
}
