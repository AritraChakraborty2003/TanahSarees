import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { useContext } from "react";
// import { AppContext } from "../../../AppContext/AppContext";

// Hardcoded images (Replace with API later)
const images = [
  "https://www.chinayabanaras.com/cdn/shop/articles/Blog_Banner_-260723-party-wear-saree-by-Chinaya-Banaras.jpg?v=1690366649",
  "https://www.teejh.com/cdn/shop/files/teejh_Website_Banner_1_da1f15c2-6158-4781-92e9-aa68095e526e_1600x.png?v=1716983365",
  "https://www.manyavar.com/on/demandware.static/-/Library-Sites-ManyavarSharedLibrary/default/dwe6547122/Ace_Your_Saree_Banner_D.jpg",
  "https://banarasilooms.in/cdn/shop/files/saree_banner_02_2_1000x.jpg?v=1636694344",
  "https://houseofelegance.in/cdn/shop/collections/G9A1724.jpg?v=1653133837",
  "https://www.bollywoodtrends.com.au/images/products/FullImage/DESIGNER-INDIAN-SILK-SAREE-BT-SR-831222909-001-001-F.jpg",
  "https://m.media-amazon.com/images/S/aplus-media-library-service-media/694370d9-2807-40b4-be13-104923745258.__CR0,0,970,600_PT0_SX970_V1___.png",
];

const BannerSlider = () => {
  // const { change } = useContext(AppContext);
  const settings = {
    dots: true, // Show navigation dots
    infinite: true, // Infinite loop
    speed: 1000, // Transition speed
    slidesToShow: 1, // Show only one image at a time
    slidesToScroll: 1, // Scroll one at a time
    autoplay: true, // Auto-slide
    autoplaySpeed: 3000, // Slide every 3 seconds
    arrows: false, // Hide arrows
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          bottom: "20px",
          width: "100%",
          textAlign: "center",
        }}
      >
        <ul
          style={{
            margin: "0",
            padding: "0",
            display: "inline-flex",
            gap: "8px",
          }}
        >
          {" "}
          {dots}{" "}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        key={i} // just to ignore ESLint warning
        style={{
          width: "10px",
          height: "10px",
          borderRadius: "50%",
          backgroundColor: "white",
          opacity: 0.7,
          cursor: "pointer",
        }}
      ></div>
    ),
  };

  return (
    <div
      className="w-screen mt-[-1.5vmin]   lg:mt-10  overflow-hidden relative"
      style={{
        zIndex: 10,
        marginTop: "4vmin",
        // marginTop: `${!change ? "320px" : "250px"}`,
      }}
    >
      <Slider {...settings} className="h-full overflow-hidden">
        {images.map((img, index) => (
          <div
            key={index}
            className="w-full h-[65vh] lg:h-[90vh] flex justify-center items-center "
          >
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className="w-full h-[100%]  object-cover pointer-events-none"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BannerSlider;
