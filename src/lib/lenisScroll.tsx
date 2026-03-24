"use client";
import Lenis from "lenis";
import { useEffect } from "react";

export function useLenisScroll(
  ref?: React.RefObject<HTMLElement | null>,
  isInner = false,
) {
  useEffect(() => {
    const lenis = new Lenis({
      wrapper: ref?.current || window,
      content: ref?.current || document.documentElement,
      lerp: isInner ? 0.15 : 0.08,
      smoothWheel: true,
      allowNestedScroll: true,
      overscroll: false,
      autoResize: true,
      wheelMultiplier: 0.7,
    });

    let rafId: number;

    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, [ref]);
}
