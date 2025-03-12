import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Hardcoded images (Replace with API later)
const images = [
  "BANNERSIMG/03chui-MadewithPosterMyWall.jpg",
  "BANNERSIMG/Bridalcollectio.jpeg",
  "BANNERSIMG/Festivecollectio.jpeg",

  "BANNERSIMG/KatanSilkcollectionbanner.jpeg",
  "BANNERSIMG/suitbanne.jpeg",
];

const BannerSlider = () => {
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
          {dots}
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
      className="w-full mt-[-1vmin] 2xl:mt-4 relative overflow-hidden"
      style={{
        zIndex: 10,
      }}
    >
      <Slider {...settings} className="h-full overflow-hidden">
        {images.map((img, index) => (
          <div
            key={index}
            className="w-full h-[50vh] sm:h-[65vh] lg:h-[90vh] flex justify-center items-center"
          >
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover pointer-events-none"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BannerSlider;
