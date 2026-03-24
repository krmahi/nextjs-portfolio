import { FloatingNav } from "../components/ui/Floatingnav";

import Hero from "../sections/Hero";
import Skills from "../sections/Skills";
import Showcase from "../sections/Showcase";
import Footer from "../sections/footer";

export default function Home() {
  const navItems = [
    { name: "Home", link: "#home" },
    { name: "Skills", link: "#skills" },
    { name: "Showcase", link: "#showcase" },
  ];
  return (
    <main className="flex flex-col text-center justify-center">
      <FloatingNav navItems={navItems} />
      <Hero />
      <Skills />
      <Showcase />
      <Footer />
    </main>
  );
}
