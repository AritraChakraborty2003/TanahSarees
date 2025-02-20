import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css"; // Default styles (you can customize)

const faqs = [
  {
    question: "What is your return policy?",
    answer: "You can return items within 30 days of purchase.",
  },
  {
    question: "Do you offer international shipping?",
    answer: "Yes, we ship worldwide.",
  },
  {
    question: "How can I track my order?",
    answer: "You will receive a tracking link via email after shipping.",
  },
];

const ControlledAccordion = () => {
  return (
    <div className="w-full max-w-md mx-auto space-y-2">
      <Accordion allowZeroExpanded>
        {faqs.map((faq, index) => (
          <AccordionItem key={index} className="border-b border-gray-300">
            <AccordionItemHeading>
              <AccordionItemButton className="flex justify-between w-full px-4 py-3 text-left font-medium">
                {faq.question}
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className="px-4 pb-3 pt-1 text-gray-700">
              {faq.answer}
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default ControlledAccordion;
