import { useEffect, useState } from "react";
import { HashLoader } from "react-spinners";
import Main from "./Main";

const Loader = () => {
  const [isLoading, setIsloading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsloading(false);
    }, 2500);
  });
  return (
    <div className=" h-[100vh] w-[100vw] flex justify-center items-center ">
      {isLoading ? <HashLoader size={100} color="#c97366" /> : <Main />}
    </div>
  );
};

export default Loader;
