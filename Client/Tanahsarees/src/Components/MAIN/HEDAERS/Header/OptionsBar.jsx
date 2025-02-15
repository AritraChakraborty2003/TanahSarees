import Search from "./Search";
import { useState, useEffect } from "react";
const OptionsBar = () => {
  const [isVisible, setIsVisible] = useState(true);
  let lastScrollY = 0;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // Scrolling Down → Hide the div
        setIsVisible(false);
      } else {
        // Scrolling Up → Show the div
        setIsVisible(true);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      {(screen.width > 1000 && (
        <div
          className={`fixed  bg-white duration-100 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="border-[#d5d5d5]  border-b-[0.15px] lg:border-[0.15px] flex justify-center items-center w-[100vw] pl-15 gap-4 flex-wrap p-4 mt-2 darktext font-lato">
            {[
              "SALE",
              "SAREES",
              "DRESS MATERIALS",
              "SALWAR SUITS",
              "LEHENGAS",
              "OTHERS",
              "NEW ARRIVALS",
              "OCCASIONS",
            ].map((category, index) => (
              <span
                key={index}
                className="px-4 py-2 text-md font-medium  font-poppins lg:text-[2.15vmin]"
              >
                {category}
              </span>
            ))}
          </div>
        </div>
      )) || (
        <div className="border-[#d5d5d5]  border-b-[0.15px] flex justify-center items-center w-[100vw]   flex-wrap pb-4  darktext font-lato">
          <Search className="mt-[2vmin]" />
        </div>
      )}
    </div>
  );
};

export default OptionsBar;
