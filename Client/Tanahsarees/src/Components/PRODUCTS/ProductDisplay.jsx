/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
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
    setFilteredData,
    filterText,
    setFilterText,
  } = useContext(AppContext);

  const [Filter, setFilter] = useState(screen.width > 1000 ? true : false);
  const [visibleCount, setVisibleCount] = useState(12);
  const authStatus = useCheckAuth(null, "auth"); // ✅ Fetch user authentication status
  const location = useLocation();
  const heart = useHandleHeart();

  const data = UseHTTPRequest(null, "/sarees", "GET", "", ""); // ✅ Fetch saree products

  // ✅ Reload only if navigated to `/products` and user status is known

  useEffect(() => {
    window.addEventListener("popstate", (event) => {
      window.location.reload();
    });
  }, [location]);
  // ✅ Update saree data when API call succeeds
  useEffect(() => {
    if (data && JSON.stringify(data) !== JSON.stringify(sareeData)) {
      setSareeData(data);
    }
  }, [data, sareeData]);

  const toggleFilter = () => setFilter(!Filter);
  const loadMore = () => setVisibleCount((prev) => prev + 12);

  const Prodname = activeFilter
    ? "Filtered Data "
    : "Complete Saree Collections";

  const res = useHandleCart();

  return (
    <div>
      <div
        className="flex flex-col text-center   mt-6 lg:mt-0"
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
              {/* <span className="text-lg lg:text-md">{`(Results: ${filteredData.length})`}</span> */}
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
        {!Filter && !activeFilter ? (
          <p className="flex cursor-pointer" onClick={toggleFilter}>
            <img
              src="filtericon.png"
              height={25}
              width={25}
              className="ml-4  mt-6"
              alt="Filter Icon"
            />
            <span className="ml-2 mt-6" onClick={toggleFilter}>
              Show Filters
            </span>
          </p>
        ) : null}

        {Filter && (
          <div className="mt-5 lg:mt-1 w-[100vw] lg:w-[27vw] border-[#d5d5d5] border-r-1">
            <a className="w-[90%] flex text-3xl font-light font-Lato darktext mr-3 ml-4 lg:mt-12">
              <i
                className="ri-close-line cursor-pointer"
                onClick={toggleFilter}
              ></i>
            </a>
            <div className="w-[90%] mt-3 ml-3">
              <FilterAccordion />
            </div>
          </div>
        )}

        {/* ✅ Display Product Cards */}
        {activeFilter === false ? (
          <div
            className={`mt-6 lg:mt-10 ml-1 flex flex-wrap gap-x-3 gap-y-8 lg:gap-x-6 2xl:gap-x-3 justify-center items-center ${
              window.innerWidth > 1000 ? (!Filter ? "w-full" : "w-[70vw]") : ""
            }`}
          >
            {!authStatus.isAuthenticated
              ? sareeData &&
                [...sareeData] // Create a copy before reversing
                  .reverse()
                  .slice(0, visibleCount)
                  .map((item) => (
                    <ProductCard
                      key={item._id}
                      data={item}
                      isClicked={
                        authStatus.isAuthenticated &&
                        authStatus.user.message.favourites.includes(item._id)
                          ? true
                          : false
                      }
                    />
                  ))
              : sareeData &&
                [...sareeData] // Create a copy before reversing
                  .reverse()
                  .slice(0, visibleCount)
                  .map((item) => (
                    <ProductCard
                      key={item._id}
                      data={item}
                      isClicked={
                        authStatus.user.message.favourites.includes(item._id)
                          ? true
                          : false
                      }
                    />
                  ))}

            {/* Load More Button */}
            {sareeData && visibleCount < sareeData.length && (
              <div className="w-[50vw] flex items-center justify-center mt-10 ">
                <button
                  onClick={loadMore}
                  className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
                >
                  Load More
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            <div
              className={`mt-6 lg:mt-3 ml-2 flex flex-wrap gap-x-3 gap-y-3 justify-center  ${
                window.innerWidth > 1000
                  ? !Filter
                    ? "w-full"
                    : "w-[70vw]"
                  : ""
              }`}
            >
              {filteredData &&
                [...filteredData]
                  .reverse()
                  .slice(0, visibleCount)
                  .map((item) => {
                    const isFavourite =
                      authStatus.user?.message?.favourites?.includes(item._id);
                    return (
                      <ProductCard
                        key={item._id}
                        data={item}
                        isClicked={isFavourite ? "clicked" : ""}
                      />
                    );
                  })}

              {/* Load More Button */}
              {filteredData && visibleCount < filteredData.length && (
                <div className="w-[50vw] flex items-center justify-center mt-10 ">
                  <button
                    onClick={loadMore}
                    className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
                  >
                    Load More
                  </button>
                </div>
              )}
            </div>

            {console.log(filteredData)}
          </>
        )}
      </div>
    </div>
  );
};

export default ProductDisplay;
