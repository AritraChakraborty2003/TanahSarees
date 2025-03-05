/* eslint-disable no-unused-vars */

import { useContext, useState, useEffect } from "react";
import ProductCard from "../CARDS/ProductCard";
import { AppContext } from "../../AppContext/AppContext";
import { useCheckAuth } from "../../Utils/useCheckAuth";
import UseHTTPRequest from "../../Utils/useHTTPRequest";
import useHandleHeart from "../../Utils/usehandleHeart";
import { useHandleCart } from "../../Utils/useHandleCart";

const Favourite = () => {
  const [tigger, setTigger] = useState(false);
  const { change, heartSave } = useContext(AppContext);
  const authStatus = useCheckAuth(tigger, "auth");
  const sareeData = UseHTTPRequest(null, "/sarees", "GET", "", "");
  const [data, setData] = useState([]);
  const heart = useHandleHeart();

  useEffect(() => {
    if (authStatus.isAuthenticated) {
      setData(authStatus.user.message.favourites);
    }
  }, [authStatus.isAuthenticated, authStatus.user]);
  useEffect(() => {
    console.log("tigger called");
    // setTigger(!tigger);
    setTigger((prev) => !prev);
  }, [heartSave]);

  const res = useHandleCart();
  return (
    <div
      className=" pb-10 lg:pl-10 lg:pr-10 lg:pb-10 flex flex-col justify-center items-center"
      style={{
        marginTop: `${
          !change
            ? screen.width > 1000
              ? "19%"
              : ""
            : screen.width > 1000
            ? "10%"
            : ""
        }`, // Adjust based on header height
        zIndex: 10, // Keep content below the header
      }}
    >
      <>
        <div className="flex flex-col items-center text-gray-600 mt-10 p-1 ">
          <p className="text-sm mb-3 font-Montserrat">Home / Favourites</p>
          <p className="text-5xl lg:text-5xl font-medium overflow-hidden p-1 font-Montserrat">
            FAVOURITES
          </p>
        </div>
        <div className="flex flex-wrap gap-x-5 lg:gap-x-10 gap-y-8 justify-center  items-center mt-10">
          {sareeData && data.length > 0 ? (
            sareeData
              .filter((item) => data.includes(item._id))
              .map((item) => (
                <ProductCard data={item} type="favourite" key={item._id} />
              ))
          ) : (
            <h1 className="text-2xl font-Montserrat">No Favourites</h1>
          )}
        </div>
      </>
    </div>
  );
};

export default Favourite;
