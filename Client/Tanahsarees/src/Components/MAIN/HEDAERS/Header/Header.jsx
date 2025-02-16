/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Search from "./Search";

const Header = (props) => {
  return (
    <>
      {(screen.width > 1000 && (
        <div
          className={`mainHolder flex w-[100vw] pb-3 bg-white ${
            props?.type === "scrollHead"
              ? "z-[1000] fixed top-0 left-0"
              : "z-10"
          }`}
        >
          <div className="searchHolder w-[33.3%]  flex justify-center items-center">
            <Search />
          </div>
          <div className="logoHolder flex justify-center items-center w-[33.34%]  mt-3 ml-12">
            <Link to="/main">
              {" "}
              <img src="logo.png" height={200} width={220} />{" "}
            </Link>
          </div>
          <div className="purchaseOptHolder w-[33.33%]  flex justify-end items-center  gap-x-9 2xl:gap-x-20 pr-12 mt-6">
            <a className="mt-[-0.65vmin] darktext  text-[3.75vmin] font-extralight">
              <i className="ri-heart-line"></i>
            </a>
            <a className="mt-[-1vmin] darktext text-[3.75vmin] font-extralight">
              <i className="ri-user-line"></i>
            </a>

            <a className="mt-[-1.35vmin] 2xl:mt-[-1.5vmin] darktext text-[3.75vmin] font-extralight">
              <i className="ri-shopping-cart-line"></i>
            </a>
          </div>
        </div>
      )) || (
        <>
          <div className="flex w-[100vw]">
            <div className="logoHolder  flex  w-[24%]  mt-3 ">
              <a className="mt-[3vmin] darktext  text-[7.75vmin] font-extralight pl-3">
                <i className="ri-menu-line"></i>
              </a>
            </div>
            <div className="logoHolder  flex justify-center items-center w-[49.5%]  mt-3 ml-[-0.35vmin] ">
              <Link to="/main">
                {" "}
                <img src="logo.png" height={120} width={180} />
              </Link>
            </div>
            <div className="purchaseOptHolder w-[27%]  flex justify-end items-center  gap-x-5 pr-2 2xl:gap-x-20 mt-3">
              <a className="mt-[-0.65vmin] darktext  text-[7.75vmin] font-extralight">
                <i className="ri-heart-line"></i>
              </a>

              <a className="mt-[-1.35vmin] 2xl:mt-[-1.5vmin] darktext text-[7.75vmin] font-extralight">
                <i className="ri-shopping-cart-line"></i>
              </a>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Header;
