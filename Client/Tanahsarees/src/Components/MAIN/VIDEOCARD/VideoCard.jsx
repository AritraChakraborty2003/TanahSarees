import Slider from "react-slick";
import { useState, useRef, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const VideoCard = () => {
  const data = [
    { video: "/Video/video1.webm", name: "First Sample", price: "₹2,000" },
    { video: "/Video/video2.webm", name: "Second Sample", price: "₹2,553" },
    { video: "/Video/video3.webm", name: "Third Sample", price: "₹2,312" },
    { video: "/Video/video4.webm", name: "Fourth Sample", price: "₹2,753" },
    { video: "/Video/video5.webm", name: "Fifth Sample", price: "₹2,612" },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    // Pause all videos except the active one
    const videos = document.querySelectorAll(".carousel-video");
    videos.forEach((video, index) => {
      if (index === activeIndex) {
        video.play();
      } else {
        video.pause();
      }
    });
  }, [activeIndex]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    arrows: false,
    lazyLoad: "ondemand",
    beforeChange: (oldIndex, newIndex) => setActiveIndex(newIndex),
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="flex px-4 mt-7 lg:mt-12">
      <Slider {...settings} ref={sliderRef} className="w-full">
        {data.map((item, index) => (
          <div key={index} className="px-2">
            <div className="relative flex flex-col p-4 mb-4 rounded-md shadow-lg w-[90vw] lg:w-[30vmin]">
              <video
                className="carousel-video w-full h-full object-cover rounded-md"
                muted
                loop
                playsInline
                preload="metadata"
                poster="/thumbnails/video-thumbnail.jpg" // Optional: Add a poster image for faster load
              >
                <source src={item.video} type="video/webm" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute bottom-0 left-0 w-full p-2 bg-white bg-opacity-80 text-center">
                <p className="text-gray-700 text-md font-medium">
                  {item.name.slice(0, 10) + "..."}
                </p>
                <p className="text-gray-700 font-semibold">{item.price}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default VideoCard;
