/* eslint-disable no-unused-vars */

import { useContext, useState } from "react";
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
import { AppContext } from "../../AppContext/AppContext";

const FilterAccordion = () => {
  const [openItems, setOpenItems] = useState(["filter1", "filter2"]); // First two open by default
  const [priceRange, setPriceRange] = useState([500, 5000]); // Default price range
  const {
    sareeData,
    setSareeData,
    activeFilter,
    setActiveFilter,
    filteredData,
    setFilteredData,
  } = useContext(AppContext);
  const [rating, setRating] = useState("");

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
      answer: (
        <div className="p-4">
          <label className="block text-gray-700 font-bold mb-2">
            Select Rating:
          </label>
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((num) => (
              <button
                key={num}
                className={`px-4 py-2 border rounded-lg shadow-md ${
                  rating === num
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
                onClick={() => setRating(num)}
              >
                {num}
              </button>
            ))}
          </div>
        </div>
      ),
    },
  ];

  return (
    <>
      <div className="w-full max-w-3xl mx-auto space-y-[3vmin]">
        <Accordion
          allowMultipleExpanded
          allowZeroExpanded
          preExpanded={openItems}
          onChange={setOpenItems}
        >
          {filters.map((filter) => (
            <AccordionItem
              key={filter.id}
              uuid={filter.id}
              className="border-b border-gray-300"
            >
              <AccordionItemHeading>
                <AccordionItemButton className="flex justify-between w-full px-4 py-3 text-left font-medium">
                  {filter.question}
                  <ChevronDownIcon
                    className={`w-5 h-5 transition-transform ${
                      openItems.includes(filter.id) ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className="px-4 pb-3 pt-1 text-gray-700">
                {filter.answer}
              </AccordionItemPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      {/* Filter & Reset Buttons */}
      <div className="flex gap-3 mt-5">
        <button
          className="bg-blue-600 text-white p-2 w-[40%] text-md font-Montserrat"
          onClick={() => {
            setActiveFilter(true);
            setFilteredData(
              sareeData.filter((saree) => saree.rating === rating)
            );

            console.log(sareeData);
          }}
        >
          Apply Filter
        </button>
        <button
          className="bg-gray-600 text-white p-2 w-[40%] text-md font-Montserrat"
          onClick={() => {
            setActiveFilter(false);
          }}
        >
          Reset Filter
        </button>
      </div>
    </>
  );
};

export default FilterAccordion;
