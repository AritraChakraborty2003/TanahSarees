/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ProductCard from "../CARDS/ProductCard";
import { AppContext } from "../../AppContext/AppContext";
import UseHTTPRequest from "../../Utils/useHTTPRequest";
import FilterAccordion from "../TESTComp/FilterAccordian";
import { useHandleCart } from "../../Utils/useHandleCart";
import { useCheckAuth } from "../../Utils/useCheckAuth";
import useHandleHeart from "../../Utils/useHandleHeart";

const ProductDisplay = () => {
  const {
    change,
    sareeData,
    setSareeData,
    activeFilter,
    filteredData,
    filterText,
  } = useContext(AppContext);

  const [filterVisible, setFilterVisible] = useState(window.innerWidth > 1000);
  const [visibleCount, setVisibleCount] = useState(12);
  const authStatus = useCheckAuth(null, "auth");
  const location = useLocation();
  useHandleCart();
  useHandleHeart();

  const data = UseHTTPRequest(null, "/sarees", "GET", "", "");

  useEffect(() => {
    const handlePopState = () => window.location.reload();
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [location]);

  useEffect(() => {
    if (data && JSON.stringify(data) !== JSON.stringify(sareeData)) {
      setSareeData(data);
    }
  }, [data, sareeData]);

  const toggleFilter = () => setFilterVisible(!filterVisible);
  const loadMore = () => setVisibleCount((prev) => prev + 12);

  const products = activeFilter ? filteredData : sareeData;
  const displayProducts = products
    ? [...products].reverse().slice(0, visibleCount)
    : [];

  const getIsClicked = (item) => {
    return (
      authStatus.isAuthenticated &&
      authStatus.user?.message?.favourites?.includes(item._id)
    );
  };

  return (
    <div>
      <div
        className="flex flex-col text-center mt-6 lg:mt-0"
        style={{
          marginTop: `${
            !change
              ? window.innerWidth > 1000
                ? "22.4%"
                : ""
              : window.innerWidth > 1000
              ? "12%"
              : ""
          }`,
          zIndex: 10,
        }}
      >
        <p className="text-sm text-gray-500">Home / Products</p>
        <h2 className="text-3xl text-gray-500 font-Montserrat font-medium">
          {activeFilter ? (
            <>
              <p>{`${filterText} Saree Collections`}</p>
            </>
          ) : (
            <p> Complete Saree Collections </p>
          )}
        </h2>
      </div>

      {window.innerWidth > 1000 && (
        <div className="flex mt-10">
          <img className="h-25 w-[50vw]" src="/img copy.png" alt="" />
          <img className="h-25 w-[50vw]" src="/Untitled design.png" alt="" />
        </div>
      )}

      <div className="lg:mt-5 flex flex-wrap pb-20">
        {!filterVisible && !activeFilter && (
          <p className="flex cursor-pointer" onClick={toggleFilter}>
            <img
              src="filtericon.png"
              height={25}
              width={25}
              className="ml-4 mt-6"
              alt="Filter Icon"
            />
            <span className="ml-2 mt-6">Show Filters</span>
          </p>
        )}

        {filterVisible && (
          <div className="mt-5 lg:mt-1 w-[100vw] lg:w-[27vw] border-[#d5d5d5] border-r-1">
            <div className="w-[90%] flex text-3xl font-light font-Lato darktext mr-3 ml-4 lg:mt-12">
              <i
                className="ri-close-line cursor-pointer"
                onClick={toggleFilter}
              ></i>
            </div>
            <div className="w-[90%] mt-3 ml-3">
              <FilterAccordion />
            </div>
          </div>
        )}

        <div
          className={`mt-6 lg:mt-10  flex flex-wrap justify-center items-center gap-2 sm:gap-3 md:gap-4 ${
            window.innerWidth > 1000
              ? filterVisible
                ? "w-[70vw]"
                : "w-full"
              : "w-full"
          }`}
        >
          {displayProducts.map((item) => (
            <ProductCard
              key={item._id}
              data={item}
              isClicked={getIsClicked(item)}
            />
          ))}

          {products && visibleCount < products.length && (
            <div className="w-[50vw] flex items-center justify-center mt-10">
              <button
                onClick={loadMore}
                className="bg-blue-500 text-white px-6 py-4 rounded-lg hover:bg-blue-600 transition"
              >
                Load More
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
