import { useState } from "react";
import CartDisplay from "../CARDS/CartDisplay";
import { useContext } from "react";
import { AppContext } from "../../AppContext/AppContext";

const data = [
  {
    _id: "1", // Add unique _id for each item
    image: "/Sarees/saree1.jpg",
    name: "Silk raw mango",
    price: 3000,
  },
  {
    _id: "2",
    image: "/Sarees/saree2.jpg",
    name: "Silk raw mango",
    price: 3000,
  },
  {
    _id: "3",
    image: "/Sarees/saree8.jpg",
    name: "Silk raw mango",
    price: 3000,
  },
];

const Carts = () => {
  const { change } = useContext(AppContext);
  const [chosen, setChosen] = useState([]); // Move state to parent

  return (
    <div
      className="relative mt-5 pb-10 flex flex-col items-center"
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
      <p className="text-center font-Montserrat darktxt font-extralight lg:mt-5 text-xs lg:text-lg">
        Home / Cart
      </p>
      <p className="text-center font-light text-gray-600 font-Poppins    overflow-hidden text-xs lg:text-[1.75vmin] mt-2 lg:mt-5 ">
        ✅ &nbsp;Please select the items you want to purchase
      </p>

      <div className="flex flex-wrap gap-x-10 gap-y-8 w-[100vw] justify-center items-center mt-10">
        {data.map((item) => (
          <CartDisplay
            key={item._id}
            data={item}
            chosen={chosen}
            setChosen={setChosen} // Pass state and updater
          />
        ))}
      </div>

      {/* Checkout Section - Show only if any item is selected */}
      {chosen.length > 0 && (
        <div className="flex justify-evenly lg:mt-20  w-[70%]">
          <div className="flex flex-col">
            <p className="text-lg font-Montserrat font-medium">
              Total: ₹&nbsp;
              {chosen.reduce((acc, id) => {
                const item = data.find((i) => i._id === id);
                return acc + (item ? item.price : 0);
              }, 0)}
            </p>
            <p className="text-xs">Delivery Charges + GST:</p>
          </div>
          <button className=" bg-blue-500  text-white p-2  rounded cursor-pointer">
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Carts;
