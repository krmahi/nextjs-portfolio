import { FloatingNav } from "../components/ui/Floatingnav";

import Hero from "../sections/Hero";
import Skills from "../sections/Skills";
import GradientBackground from "../components/gradientBackground";
import Showcase from "../sections/Showcase";

export default function Home() {
  return (
    <main className="flex flex-col text-center justify-center">
      <GradientBackground />
      <FloatingNav
        navItems={[
          { name: "Home", link: "#home" },
          { name: "Skills", link: "#skills" },
          { name: "Showcase", link: "#showcase" },
        ]}
      />
      <Hero />
      <Skills />
      <Showcase />
    </main>
  );
}
