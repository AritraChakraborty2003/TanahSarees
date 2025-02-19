/* eslint-disable react/jsx-key */
import CartDisplay from "../CARDS/CartDisplay";
import { useContext } from "react";
import { AppContext } from "../../AppContext/AppContext";
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
const Carts = () => {
  const { change } = useContext(AppContext);
  return (
    <div
      className="mt-5 pb-10"
      style={{
        marginTop: `${
          !change
            ? screen.width > 1000
              ? "23.5%"
              : ""
            : screen.width > 1000
            ? "14%"
            : ""
        }`, // Adjust based on header height
        zIndex: 10, // Keep content below the header
      }}
    >
      <>
        <div className="flex flex-col items-center text-gray-600  p-1 ">
          <p className="text-xs lg:text-sm mb-3 font-Montserrat">
            Home / Shopping Cart
          </p>
          <p className="text-xl lg:text-5xl font-medium overflow-hidden p-1 font-Montserrat">
            SHOPPING CART
          </p>
        </div>
        <div className="flex  flex-wrap gap-x-10 gap-y-8 w-[100vw] justify-center items-center mt-10">
          {data.map((item) => (
            <CartDisplay data={item} />
          ))}
        </div>
      </>
    </div>
  );
};

export default Carts;
