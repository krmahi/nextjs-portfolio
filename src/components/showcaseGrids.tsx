"use client";

import { motion } from "framer-motion";
import ShowcaseCard from "../components/ui/showcaseCards";
import MiddleHero from "../../public/middleHero.svg";

export default function ShowcaseGrid() {
  return (
    <motion.div initial="hidden" animate="show">
      <ShowcaseCard image={MiddleHero} />
      <ShowcaseCard image={MiddleHero} />
      <ShowcaseCard image={MiddleHero} />
      <ShowcaseCard image={MiddleHero} />
    </motion.div>
  );
}
