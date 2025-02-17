/* eslint-disable react/jsx-key */
import ProductCard from "../CARDS/ProductCard";
import { useContext } from "react";
import { AppContext } from "../../AppContext/AppContext";
const Product = () => {
  const { change } = useContext(AppContext);
  const Prodname = "Silk raw Mango";
  const data = [
    {
      image: "/Sarees/saree1.jpg",
      name: "Silk raw mango",
      price: "3000",
    },
    {
      image: "/Sarees/saree1.jpg",
      name: "Silk raw mango",
      price: "3000",
    },
    {
      image: "/Sarees/saree1.jpg",
      name: "Silk raw mango",
      price: "3000",
    },
    {
      image: "/Sarees/saree1.jpg",
      name: "Silk raw mango",
      price: "3000",
    },
    {
      image: "/Sarees/saree1.jpg",
      name: "Silk raw mango",
      price: "3000",
    },
    {
      image: "/Sarees/saree1.jpg",
      name: "Silk raw mango",
      price: "3000",
    },
    {
      image: "/Sarees/saree1.jpg",
      name: "Silk raw mango",
      price: "3000",
    },
  ];
  return (
    <div>
      <>
        <div
          className="flex flex-col text-center "
          style={{
            paddingTop: `${!change ? "23%" : "14%"}`,

            zIndex: 900,
          }}
        >
          <p className="text-sm text-gray-500">Home/{Prodname}</p>
          <h2 className="text-3xl text-gray-500 font-Montserrat font-medium">
            {Prodname}
          </h2>
        </div>
        <div className="flex mt-10">
          <img className="h-25 w-[50vw]" src="/img copy.png" alt="" />
          <img className="h-25 w-[50vw]" src="/Untitled design.png" alt="" />
        </div>

        <div className="mt-20 flex">
          <div className="w-[40vw] border-2"></div>
          <div className="flex flex-wrap gap-x-6 gap-y-6 justify-center items-center">
            {data.map((item) => (
              <ProductCard data={item} />
            ))}
          </div>
        </div>
      </>
    </div>
  );
};

export default Product;
