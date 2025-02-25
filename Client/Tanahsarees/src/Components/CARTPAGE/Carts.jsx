import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import CartDisplay from "../CARDS/CartDisplay";
import { AppContext } from "../../AppContext/AppContext";
import { useCheckAuth } from "../../Utils/useCheckAuth";
import { toast } from "react-toastify";

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
  const navigate = useNavigate();
  const authStatus = useCheckAuth(null, "auth"); // Using the custom hook

  useEffect(() => {
    if (!authStatus.isAuthenticated) {
      toast.error("You are not logged in");
      navigate("/"); // Redirect if not logged in
    }
  }, [authStatus.isAuthenticated, navigate]);

  if (!authStatus.isAuthenticated) return <p>Loading...</p>; // Prevent content flash before redirection

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
        }`,
        zIndex: 10,
      }}
    >
      <div className="flex flex-col items-center text-gray-600 p-1">
        <p className="text-xs lg:text-sm mb-3 font-Montserrat">
          Home / Shopping Cart
        </p>
        <p className="text-xl lg:text-5xl font-medium overflow-hidden p-1 font-Montserrat">
          SHOPPING CART
        </p>
      </div>
      <div className="flex flex-wrap gap-x-10 gap-y-8 w-[100vw] justify-center items-center mt-10">
        {data.map((item, index) => (
          <CartDisplay key={index} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Carts;
