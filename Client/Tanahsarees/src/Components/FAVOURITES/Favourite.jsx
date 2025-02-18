/* eslint-disable react/jsx-key */
import { useContext } from "react";
import ProductCard from "../CARDS/ProductCard";
import { AppContext } from "../../AppContext/AppContext";

const Favourite = () => {
  const { change } = useContext(AppContext);
  const data = [
    {
      image: "/Sarees/saree1.jpg",
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
      image: "/Sarees/saree1.jpg",
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
      image: "/Sarees/saree1.jpg",
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
      image: "/Sarees/saree1.jpg",
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
      className="mt-100"
      style={{
        marginTop: `${
          !change
            ? screen.width > 1000
              ? "24%"
              : ""
            : screen.width > 1000
            ? "14%"
            : ""
        }`, // Adjust based on header height
        zIndex: 10, // Keep content below the header
      }}
    >
      <>
        <div className="flex flex-col items-center text-gray-600 mt-10 p-1 ">
          <p className="text-sm mb-3 font-Montserrat">Home / Favourites</p>
          <p className="text-5xl lg:text-5xl font-medium overflow-hidden p-1 font-Montserrat">
            FAVOURITES
          </p>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-6 justify-center items-center mt-10">
          {data.map((item) => (
            <ProductCard data={item} type={"favourite"} />
          ))}
        </div>
      </>
    </div>
  );
};

export default Favourite;
