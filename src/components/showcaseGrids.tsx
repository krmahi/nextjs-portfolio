"use client";

import { motion } from "framer-motion";
import ShowcaseCard from "../components/ui/showcaseCards";
import Sage from "@/public/Sage.jpg";

export default function ShowcaseGrid() {
  const arts = [[Sage, Sage], [Sage], [Sage], [Sage]];
  return (
    <motion.div initial="hidden" animate="show">
      {arts.map((art, index) => (
        <ShowcaseCard key={index} images={art} />
      ))}
    </motion.div>
  );
}
