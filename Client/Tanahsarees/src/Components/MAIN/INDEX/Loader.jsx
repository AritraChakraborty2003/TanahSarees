/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { HashLoader } from "react-spinners";
import Main from "./Main";
import UseHTTPRequest from "../../../Utils/useHTTPRequest";
import { useCheckAuth } from "../../../Utils/useCheckAuth";

const Loader = () => {
  const [isLoading, setIsloading] = useState(true);
  const [tigger, setTigger] = useState(false);
  const [tigger_auth, set_tigger_auth] = useState(false);
  const data = UseHTTPRequest(tigger, "/sarees", "GET", "");
  useEffect(() => {
    setTimeout(() => {
      setIsloading(false);
    }, 3100);
  });

  const message = useCheckAuth(tigger_auth);
  return (
    <div>
      {isLoading ? (
        <div className=" h-[100vh] w-[100vw] flex justify-center items-center bg-[#f7d9cb] ">
          <HashLoader size={72} color="#c97366" />
          {data.length > 0 ? <>{console.log(data)}</> : ""}
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
