/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
// import { HashLoader } from "react-spinners";
// import { TailSpin } from "react-loader-spinner";
import Main from "./Main";
import UseHTTPRequest from "../../../Utils/useHTTPRequest";
import { useCheckAuth } from "../../../Utils/useCheckAuth";
import { AppContext } from "../../../AppContext/AppContext";

const Loader = () => {
  const [isLoading, setIsloading] = useState(true);
  const {
    sareeData,
    setSareeData,
    setActiveFilter,
    filteredData,
    setFilteredData,
  } = useContext(AppContext);
  const [tigger, setTigger] = useState(false);
  const [tigger_auth, set_tigger_auth] = useState(false);
  const data = UseHTTPRequest(tigger, "/sarees", "GET", "", "");
  useEffect(() => {
    setTimeout(() => {
      setIsloading(false);
    }, 2000);
  });

  const message = useCheckAuth(tigger_auth, "auth");

  useEffect(() => {
    setFilteredData([]);
    setActiveFilter(false);
    if (data) {
      setSareeData(data);
    }
  }, [data, setActiveFilter, setFilteredData, setSareeData]);
  return (
    <div>
      {isLoading ? (
        <div className=" h-[100vh] w-[100vw] flex justify-center items-center light ">
          {/* <TailSpin size={72} color="#262424" /> */}
          <div className="loader"></div>
          {data ? <>{console.log("SareeData:", sareeData)}</> : ""}
          {message ? <>{console.log(message)}</> : ""}

          <></>
        </div>
      ) : (
        <Main />
      )}
    </div>
  );
};

export default Loader;
