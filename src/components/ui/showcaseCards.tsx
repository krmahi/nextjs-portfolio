"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type ShowcaseCardProps = {
  image: string;
  title?: string;
};

export default function ShowcaseCard({ image, title }: ShowcaseCardProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
        scale: 1,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      exit={{
        opacity: 0,
        scale: 1,
      }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
      }}
      viewport={{
        // margin: "-80px  ",
        once: true,
      }}
      // whileHover={{
      //   scale: 1.03,
      //   y: -6,
      // }}
      className="relative rounded-2xl overflow-auto bg-neutral-800 my-14 mx-23 p-14"
    >
      <Image
        src={image}
        alt={title ?? "showcase"}
        width={800}
        height={800}
        className="w-full h-full object-cover"
      />
    </motion.div>
  );
}
