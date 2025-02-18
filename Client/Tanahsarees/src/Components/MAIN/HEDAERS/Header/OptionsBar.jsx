/* eslint-disable no-unused-vars */
import Search from "./Search";
import { useState } from "react";
import { motion } from "framer-motion";

const OptionsBar = (props) => {
  const [openMenu, setOpenMenu] = useState(null);

  const handleMouseEnter = (menu) => {
    setOpenMenu(menu);
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
      setOpenMenu(null);
    }, 500);
  };

  return (
    <div>
      {screen.width > 1000 ? (
        <nav className="relative w-full bg-white shadow-md border-t border-gray-300">
          <div className="flex justify-center items-center px-3 py-4">
            <ul className="flex gap-x-20">
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
                  className="relative group cursor-pointer"
                  onMouseEnter={() => handleMouseEnter(menu)}
                >
                  <span className="hover:underline darktext text-md font-Montserrat underline-offset-5 font-medium">
                    {menu}
                  </span>

                  {/* Full-width dropdown */}
                  {openMenu === menu && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="fixed top-[255px] left-0 w-screen bg-white shadow-lg border border-gray-200 z-50"
                      onMouseEnter={() => setOpenMenu(menu)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <ul
                        className="p-6 gap-10 text-lg font-medium"
                        onMouseEnter={() => setOpenMenu(menu)}
                      >
                        <div>
                          <li className="p-3 hover:underline">Category 1</li>
                          <li className="p-3 hover:underline">Category 2</li>
                          <li className="p-3 hover:underline">Category 3</li>
                        </div>
                        <div>
                          <li className="p-3 hover:underline">Category 1</li>
                          <li className="p-3 hover:underline">Category 2</li>
                          <li className="p-3 hover:underline">Category 3</li>
                        </div>
                      </ul>
                    </motion.div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </nav>
      ) : (
        <div className="border-b border-gray-300 flex justify-center items-center w-full flex-wrap pb-4 darktext font-lato">
          <Search className="mt-[2vmin]" />
        </div>
      )}
    </div>
  );
};

export default OptionsBar;
