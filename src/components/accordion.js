import React from "react";

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from "@reach/accordion";
import "@reach/accordion/styles.css";

import "./accordion.css";

export default function MyAccordion({ items }) {
  return (
    <Accordion>
      {items.map((item) => (
        <AccordionItem key={item}>
          <AccordionButton>{item.label}</AccordionButton>
          <AccordionPanel>
            <p>{item.text}</p>
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
