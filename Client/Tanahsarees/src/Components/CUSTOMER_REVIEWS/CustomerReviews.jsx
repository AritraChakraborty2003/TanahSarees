/* eslint-disable react/jsx-key */
import TestinomialsCard from "../CARDS/TestinomialsCard";
import { useContext } from "react";
import { AppContext } from "../../AppContext/AppContext";
import UseHTTPRequest from "../../Utils/useHTTPRequest";
const CustomerReviews = () => {
  const { change } = useContext(AppContext);

  const data = UseHTTPRequest(null, "/testimonials", "GET", "");

  return (
    <>
      <div
        className={"pb-10 gap-x-6 gap-y-5 w-[100vw]"}
        style={{
          paddingTop: `${
            !change
              ? document.getElementById("mainHeader")?.offsetHeight || "300px"
              : "250px"
          }`,

          zIndex: 900,
        }}
      >
        <p className="text-4xl font-semibold font-Montserrat text-center ">
          Customer Reviews
        </p>
        <div className="flex flex-wrap justify-center items-center gap-x-5 gap-y-6 mt-8">
          {data ? (
            <>
              {data.map((item) => (
                <TestinomialsCard review={item} />
              ))}
            </>
          ) : (
            <p className="text-black text-lg text-center">Loading... </p>
          )}
        </div>
      </div>
    </>
  );
};

export default CustomerReviews;
