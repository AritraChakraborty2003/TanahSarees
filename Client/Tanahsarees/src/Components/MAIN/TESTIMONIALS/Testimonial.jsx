/* eslint-disable react/jsx-key */
// import CardText from "../../CARDS/CardText";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import UseHTTPRequest from "../../../Utils/useHTTPRequest";
import TestinomialsCard from "../../CARDS/TestinomialsCard";

const Testimonial = () => {
  const data = UseHTTPRequest(null, "/testimonials", "GET", "");
  let settings;
  if (data) {
    settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: Math.min(3, data.length), // Ensures at least 4 slides are shown
      slidesToScroll: 1,
      autoplay: true, // Enable auto-slide

      autoplaySpeed: 2500, // Set auto-slide speed (3 seconds)
      pauseOnHover: true, // Pause on hover for better UX
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: Math.min(3, data.length),
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: Math.min(2, data.length),
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
          },
        },
      ],
    };
  }

  return (
    <div className="mt-5 lg:mt-15">
      <p className="text-center font-Montserrat darktxt font-medium text-[6.35vmin] lg:text-[4.75vmin]">
        Our happy customers
      </p>
      <p className="text-center text-sm lg:text-md darktxt mt-1">
        ( Our Testimonials from clients )
      </p>
      <div className=" mt-5 lg:mt-10 lg:ml-6">
        {data && data.length > 4 ? (
          <Slider className="overflow-hidden" {...settings}>
            {data.map((item) => (
              <TestinomialsCard review={item} />
            ))}
          </Slider>
        ) : (
          <div className="flex justify-center gap-3">
            {data && data.map((item) => <TestinomialsCard review={item} />)}
          </div>
        )}
      </div>
    </div>
  );
};

export default Testimonial;
