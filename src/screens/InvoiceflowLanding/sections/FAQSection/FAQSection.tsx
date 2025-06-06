import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../components/ui/accordion";

export const FAQSection = (): JSX.Element => {
  const faqItems = [
    {
      question:
        "How does InvoiceFlow integrate with my existing accounting software?",
      answer:
        "InvoiceFlow offers integrations with popular accounting platforms such as QuickBooks, Xero, and NetSuite. We also provide API access for custom integrations.",
    },
    {
      question: "What security measures are in place to protect my data?",
      answer: "",
    },
    {
      question: "Can I customize the invoice templates to match my brand?",
      answer: "",
    },
  ];

  return (
    <div className="flex flex-col items-start gap-3 p-4 w-full">
      <Accordion type="single" collapsible className="w-full">
        {faqItems.map((item, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="mb-3 bg-[#fcf9f7] rounded-xl border border-solid border-[#e8e2ce] px-3 md:px-[15px] py-2 md:py-[7px]"
          >
            <AccordionTrigger className="py-2 hover:no-underline min-h-[48px]">
              <span className="font-medium text-[#1c160c] text-sm leading-[21px] text-left">
                {item.question}
              </span>
            </AccordionTrigger>
            <AccordionContent>
              <div className="text-[#9e8747] text-sm leading-[21px] font-normal pb-2">
                {item.answer}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};