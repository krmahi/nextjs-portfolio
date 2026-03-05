import { AccordionGroup, AccordionItem } from "../components/ui/Accordion";

export default function showcase() {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  return (
    <div className="my-10">
      <div className="font-potta text-[17.5rem]">SHOWCASE</div>
      <AccordionGroup>
        <AccordionItem title="Graphics..Arts" index={0}>
          Your cards here
        </AccordionItem>

        <AccordionItem title="Product Designs" index={1}>
          Your cards here
        </AccordionItem>

        <AccordionItem title="Development" index={2}>
          Your cards here
        </AccordionItem>
      </AccordionGroup>
    </div>
  );
}
