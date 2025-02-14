import "remixicon/fonts/remixicon.css";
const Smallheader = () => {
  return (
    <div className="w-[100vw] p-[4px] pl-12 grey flex pt-3">
      <div className="textHolder w-[70%] flex gap-x-6 text-[1.55vmin] 2xl:text-[1.4vmin] pt-[1.5px] mt-[3px] darktext ">
        <p>DOWNLOAD THE APP</p>
        <p>SIZE CHART</p>
        <p>SHIPPING & DELIVERY</p>
        <p>TRACK YOUR ORDER</p>
        <p>CUSTOMER REVIEWS</p>
        <p>RETURNS</p>
        <p>CONTACT US</p>
        <p>FAQ&apos;s</p>
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

        <a className="mt-[-1.35vmin] 2xl:mt-[-1.5vmin] darktext text-[3.55vmin]">
          <i className="ri-pinterest-fill"></i>
        </a>
      </div>
    </div>
  );
};

export default Smallheader;
