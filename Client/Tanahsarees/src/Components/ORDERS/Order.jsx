import OrderCard from "../CARDS/OrderCard";
import { useContext } from "react";
import { AppContext } from "../../AppContext/AppContext";

const Order = () => {
  const { change } = useContext(AppContext);
  const data = [
    {
      image: "/Sarees/saree1.jpg",
      name: "Silk raw mango",
      price: "3,000",
    },
    {
      image: "/Sarees/saree2.jpg",
      name: "Silk11 raw mango",
      price: "3000",
    },
    {
      image: "/Sarees/saree8.jpg",
      name: "Silk raw mango",
      price: "3000",
    },
    {
      image: "/Sarees/saree2.jpg",
      name: "Silk raw mango",
      price: "3000",
    },
    {
      image: "/Sarees/saree8.jpg",
      name: "Silk raw mango",
      price: "3000",
    },
    {
      image: "/Sarees/saree2.jpg",
      name: "Silk raw mango",
      price: "3000",
    },
    {
      image: "/Sarees/saree8.jpg",
      name: "Silk raw mango",
      price: "3000",
    },
  ];
  return (
    <div
      className="w-full h-full   flex flex-col  justify-center items-center mt-10 pb-10"
      style={{
        marginTop: `${
          !change
            ? screen.width > 1000
              ? "25%"
              : ""
            : screen.width > 1000
            ? "12%"
            : ""
        }`, // Adjust based on header height
        zIndex: 10, // Keep content below the header
      }}
    >
      <div className="flex w-[85vw] lg:w-[50vw] ">
        <input
          className="w-[75%] p-[1%] border-b-1 "
          type="text"
          placeholder="Enter Order Name..."
        />
        <button className="w-[23%] p-2 lg:p-[0.5%] bg-[#F7D9CB] ml-4 hover:bg-[#f6c6b0]">
          Search
        </button>
      </div>
      <div className="mt-10">
        {" "}
        <OrderCard data={data} />
      </div>
    </div>
  );
};

export default Order;
