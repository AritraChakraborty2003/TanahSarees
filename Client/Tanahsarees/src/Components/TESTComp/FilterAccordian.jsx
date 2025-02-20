/* eslint-disable react/jsx-key */
import { useState } from "react";
import { Range } from "react-range";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import "react-accessible-accordion/dist/fancy-example.css"; // Default styles

const FilterAccordion = () => {
  const [openItems, setOpenItems] = useState(["filter1", "filter2"]); // First two open by default
  const [priceRange, setPriceRange] = useState([500, 5000]); // Default price range in ₹

  const filters = [
    {
      id: "filter1",
      question: "Category",
      answer:
        "Choose from categories like Electronics, Fashion, and Home Appliances.",
    },
    {
      id: "filter2",
      question: "Price Range (₹)",
      answer: (
        <div className="p-4">
          {/* Price Range Slider */}
          <Range
            step={100}
            min={0}
            max={10000}
            values={priceRange}
            onChange={setPriceRange}
            renderTrack={({ props, children }) => (
              <div
                {...props}
                className="h-2 bg-gray-300 rounded-full w-full relative"
              >
                {children}
              </div>
            )}
            renderThumb={({ props }) => (
              <div
                {...props}
                className="w-5 h-5 bg-red-500 rounded-full cursor-pointer"
              />
            )}
          />
          {/* Price Display */}
          <div className="flex justify-between mt-2 text-sm">
            <span>₹{priceRange[0]}</span>
            <span>₹{priceRange[1]}</span>
          </div>
        </div>
      ),
    },
    {
      id: "filter3",
      question: "Brand",
      answer: "Select your preferred brand from a wide range of options.",
    },
    {
      id: "filter4",
      question: "Ratings",
      answer: "Filter products based on customer ratings and reviews.",
    },
    {
      id: "filter5",
      question: "Availability",
      answer: "Check stock availability before making a purchase.",
    },
    {
      id: "filter6",
      question: "Discounts",
      answer: "View products that are currently on discount or promotion.",
    },
  ];

  return (
    <>
      <div className="w-full max-w-3xl mx-auto space-y-[3vmin]">
        <Accordion
          allowMultipleExpanded
          allowZeroExpanded
          preExpanded={openItems}
          onChange={(ids) => setOpenItems(ids)}
        >
          {filters.map((filter) => (
            <div className="flex flex-col mt-[2.15vmin]">
              <AccordionItem
                key={filter.id}
                uuid={filter.id}
                className=" border-b border-gray-300"
              >
                <AccordionItemHeading>
                  <AccordionItemButton className="flex justify-between w-full px-4 py-3 text-left font-medium transition-all duration-300">
                    {filter.question}
                    {/* Arrow animation */}
                    <ChevronDownIcon
                      className={`w-5 h-5 transition-transform duration-300 ${
                        openItems.includes(filter.id)
                          ? "rotate-180"
                          : "rotate-0"
                      }`}
                    />
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className="px-4 pb-3 pt-1 text-gray-700 transition-all duration-300 ease-in-out">
                  {filter.answer}
                </AccordionItemPanel>
              </AccordionItem>
            </div>
          ))}
        </Accordion>
      </div>
      <button className="mt-5 ml-3 bg-blue-600 text-white p-2 w-[40%] text-md font-Montserrat">
        Filter
      </button>
    </>
  );
};

export default FilterAccordion;
