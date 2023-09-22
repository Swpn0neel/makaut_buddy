"use client";
import React from "react";
// import { Divider } from "@nextui-org/react";
import { Accordion, AccordionItem } from "@nextui-org/react";
export default function FAQ() {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  return (
    <>
      <div className="px-32 py-32 flex">
        <div className="w-1/2 flex-col items-center space-y-5">
          <h1 className="text-5xl font-bold">FAQ</h1>
          <h3 className="text-xl">Frequently Asked Questions</h3>
        </div>

        <div className="w-1/2 text-white">
          <Accordion>
            <AccordionItem
              className="text-white"
              key="1"
              aria-label="Accordion 1"
              title="Accordion 1"
            >
              {defaultContent}
            </AccordionItem>
            <AccordionItem key="2" aria-label="Accordion 2" title="Accordion 2">
              {defaultContent}
            </AccordionItem>
            <AccordionItem key="3" aria-label="Accordion 3" title="Accordion 3">
              {defaultContent}
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </>
  );
}
