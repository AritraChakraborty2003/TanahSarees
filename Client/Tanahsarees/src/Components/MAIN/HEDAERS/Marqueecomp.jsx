import Marquee from "react-fast-marquee";
const Marqueecomp = () => {
  return (
    <Marquee
      className="dark p-[1.25vmin] font-medium font-Montserrat"
      pauseOnHover={true}
      speed={50}
    >
      &nbsp;
      <p
        className="text-[3vmin] lg:text-[1.45vmin] ml-4"
        style={{ color: "#EEE5DA" }}
      >
        THE SHAADI CARNIVAL{" "}
        <span className="text-[2.85vmin] lg:text-[1.45vmin] lighttxt font-normal ">
          | UPTO 50% OFF Don&lsquo;t miss out!!
        </span>
        &nbsp; ||
      </p>
      <p
        className="text-[3vmin] lg:text-[1.45vmin]  ml-4"
        style={{ color: "#EEE5DA" }}
      >
        SELECT PRODUCTS
        <span className="text-[2.85vmin] lg:text-[1.45vmin] lighttxt font-normal  ">
          &nbsp;|| @ 15% OFF ONLY ON APP (USE CODE: APPSALE15) &nbsp;||{" "}
        </span>
      </p>
      <p
        className="text-[3vmin] lg:text-[1.45vmin]  ml-4"
        style={{ color: "#EEE5DA" }}
      >
        TOP SAREE STORE IN VARANASI
      </p>
    </Marquee>
  );
};

export default Marqueecomp;
