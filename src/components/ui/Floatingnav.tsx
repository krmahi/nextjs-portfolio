"use client";
import { JSX, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { cn } from "../../lib/utils";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollY, "change", (current) => {
    const previous = scrollY.getPrevious() ?? 0;

    // Always show near top
    if (current < 50) {
      setVisible(true);
      return;
    }

    // Hide when scrolling down, show when scrolling up
    setVisible(current < previous);
  });

  return (
    <motion.div
      initial={false}
      animate={{
        y: visible ? 0 : -100,
        opacity: visible ? 1 : 0,
      }}
      transition={{ duration: 0.2 }}
      className={cn(
        "flex max-w-fit fixed top-10 inset-x-0 mx-auto z-50 items-center justify-center",
        className,
      )}
    >
      <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/80 px-2 py-1.5 shadow-lg shadow-black/10 backdrop-blur-md dark:bg-black/50">
        <div className="flex items-center gap-1">
          {navItems.map((navItem, idx) => (
            <a
              key={idx}
              href={navItem.link}
              className="flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-300 dark:hover:bg-white/10 dark:hover:text-white"
            >
              <span className="block sm:hidden">{navItem.icon}</span>
              <span className="hidden sm:block">{navItem.name}</span>
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
