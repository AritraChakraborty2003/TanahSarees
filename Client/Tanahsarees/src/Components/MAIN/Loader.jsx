import { useEffect, useState } from "react";
import { HashLoader } from "react-spinners";
import Main from "./Main";

const Loader = () => {
  const [isLoading, setIsloading] = useState(true);
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
        </div>
      ) : (
        <Main />
      )}
    </div>
  );
};

export default Loader;
