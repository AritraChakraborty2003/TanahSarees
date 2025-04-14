import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../../../AppContext/AppContext";
import { capitalizeFirstLetter } from "../../../../Utils/CapitalizeFirstLetter";
import UseHTTPRequest from "../../../../Utils/useHTTPRequest";

const options = {
  OFFERS: {
    header1: "By Discount",
    options1: ["Upto 10% off", "Upto 20% off", "Upto 30% off"],
    header2: "By Trendy Offers",
    options2: ["Buy 2 Get 1", "Upto 25% off", "Under ₹4500"],
    header3: "By Color",
    options3: ["Black", "Pink", "Magenta"],
  },
  OCCASIONS: {
    header1: "By Occasion",
    options1: [
      "Haldi",
      "Sangeet",
      "Summer Collection",
      "Wedding",
      "Reception",
      "Festive",
      "Party",
    ],
    header2: "By Category",
    options2: [
      "Floral",
      "Paestal",
      "Sequince",
      "Printed",
      "Mansoor Silk",
      "Chinia Silk",
    ],
    header3: "By Colour",
    options3: ["Blue", "Orange", "Red", "Pink", "Green"],
  },
  TYPE: {
    header1: "By Category",
    options1: [
      "Floral",
      "Paestal",
      "Sequince",
      "Printed",
      "Mansoor Silk",
      "Chinia Silk",
    ],
    header2: "By Material",
    options2: [
      "Katan Silk",
      "Georgette Silk",
      "Tissue Silk",
      "Masharoo Silk",
      "Organza Silk",
      "Raw Mango Silk",
    ],
    header3: "By Discount",
    options3: ["Upto 10% off", "Upto 20% off", "Upto 30% off"],
  },
  "NEW ARRIVALS": {
    header1: "Latest Stock",
    options1: ["New Arrivals", "By rating", "Festive Options"],
    header2: "By Colour",
    options2: ["Orange", "Red", "Pink", "Green"],
    header3: "By Discount",
    options3: ["Upto 10% off", "Upto 20% off", "Upto 30% off"],
  },
  OTHERS: {
    header1: "By Rating",
    options1: ["By 5 star", "By 4 star", "By 3 star", "By 2 star", "By 1 star"],
    header2: "By Material",
    options2: [
      "Katan Silk",
      "Georgette Silk",
      "Tissue Silk",
      "Masharoo Silk",
      "Organza Silk",
      "Raw Mango Silk",
    ],
    header3: "By Colour",
    options3: ["Red", "Blue", "Green", "Yellow", "Pink", "Golden"],
  },
};

const NavSideOptions = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const navigate = useNavigate();
  const { setActiveFilter, setFilteredData, setFilterText, toggleHam } =
    useContext(AppContext);

  const [data, setData] = useState([]);
  const sarees = UseHTTPRequest(null, "/sarees", "GET", "", "");

  useEffect(() => {
    if (sarees && Array.isArray(sarees)) {
      setData(sarees);
    }
  }, [sarees]);

  const filtersMap = {
    "By Occasion": (option) =>
      data.filter(
        (item) => item.occasion?.toLowerCase() === option.toLowerCase()
      ),
    "By Category": (option) =>
      data.filter((item) => item.type?.toLowerCase() === option.toLowerCase()),
    "By Material": (option) =>
      data.filter(
        (item) =>
          item.material?.toLowerCase() === option.split(" ")[0].toLowerCase()
      ),
    "By Colour": (option) =>
      data.filter(
        (item) => item.colour?.toLowerCase() === option.toLowerCase()
      ),
    "By Discount": (option) =>
      data.filter(
        (item) => item.discount === Number(option.split(" ")[1]?.split("%")[0])
      ),
  };

  const handleClick = (header, option) => () => {
    const filterFn = filtersMap[header];
    const filtered = filterFn
      ? filterFn(option)
      : data.filter(
          (item) => item.sname?.toLowerCase() === option.toLowerCase()
        );

    setActiveFilter(true);
    setFilteredData(filtered);
    setFilterText(`${capitalizeFirstLetter(option)} Saree Collections`);
    toggleHam();
    navigate("/products");
  };

  return (
    <div className="mt-[-4vmin]">
      {Object.entries(options).map(([title, content], index) => (
        <div
          key={title}
          className="w-[75vw] flex flex-col items-center mt-6 first:mt-1"
        >
          <div
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="h-[10vmin] w-[94%] border-b-[0.15px] border-[#d5d5d5] flex items-center darktxt font-Montserrat font-medium cursor-pointer"
          >
            {title}
          </div>

          {openIndex === index && (
            <div className="w-[94%] mt-2 text-sm text-black space-y-2">
              {[1, 2, 3].map((num) => (
                <div key={num}>
                  <h4 className="font-semibold mb-1">
                    {content[`header${num}`]}
                  </h4>
                  <ul className="space-y-1">
                    {content[`options${num}`].map((opt, i) => (
                      <li
                        key={i}
                        onClick={handleClick(content[`header${num}`], opt)}
                        className="cursor-pointer hover:underline transition-all duration-150"
                      >
                        {opt}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default NavSideOptions;
