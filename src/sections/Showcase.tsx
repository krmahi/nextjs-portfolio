import { AccordionGroup, AccordionItem } from "../components/ui/Accordion";

import ShowcaseGrid from "../components/showcaseGrids";

export default function showcase() {
  return (
    <div className="my-10">
      <div className="font-potta text-[17.5rem]">SHOWCASE</div>
      <AccordionGroup>
        <AccordionItem title="Graphics..Arts" index={0}>
          <ShowcaseGrid />
        </AccordionItem>

        <AccordionItem title="Product Designs" index={1}>
          <ShowcaseGrid />
        </AccordionItem>

        <AccordionItem title="Development" index={2}>
          <ShowcaseGrid />
        </AccordionItem>
      </AccordionGroup>
    </div>
  );
}
