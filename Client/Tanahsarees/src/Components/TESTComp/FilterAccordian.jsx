/* eslint-disable no-unused-vars */

import { useContext, useState, useEffect } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import "react-accessible-accordion/dist/fancy-example.css";
import { AppContext } from "../../AppContext/AppContext";
import PriceRangeSlider from "./PriceRangeSlider";

const FilterAccordion = () => {
  const [openItems, setOpenItems] = useState(["filter1", "filter2"]); // First two open by default
  const {
    sareeData,
    setSareeData,
    activeFilter,
    setActiveFilter,
    filteredData,
    setFilteredData,
  } = useContext(AppContext);

  const [filtersValue, setFiltersValue] = useState({
    type: "",
    color: "",
    occasion: "",
    material: "",
    rating: "",
    price: [100, 100000], // Default price range
  });

  const categories = {
    type: ["Floral", "Paestral", "Sequince", "Printed"],
    color: ["Red", "Orange", "Blue", "Yellow", "Green", "White", "Maroon"],
    occasion: [
      "Summer Collection",
      "Wedding",
      "Engagement",
      "Reception",
      "Haldi",
      "Festive",
      "Party",
    ],
    material: [
      "raw silk",
      "Mansoor",
      "Crape",
      "Georgette",
      "Chinia",
      "Tissue",
      "rawmango",
    ],
  };

  const handleChange = (category, value) => {
    setFiltersValue((prevFilters) => ({
      ...prevFilters,
      [category]: value,
    }));
  };

  const applyFilters = () => {
    console.log("applyFilters called");

    const { type, color, occasion, material, rating, price } = filtersValue;

    const filterSarees = sareeData.filter((saree) => {
      return (
        (type ? saree.type.toLowerCase() === type.toLowerCase() : true) &&
        (color ? saree.colour.toLowerCase() === color.toLowerCase() : true) &&
        (occasion
          ? saree.occasion.toLowerCase() === occasion.toLowerCase()
          : true) &&
        (material
          ? saree.material.toLowerCase() === material.toLowerCase()
          : true) &&
        (rating ? saree.rating === parseInt(rating) : true) && // Ensure exact match for rating
        saree.price >= price[0] &&
        saree.price <= price[1] // Ensure price falls in range
      );
    });

    setActiveFilter(true);
    setFilteredData(filterSarees);
  };

  useEffect(() => {
    console.log("Updated Filters:", filtersValue);
  }, [filtersValue]);

  const filters = [
    {
      id: "filter1",
      question: "Category",
      answer: (
        <>
          {categories.type.map((option) => (
            <label key={option} className="flex items-center space-x-2 mb-1">
              <input
                type="radio"
                name="type"
                value={option}
                checked={filtersValue.type === option}
                onChange={() => handleChange("type", option)}
                className="cursor-pointer"
              />
              <span className="cursor-pointer">{option}</span>
            </label>
          ))}
        </>
      ),
    },
    {
      id: "filter2",
      question: "Price Range (₹)",
      answer: (
        <>
          <PriceRangeSlider
            min={100}
            max={100000}
            step={100}
            w={"70%"}
            onChange={(values) => handleChange("price", values)}
          />
        </>
      ),
    },
    {
      id: "filter3",
      question: "Colour",
      answer: (
        <>
          {categories.color.map((option) => (
            <label key={option} className="flex items-center space-x-2 mb-1">
              <input
                type="radio"
                name="color"
                value={option}
                checked={filtersValue.color === option}
                onChange={() => handleChange("color", option)}
                className="cursor-pointer"
              />
              <span className="cursor-pointer">{option}</span>
            </label>
          ))}
        </>
      ),
    },
    {
      id: "filter4",
      question: "Ratings",
      answer: (
        <div className="p-4">
          <h3 className="font-semibold mb-2">Select Rating</h3>
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((num) => (
              <label
                key={num}
                className="flex items-center space-x-2 cursor-pointer"
              >
                <input
                  type="radio"
                  name="rating"
                  value={num}
                  checked={filtersValue.rating === num.toString()}
                  onChange={() => handleChange("rating", num.toString())}
                  className="hidden"
                />
                <span
                  className={`px-4 py-2 border rounded-lg shadow-md ${
                    filtersValue.rating === num.toString()
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-gray-700"
                  }`}
                >
                  {num}
                </span>
              </label>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: "filter5",
      question: "Occasion",
      answer: (
        <>
          {categories.occasion.map((option) => (
            <label key={option} className="flex items-center space-x-2 mb-1">
              <input
                type="radio"
                name="occasion"
                value={option}
                checked={filtersValue.occasion === option}
                onChange={() => handleChange("occasion", option)}
                className="cursor-pointer"
              />
              <span className="cursor-pointer">{option}</span>
            </label>
          ))}
        </>
      ),
    },
    {
      id: "filter6",
      question: "Material",
      answer: (
        <>
          {categories.material.map((option) => (
            <label key={option} className="flex items-center space-x-2 mb-1">
              <input
                type="radio"
                name="material"
                value={option}
                checked={filtersValue.material === option}
                onChange={() => handleChange("material", option)}
                className="cursor-pointer"
              />
              <span className="cursor-pointer">{option}</span>
            </label>
          ))}
        </>
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
          onClick={applyFilters}
        >
          Apply Filter
        </button>
        <button
          className="bg-gray-600 text-white p-2 w-[40%] text-md font-Montserrat"
          onClick={() => {
            setFiltersValue({
              type: "",
              color: "",
              occasion: "",
              material: "",
              rating: "",
              price: [100, 100000],
            });
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
