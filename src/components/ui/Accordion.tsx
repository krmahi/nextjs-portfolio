"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

type AccordionContextType = {
  openIndex: number | null;
  setOpenIndex: (index: number | null) => void;
};

const AccordionContext = createContext<AccordionContextType | null>(null);

// --------------------
// Accordion Group
// --------------------

export function AccordionGroup({
  children,
  defaultOpen = null,
}: {
  children: ReactNode;
  defaultOpen?: number | null;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpen);

  return (
    <AccordionContext.Provider value={{ openIndex, setOpenIndex }}>
      <div>{children}</div>
    </AccordionContext.Provider>
  );
}

export function AccordionItem({
  title,
  children,
  index,
}: {
  title: string;
  children: ReactNode;
  index: number;
}) {
  const context = useContext(AccordionContext);

  if (!context) {
    throw new Error("AccordionItem must be used inside AccordionGroup");
  }

  const { openIndex, setOpenIndex } = context;
  const isOpen = openIndex === index;

  return (
    <div className="text-accordion border-b border-[#F9F6EA]">
      {/* Header */}
      <button
        onClick={() => setOpenIndex(isOpen ? null : index)}
        className="py-[2.1vw]"
      >
        <h2 className="text-[7vw] font-triptych tracking-wide ">{title}</h2>
      </button>

      {/* Content */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div
              className="
          max-h-[43vw]
          overflow-y-auto 
        "
            >
              <div>{children}</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
