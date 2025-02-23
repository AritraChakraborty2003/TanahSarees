/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { HashLoader } from "react-spinners";
import Main from "./Main";
import UseHTTPRequest from "../../../Utils/useHTTPRequest";

const Loader = () => {
  const [isLoading, setIsloading] = useState(true);
  const [tigger, setTigger] = useState(false);
  const data = UseHTTPRequest(tigger, "/sarees", "GET", "");
  useEffect(() => {
    setTimeout(() => {
      setIsloading(false);
    }, 3100);
  });
  return (
    <div>
      {isLoading ? (
        <div className=" h-[100vh] w-[100vw] flex justify-center items-center bg-[#f7d9cb] ">
          <HashLoader size={72} color="#c97366" />
          {data.length > 0 ? <>{console.log("Loader Page data:", data)}</> : ""}
        </div>
      ) : (
        <Main />
      )}
    </div>
  );
};

export default Loader;
