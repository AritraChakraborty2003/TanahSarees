import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../../AppContext/AppContext";
const ResultPageFinal = () => {
  const [searchParams] = useSearchParams();
  const type = searchParams.get("type") || "";
  const ref = searchParams.get("ref") || "";
  const { change } = useContext(AppContext);

  return (
    <>
      <div
        className=" w-[100vw]  flex flex-col justify-center pt-10 pb-10 lg:pt-10 lg:pb-20  items-center"
        style={{
          marginTop: `${
            !change
              ? screen.width > 1000
                ? "20%"
                : ""
              : screen.width > 1000
              ? "12%"
              : ""
          }`, // Adjust based on header height
          zIndex: 10, // Keep content below the header
        }}
      >
        {type === "success" ? (
          <>
            <DotLottieReact
              src="/Animation - 1741275672660.lottie"
              loop
              autoplay
              className="w-100"
            />
            <p>Payment Succesful</p>
            <p>ref_id:{ref}</p>
            <Link to={"/"}>
              <button className="light p-2 rounded mt-2 cursor-pointer">
                Home Page
              </button>
            </Link>
          </>
        ) : (
          <>
            <DotLottieReact
              src="/Sarees/Main Scene-2.lottie"
              loop
              autoplay
              className="w-50"
            />
            <p className="font-Montserrat text-red-500">Payment Fail</p>
            <p className="text-red-500">ref_id:{ref}</p>
            <p className="text-red-500">Please try again!</p>
            <Link to={"/cart"}>
              <button className="light p-2 rounded mt-3 cursor-pointer">
                Go to Cart
              </button>
            </Link>
          </>
        )}
      </div>
    </>
  );
};

export default ResultPageFinal;
