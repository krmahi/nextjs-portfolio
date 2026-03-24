import { AccordionGroup, AccordionItem } from "../components/ui/Accordion";

import ShowcaseGrid from "../components/showcaseGrids";
import Sage from "@/public/Sage.jpg";
import brainSide from "@/public/side.png";
import brainBack from "@/public/back.png";

export default function showcase() {
  const contents = [
    {
      title: "Graphics..Arts",
      images: [[brainBack, brainSide], [Sage]],
    },
    {
      title: "Product Designs",
      images: [[Sage], [brainBack, brainSide]],
    },
    {
      title: "Development",
      images: [[brainBack, brainSide], [Sage]],
    },
  ];
  return (
    <section className="-my-[4vw]">
      <div className="font-potta text-[15vw] -mb-[2vw]">SHOWCASE</div>
      <AccordionGroup>
        {contents.map((content, index) => (
          <AccordionItem key={index} title={content.title} index={index}>
            <ShowcaseGrid images={content.images} />
          </AccordionItem>
        ))}
      </AccordionGroup>
    </section>
  );
}
