/* eslint-disable no-unused-vars */

import Search from "./Search";
import { useState } from "react";
import { motion } from "framer-motion";

const OptionsBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      {(screen.width > 1000 && (
        // <div
        //   className={`mainHolder flex w-[100vw] pb-0  bg-white ${
        //     props.isSticky === "true" ? "z-[1000] fixed top-25 left-0" : "z-10"
        //   }`}
        // >
        //   <div className="border-[#d5d5d5]  border-b-[0.15px] lg:border-[0.15px] flex justify-center items-center w-[100vw] pl-15 gap-4 flex-wrap p-4 mt-2 darktext font-lato">
        //     {[
        //       "SALE",
        //       "SAREES",
        //       "DRESS MATERIALS",
        //       "SALWAR SUITS",
        //       "LEHENGAS",
        //       "OTHERS",
        //       "NEW ARRIVALS",
        //       "OCCASIONS",
        //     ].map((category, index) => (
        //       <span
        //         key={index}
        //         className="px-4 py-2 text-md font-medium  font-poppins lg:text-[2.15vmin]"
        //       >
        //         {category}
        //       </span>
        //     ))}
        //   </div>
        // </div>
        <nav className="relative w-full bg-white shadow-md border-[#d5d5d5] border-t-[1px]">
          <div className="flex justify-center items-center px-3 py-4">
            <ul className="flex gap-x-20">
              <li
                className="relative group cursor-pointer"
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
              >
                <span className="hover:underline darktext text-md font-Montserrat font-medium">
                  SALE
                </span>
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="fixed left-0 top-[260px] w-screen bg-white shadow-lg border border-gray-200"
                  >
                    <ul className="p-3">
                      <li className="p-2 hover:underline">Category 1</li>
                      <li className="p-2 hover:underline">Category 2</li>
                      <li className="p-2 hover:underline">Category 3</li>
                    </ul>
                  </motion.div>
                )}
              </li>

              <li
                className="relative group cursor-pointer"
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
              >
                <span className="hover:underline darktext text-md font-Montserrat font-medium">
                  OFFERS
                </span>
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="fixed left-0 top-[260px] w-screen bg-white shadow-lg border border-gray-200"
                  >
                    <ul className="p-3">
                      <li className="p-2 hover:underline">Category 1</li>
                      <li className="p-2 hover:underline">Category 2</li>
                      <li className="p-2 hover:underline">Category 3</li>
                    </ul>
                  </motion.div>
                )}
              </li>
              <li
                className="relative group cursor-pointer"
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
              >
                <span className="hover:underline darktext text-md font-Montserrat font-medium">
                  OCASSIONS
                </span>
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="fixed left-0 top-[260px] w-screen bg-white shadow-lg border border-gray-200"
                  >
                    <ul className="p-3">
                      <li className="p-2 hover:underline">Category 1</li>
                      <li className="p-2 hover:underline">Category 2</li>
                      <li className="p-2 hover:underline">Category 3</li>
                    </ul>
                  </motion.div>
                )}
              </li>
              <li
                className="relative group cursor-pointer"
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
              >
                <span className="hover:underline darktext text-md font-Montserrat font-medium">
                  TYPE
                </span>
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="fixed left-0 top-[260px] w-screen bg-white shadow-lg border border-gray-200"
                  >
                    <ul className="p-3">
                      <li className="p-2 hover:underline">Category 1</li>
                      <li className="p-2 hover:underline">Category 2</li>
                      <li className="p-2 hover:underline">Category 3</li>
                    </ul>
                  </motion.div>
                )}
              </li>
              <li
                className="relative group cursor-pointer"
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
              >
                <span className="hover:underline darktext text-md font-Montserrat font-medium">
                  NEW ARRIVALS
                </span>
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="fixed left-0 top-[260px] w-screen bg-white shadow-lg border border-gray-200"
                  >
                    <ul className="p-3">
                      <li className="p-2 hover:underline">Category 1</li>
                      <li className="p-2 hover:underline">Category 2</li>
                      <li className="p-2 hover:underline">Category 3</li>
                    </ul>
                  </motion.div>
                )}
              </li>
              <li
                className="relative group cursor-pointer"
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
              >
                <span className="hover:underline darktext text-md font-Montserrat font-medium">
                  OTHERS
                </span>
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="fixed left-0 top-[260px] w-screen bg-white shadow-lg border border-gray-200"
                  >
                    <ul className="p-3">
                      <li className="p-2 hover:underline">Category 1</li>
                      <li className="p-2 hover:underline">Category 2</li>
                      <li className="p-2 hover:underline">Category 3</li>
                    </ul>
                  </motion.div>
                )}
              </li>
            </ul>
          </div>
        </nav>
      )) || (
        <div className="border-[#d5d5d5]  border-b-[0.15px] flex justify-center items-center w-[100vw]   flex-wrap pb-4  darktext font-lato">
          <Search className="mt-[2vmin]" />
        </div>
      )}
    </div>
  );
};

export default OptionsBar;
