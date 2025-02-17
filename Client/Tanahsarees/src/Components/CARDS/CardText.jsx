/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import Tilt from "react-parallax-tilt";

const CardText = (props) => {
  const { data } = props;

  return (
    <>
      <div className="flex justify-center items-center overflow-hidden cursor-pointer gap-x-5">
        {data.map((item) => (
          <Tilt
            tiltMaxAngleX={15} // Tilt angle on X-axis
            tiltMaxAngleY={15} // Tilt angle on Y-axis
            scale={1.03} // Image zoom on hover
            transitionSpeed={500} // Smooth transition
            className="relative w-80 h-[60vvmin] bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <div className="flex flex-col  overflow-hidden gap-y-3">
              {/* Image Section */}
              <div className="relative overflow-hidden w-full h-2/3">
                <img
                  src={item.image}
                  alt="Tilted Image"
                  className="w-full  h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                {/* Black vignete */}
                <div className="absolute inset-x-[-100px] bottom-0 h-1/1 bg-gradient-to-t from-black/100 via-transparent"></div>
                {/* Text Content Section */}
                <h2 className="absolute w-full bottom-10 text-4xl flex pt-1 justify-center font-GreatVibes text-[#DFC08A] overflow-hidden">
                  {item.maintitle}
                </h2>
                {item.description ? (
                  <p className="absolute bottom-10 text-[#BCBBBC] text-Montserrat font-normal flex text-center p-2">
                    {item.description}
                  </p>
                ) : (
                  ""
                )}
                <h3 className="absolute bottom-2   w-full  text-[#BCBBBC] text-Montserrat font-normal flex justify-center text-xl p-2 rounded">
                  {item.title}
                </h3>
              </div>
            </div>
          </Tilt>
        ))}
      </div>
    </>
  );
};

export default CardText;
