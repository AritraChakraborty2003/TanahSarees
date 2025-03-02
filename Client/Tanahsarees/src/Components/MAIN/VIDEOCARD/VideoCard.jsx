import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const VideoCard = () => {
  const data = [
    {
      video: "/Video/video1.mp4",
      name: "first sample video",
      price: "2000",
    },
    {
      video: "/Video/video1.mp4",
      name: "second sample video",
      price: "2553",
    },
    {
      video: "/Video/video1.mp4",
      name: "third sample video",
      price: "2312",
    },
    {
      video: "/Video/video1.mp4",
      name: "second sample video",
      price: "2553",
    },
    {
      video: "/Video/video1.mp4",
      name: "third sample video",
      price: "2312",
    },
    {
      video: "/Video/video1.mp4",
      name: "second sample video",
      price: "2553",
    },
    {
      video: "/Video/video1.mp4",
      name: "third sample video",
      price: "2312",
    },
  ];
  const settings = {
    dots: true, // Show navigation dots
    infinite: true, // Infinite loop
    speed: 1000, // Transition speed
    slidesToShow: 5, // Show only one image at a time
    slidesToScroll: 1, // Scroll one at a time
    autoplay: true, // Auto-slide
    autoplaySpeed: 3000, // Slide every 3 seconds
    arrows: false, // Hide arrows
    lazyLoad: "ondemand", // Load videos only when they appear
    responsive: [
      {
        breakpoint: 1024, // For tablets & smaller screens
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 600, // For mobile
        settings: { slidesToShow: 2 },
      },
    ],
  };

  return (
    <>
      <div className="flex pl-6 pr-2 mt-7  lg:mt-20">
        <Slider {...settings} className="w-full overflow-hidden">
          {data.map((item, index) => (
            <div key={index} className="px-2">
              {" "}
              {/* Add padding for spacing */}
              <div className="light border-[1px] border-gray-300 relative flex flex-col p-4 mb-4 rounded-md shadow-gray-350 w-[45vw] lg:w-[30vmin] shadow-lg">
                <video
                  className="border-[1px] border-gray-300 w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                >
                  <source src={item.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="absolute rounded-sm flex w-[15vw]  h-[7.5vh] top-[58%] left-[35%] lg:w-[4vw] lg:h-[8vh] lg:top-[65%] lg:left-[38%] ">
                  <video className=" w-full h-full object-cover">
                    <source src={item.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div className="mb-10">
                  <p className="flex justify-center mt-8 darktxt text-md font-Montserrat">
                    {item.name.slice(0, 10) + "..."}
                  </p>
                  <p className="flex justify-center darktxt font-semibold text-md">
                    ₹&nbsp;{item.price}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default VideoCard;
