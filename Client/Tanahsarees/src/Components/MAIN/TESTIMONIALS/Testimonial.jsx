import CardText from "../../CARDS/CardText";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonial = () => {
  const data = [
    {
      image: "/Sarees/saree1.jpg",
      name: "Ananya Mehta ⭐⭐⭐⭐⭐",
      review:
        "Absolutely loved the silk saree I purchased from TanahSarees! The fabric is so soft, and the intricate zari work is stunning. Perfect for festive occasions. Highly recommend!",
    },
    {
      image: "/Sarees/saree2.jpg",
      name: "Priya Sharma ⭐⭐⭐⭐",
      review:
        "I am thrilled to say that I have received a beautiful silk saree from TanahSarees. The fabric is soft and the design is intricate. Highly recommend this brand!",
    },
    {
      image: "/Sarees/saree3.jpg",
      name: "Radhika Iyer ⭐⭐⭐⭐",
      review:
        "The fabric is soft, and the design is intricate. I would highly recommend this brand to anyone looking for a beautiful silk saree.",
    },
    {
      image: "/Sarees/saree4.jpg",
      name: "Neha Kapoor ⭐⭐⭐⭐⭐",
      review:
        "Fast delivery and premium quality! The silk saree feels luxurious, and the embroidery is exquisite. Worth every penny.",
    },
    {
      image: "/Sarees/saree5.jpg",
      name: "Meera Nair ⭐⭐⭐⭐⭐",
      review:
        "One of the best silk sarees I have ever owned! The detailing is just amazing.",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: Math.min(4, data.length), // Ensures at least 4 slides are shown
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
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div>
      <p className="text-center mt-1 font-Montserrat text-gray-500 font-medium text-[3.5vmin]">
        TANAHSAREES HAPPY CUSTOMERS
      </p>
      <div className="mt-15 mb-15 ">
        {data && data.length > 4 ? (
          <Slider className="overflow-hidden" {...settings}>
            {data.map((item, index) => (
              <CardText key={index} data={[item]} />
            ))}
          </Slider>
        ) : (
          <div className="flex justify-center gap-5">
            {data.map((item, index) => (
              <CardText key={index} data={[item]} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Testimonial;
