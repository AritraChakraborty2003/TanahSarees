import ProductCard from "../CARDS/ProductCard";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../AppContext/AppContext";

import FilterAccordion from "../TESTComp/FilterAccordian";
const Product = () => {
  const { change } = useContext(AppContext);
  const [Filter, setFilter] = useState(true);

  useEffect(() => {
    screen.width > 1000 ? setFilter(true) : setFilter(false);
  }, []);
  const toggleFilter = () => {
    setFilter(!Filter);
  };
  const Prodname = "Silk raw Mango";
  const data = [
    {
      image: "/Sarees/saree1.jpg",
      name: "Silk raw mango",
      price: "3000",
    },
    {
      image: "/Sarees/saree2.jpg",
      name: "Silk raw mango",
      price: "3000",
    },
    {
      image: "/Sarees/saree8.jpg",
      name: "Silk raw mango",
      price: "3000",
    },
    {
      image: "/Sarees/saree7.jpg",
      name: "Silk raw mango",
      price: "3000",
    },
    {
      image: "/Sarees/saree9.jpg",
      name: "Silk raw mango",
      price: "3000",
    },
    {
      image: "/Sarees/saree3.jpg",
      name: "Silk raw mango",
      price: "3000",
    },
    {
      image: "/Sarees/saree4.jpg",
      name: "Silk raw mango",
      price: "3000",
    },
  ];
  return (
    <div>
      <>
        <div
          className="flex flex-col text-center mt-6 lg:mt-0"
          style={{
            marginTop: `${
              !change
                ? screen.width > 1000
                  ? "22.4%"
                  : ""
                : screen.width > 1000
                ? "12%"
                : ""
            }`, // Adjust based on header height
            zIndex: 10, // Keep content below the header
          }}
        >
          <p className="text-sm text-gray-500">Home/{Prodname}</p>
          <h2 className="text-3xl text-gray-500 font-Montserrat font-medium">
            {Prodname}
          </h2>
        </div>

        {screen.width > 1000 && (
          <div className="flex mt-10">
            <img className="h-25 w-[50vw]" src="/img copy.png" alt="" />
            <img className="h-25 w-[50vw]" src="/Untitled design.png" alt="" />
          </div>
        )}

        <div className="lg:mt-5 flex flex-wrap pb-20">
          {!Filter ? (
            <>
              <p className="flex">
                <span>
                  <img
                    src="filtericon.png"
                    height={25}
                    width={25}
                    className="ml-2 mt-6"
                    onClick={toggleFilter}
                  />
                </span>
                <span className="ml-2 mt-6" onClick={toggleFilter}>
                  Show Filters
                </span>
              </p>
            </>
          ) : (
            ""
          )}
          {Filter ? (
            <div className="mt-5 lg:mt-1 w-[100vw] lg:w-[27vw] border-[#d5d5d5] border-r-1">
              <a className="w-[90%] flex text-3xl font-light font-Lato darktext mr-3 ml-4 lg:mt-12">
                <i className="ri-close-line" onClick={toggleFilter}></i>
              </a>
              <div className="w-[90%] mt-3 ml-3">
                <FilterAccordion />
              </div>
            </div>
          ) : (
            ""
          )}

          <div
            className={`mt-6 lg:mt-10 ml-2 flex flex-wrap gap-x-3 gap-y-6 justify-center items-center ${
              screen.width > 1000 ? (!Filter ? "w-full" : "w-[70vw]") : ""
            }`}
          >
            {data.map((item) => (
              <ProductCard key={item.id} data={item} />
            ))}
          </div>
        </div>
      </>
    </div>
  );
};

export default Product;
