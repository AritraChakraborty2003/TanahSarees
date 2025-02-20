import { useContext } from "react";
import { AppContext } from "../../AppContext/AppContext";
const SizeChart = () => {
  const { change } = useContext(AppContext);
  return (
    <div
      className="flex flex-col justify-center items-center gap-8 lg:gap-15 w-full  lg:mt-[10vh] mb-10 pl-10 pr-10 lg:pl-[50vh] lg:pr-[50vh]"
      style={{
        marginTop: `${
          !change
            ? screen.width > 1000
              ? "20%"
              : ""
            : screen.width > 1000
            ? "12%"
            : ""
        }`, // Adjust based on header height
        zIndex: 10, // Keep content below the header
      }}
    >
      <div className="flex flex-col items-center text-gray-600 mt-7 p-1 ">
        <p className="text-sm mb-3 font-Montserrat">Home / Sizechart</p>
        <p className="text-5xl lg:text-7xl font-medium overflow-hidden p-1 font-Montserrat">
          SIZE CHART
        </p>
      </div>
      <div className="w-[90vw] lg:w-[70vw] lg:h-70vh  shadow-2xl">
        <img src="/SIZEIMG/p2_R.jpg" alt="head img" />
      </div>
      <div className=" shadow-2xl">
        <img src="/SIZEIMG/Blouse_Size_Chart.jpg" alt="blouse size" />
      </div>
      <div className=" ">
        <img src="/SIZEIMG/saree_size.jpg" alt="saree size" />
      </div>
    </div>
  );
};

export default SizeChart;
