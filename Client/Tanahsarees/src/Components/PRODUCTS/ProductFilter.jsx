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

const ProductFilter = () => {
  const {
    change,
    sareeData,
    setSareeData,
    activeFilter,
    filteredData,
    setFilteredData,
    filterItem,
    setFilterItem,
  } = useContext(AppContext);

  const [Filter, setFilter] = useState(screen.width > 1000 ? true : false);
  const [visibleCount, setVisibleCount] = useState(12);
  const authStatus = useCheckAuth(null, "auth");
  const location = useLocation();
  const heart = useHandleHeart();

  const data = UseHTTPRequest(null, "/sarees", "GET", "", "");

  useEffect(() => {
    window.addEventListener("popstate", () => {
      window.location.reload();
    });
  }, [location]);

  useEffect(() => {
    if (data && JSON.stringify(data) !== JSON.stringify(sareeData)) {
      setSareeData(data);
    }
  }, [data, sareeData]);

  const toggleFilter = () => setFilter(!Filter);
  const loadMore = () => setVisibleCount((prev) => prev + 12);

  const filteredSarees = sareeData.filter(
    (item) => item.material === location?.state?.data?.material
  );

  console.log("filter", filterItem);
  console.log("Filtered Sarees:", filteredSarees);

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
          Filtered Saree Collections{" "}
          {activeFilter && (
            <span className="text-lg lg:text-md">{`(Results: ${filteredSarees.length})`}</span>
          )}
        </h2>
      </div>

      {window.innerWidth > 1000 && (
        <div className="flex mt-10">
          <img className="h-25 w-[50vw]" src="/img copy.png" alt="" />
          <img className="h-25 w-[50vw]" src="/Untitled design.png" alt="" />
        </div>
      )}

      <div className="lg:mt-5 flex flex-col lg:flex-row pb-20">
        {/* Saree Display Section */}
        <div className="w-full  lg:w-[100vw] flex flex-col lg:flex-row flex-wrap gap-8 justify-center">
          {filteredSarees.length > 0 ? (
            filteredSarees
              .slice(0, visibleCount)
              .map((item) => <ProductCard key={item._id} data={item} />)
          ) : (
            <p className="text-gray-500 text-center w-full">
              No sarees found matching this filter.
            </p>
          )}
        </div>
      </div>

      {filteredSarees.length > visibleCount && (
        <div className="w-full text-center mt-6">
          <button
            onClick={loadMore}
            className="px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductFilter;
