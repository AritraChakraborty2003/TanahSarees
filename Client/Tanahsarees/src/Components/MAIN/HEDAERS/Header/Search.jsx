/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { AppContext } from "../../../../AppContext/AppContext";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const {
    sareeData,
    LargeSearchBox,
    setLargeSearchBox,
    smallSearchBox,
    setSmallSearchBox,
    searchDataValue,
    setSearchDataValue,
    activeFilter,
    setActiveFilter,
    filteredData,
    setFilteredData,
  } = useContext(AppContext);

  const navigate = useNavigate();
  return (
    <>
      <div className="w-[95%] flex gap-x-3 border-[#d5d5d5] border-[0.25px] p-[6px] lg:p-[0.35px] mt-4">
        <a className="darktext text-[5vmin] lg:text-[3.15vmin] ml-3">
          <i
            className="ri-search-line"
            onClick={() => {
              if (screen.width > 1000) {
                setLargeSearchBox(false);
                setFilteredData(searchDataValue.slice(0, 4));
                setActiveFilter(true);
                navigate("/products");
                setSearchDataValue("");
              } else {
                setSmallSearchBox(false);
                setFilteredData(searchDataValue.slice(0, 4));
                setActiveFilter(true);
                navigate("/products");
                setSearchDataValue("");
              }
            }}
          ></i>
        </a>
        <input
          type="text"
          placeholder="Search For Items.."
          className="darktext text-[3.65vmin] lg:text-[1.85vmin] pl-1 lg:pl-3 w-[250px] outline-none"
          onChange={(e) => {
            console.log(e.target.value);

            const filteredValue = sareeData.filter(
              (saree) =>
                saree.colour.includes(e.target.value) ||
                saree.type.includes(e.target.value) ||
                saree.sname.includes(e.target.value) ||
                saree.material.includes(e.target.value) ||
                saree.occasion.includes(e.target.value)
            );

            if (screen.width > 1000) {
              if (e.target.value === "") {
                setLargeSearchBox(false);
              } else {
                setLargeSearchBox(true);
                setSearchDataValue(filteredValue);
              }
            } else {
              if (e.target.value === "") {
                setSmallSearchBox(false);
              } else {
                setSmallSearchBox(true);
                setSearchDataValue(filteredValue);
              }
            }
          }}
        />
      </div>
    </>
  );
};

export default Search;
