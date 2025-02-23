import { useState } from "react";
import { motion } from "framer-motion";
import ViewCatalogue from "./ViewCatalogue";
import AddCatalogue from "./AddCatalogue";
import { AppContext } from "../../../AppContext/AppContext";
import { useContext } from "react";

const Catalogue = () => {
  const { change } = useContext(AppContext);
  const [activeTab, setActiveTab] = useState("view");

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
      image: "/Sarees/saree7.jpg",
      name: "Silk raw mango",
      price: "3000",
    },
    {
      image: "/Sarees/saree9.jpg",
      name: "Silk raw mango",
      price: "3000",
    },
    {
      image: "/Sarees/saree3.jpg",
      name: "Silk raw mango",
      price: "3000",
    },
    {
      image: "/Sarees/saree4.jpg",
      name: "Silk raw mango",
      price: "3000",
    },
  ];
  const handleFormSubmit = (data) => {
    console.log("Sending to API: ", data);
    // Send data to backend API using fetch/axios
  };

  const tabs = ["view", "update", "add"];
  const tabContent = {
    view: (
      <>
        <div className="flex flex-wrap p-1">
          {" "}
          {data.map((item, index) => (
            <ViewCatalogue key={index} data={item} />
          ))}
        </div>
      </>
    ),
    update: "",
    add: (
      <>
        <AddCatalogue onSubmit={handleFormSubmit} />
      </>
    ),
  };

  return (
    <div
      className="w-[100vw] flex flex-col justify-center items-center "
      style={{
        marginTop: `${
          !change
            ? screen.width > 1000
              ? "17%"
              : ""
            : screen.width > 1000
            ? "12%"
            : ""
        }`, // Adjust based on header height
        zIndex: 10, // Keep content below the header
      }}
    >
      <h1 className="text-center font-Montserrat text-4xl p-2">
        Catalogue Page
      </h1>

      {/* Navigation Tabs */}
      <div className="relative flex justify-center space-x-5 lg:space-x-70  bg-[#F58B74] p-3 mt-5 w-[90vw] lg:rounded-lg">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`relative text-lg px-4 py-2 transition overflow-hidden ${
              activeTab === tab
                ? "bg-[#883022] rounded-2xl p-1 text-white"
                : "text-white"
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}

            {activeTab === tab && (
              <motion.div
                layoutId="underline"
                className="absolute left-0 right-0 -bottom-1  bg-[#883022] rounded-full"
              />
            )}
          </button>
        ))}
      </div>

      {/* Sliding Content Box */}
      <div className="relative w-[100%]  mt-6 bg-gray-100 rounded-lg overflow-hidden p-4 flex justify-center items-center ">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.6 }}
          className="text-center text-lg "
        >
          {tabContent[activeTab]}
        </motion.div>
      </div>
    </div>
  );
};

export default Catalogue;
