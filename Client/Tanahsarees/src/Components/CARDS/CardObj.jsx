/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import Tilt from "react-parallax-tilt";
const CardObj = (props) => {
  const { data } = props;
  return (
    <>
      <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-6  lg:gap-x-7 2xl:gap-x-10">
        {data.map((item) => (
          <div className="flex  flex-col gap-y-2 lg:gap-y-1">
            <Tilt
              tiltMaxAngleX={15} // Tilt angle on X-axis
              tiltMaxAngleY={15} // Tilt angle on Y-axis
              scale={1.03} // Image zoom on hover
              transitionSpeed={500} // Smooth transition
              className="relative lg:ml-0  w-[45vw]  lg:w-80  bg-white rounded-lg shadow-lg overflow-hidden"
            >
              {/* Image Section */}
              <div className="relative overflow-hidden w-full h-2/3">
                <img
                  src={item.image}
                  alt="Tilted Image"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
            </Tilt>
            {/* Text Content Section */}
            <div className="lg:p-1 text-center">
              <p className="text-sm lg:text-md 2xl:text-[2vmin] text-gray-600">
                {item.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CardObj;
