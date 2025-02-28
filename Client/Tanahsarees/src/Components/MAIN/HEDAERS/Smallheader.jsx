/* eslint-disable react/prop-types */
import "remixicon/fonts/remixicon.css";
import { Link } from "react-router-dom";
const Smallheader = (props) => {
  const { category } = props;
  return (
    <div className="w-[100vw] p-[4px] pl-12 grey flex pt-3 ">
      <div className="textHolder w-[70%] flex gap-x-6 text-[1.55vmin] lg:text-[1.4vmin] pt-[1.5px] mt-[3px] darktxt ">
        {category != "CMS" ? (
          <>
            {/* <p>
              <Link to="/orders">DOWNLOAD THE APP</Link>
            </p> */}
            <p>
              <Link to="/sizechart">SIZE CHART</Link>
            </p>
            <p>
              <Link to="/shipping">SHIPPING & DELIVERY</Link>
            </p>
            <p>
              <Link to="/trackorder">TRACK YOUR ORDER</Link>
            </p>
            <p>
              <Link to="/reviews">CUSTOMER REVIEWS</Link>
            </p>
            <p>RETURNS</p>
            <p>
              <Link to="/contactus">CONTACT US</Link>
            </p>
            <p>
              <Link to="/faq">FAQ&apos;s</Link>
            </p>
          </>
        ) : (
          <>
            <p>
              <Link to="/cataloguemanager">Catalogue</Link>
            </p>
            <p>
              <Link to="/">Orders</Link>
            </p>
            <p>
              <Link to="/transactionmanager">Transactions</Link>
            </p>
            <p>
              <Link to="/">Reviews</Link>
            </p>

            <p>
              <Link to="/CMSusers">users</Link>
            </p>
          </>
        )}
      </div>
      <div className="w-[30%] pt-[1.5px] flex justify-end   gap-x-5 2xl:gap-x-7 pr-3">
        <a className="mt-[-0.65vmin] ">
          <i className="ri-instagram-line darktext text-[3vmin]"></i>
        </a>
        <a className="mt-[-1vmin] darktext text-[3.15vmin]">
          <i className="ri-facebook-circle-fill"></i>
        </a>

        <a className="mt-[-1.35vmin] 2xl:mt-[-1.5vmin] darktext text-[3.75vmin]">
          <i className="ri-youtube-fill"></i>
        </a>

        <a className="mt-[-1.35vmin] 2xl:mt-[-1.5vmin] darktext text-[3.55vmin] mr-[2vmin]">
          <i className="ri-pinterest-fill"></i>
        </a>
      </div>
    </div>
  );
};

export default Smallheader;
