/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import { useState, useEffect, useRef, useContext } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Search from "./Search";
import { AppContext } from "../../../../AppContext/AppContext";

const OptionsBar = () => {
  const {
    searchDataValue,
    activeFilter,
    setActiveFilter,
    filteredData,
    setFilteredData,
    smallSearchBox,
    setSmallSearchBox,
    setSearchDataValue,
  } = useContext(AppContext);
  const [openMenu, setOpenMenu] = useState(null);
  const timeoutRef = useRef(null);

  // const { category } = props;
  const handleMouseEnter = (menu) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current); // Prevent flickering
    }
    setOpenMenu(menu);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenMenu(null);
    }, 500); // Delay helps prevent accidental closing
  };

  // Cleanup timeout on component unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const navigate = useNavigate();
  return (
    <div>
      {typeof window !== "undefined" && window.innerWidth > 1000 ? (
        <nav className="relative w-full dark  shadow-md border-t border-gray-300">
          <div className="flex justify-center darktxt items-center px-3 py-4">
            <ul className="flex  gap-x-24 lg:text-[1.75vmin] ">
              {[
                "SALE",
                "OFFERS",
                "OCCASIONS",
                "TYPE",
                "NEW ARRIVALS",
                "OTHERS",
              ].map((menu, index) => (
                <li
                  key={index}
                  className="relative group cursor-pointer "
                  onMouseEnter={() => handleMouseEnter(menu)}
                  onMouseLeave={handleMouseLeave}
                >
                  <span className="hover:underline lighttxt text-md font-Montserrat underline-offset-5 font-medium">
                    {menu}
                  </span>

                  {/* Full-width dropdown */}
                  {openMenu === menu && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className={`fixed  ${
                        screen.width <= 1919 ? "top-[258px]" : "top-[297px]"
                      } left-0 w-screen bg-white shadow-lg border border-gray-200 z-50`}
                      onMouseEnter={() => handleMouseEnter(menu)} // Keep it open
                      onMouseLeave={handleMouseLeave} // Close only if mouse leaves
                    >
                      <div>
                        <ul className="p-6 gap-10 flex text-lg font-medium">
                          <div>
                            <li className="p-3 hover:underline">Category 1</li>
                            <li className="p-3 hover:underline">Category 2</li>
                            <li className="p-3 hover:underline">Category 3</li>
                          </div>
                          <div>
                            <li className="p-3 hover:underline">Category 4</li>
                            <li className="p-3 hover:underline">Category 5</li>
                            <li className="p-3 hover:underline">Category 6</li>
                          </div>
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </nav>
      ) : (
        <div className="border-b border-gray-300 flex flex-col justify-center items-center w-full flex-wrap pb-4 darktxt font-lato">
          <Search className="mt-[2vmin]" />

          {smallSearchBox ? (
            <div className="w-[80%] border-[1px] border-[#d5d5d5]">
              {searchDataValue.length > 0 ? (
                searchDataValue.slice(0, 4).map((item, index) => (
                  <div className="border-b-[1px] p-2">
                    <p
                      onClick={() => {
                        setActiveFilter(true);
                        setFilteredData([item]);
                        navigate("/products");
                        setSmallSearchBox(false);
                        setSearchDataValue("");
                      }}
                    >
                      {item.sname}
                    </p>
                  </div>
                ))
              ) : (
                <p>No results found...</p>
              )}
            </div>
          ) : (
            <p></p>
          )}
        </div>
      )}
    </div>
  );
};

export default OptionsBar;
