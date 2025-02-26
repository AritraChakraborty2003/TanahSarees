/* eslint-disable no-unused-vars */
import { useState, useContext, useEffect } from "react";
import { motion } from "framer-motion";
import ViewCatalogue from "./ViewCatalogue";
import AddCatalogue from "./AddCatalogue";
import { AppContext } from "../../../AppContext/AppContext";
import UseHTTPRequest from "../../../Utils/useHTTPRequest";
import SearchBar from "../CMS_Search/SearchBar";
import { useNavigate } from "react-router-dom";
import { useCheckAuth } from "../../../Utils/useCheckAuth";

const Catalogue = () => {
  const { change, setHttpClick, isAdminLogin } = useContext(AppContext);

  const [activeTab, setActiveTab] = useState("view");
  const [trigger, setTrigger] = useState(false);
  const [formData, setFormData] = useState({});
  const [tigger_auth, set_tigger_auth] = useState(false);

  const [isLoginAdmin, setIsLoginAdmin] = useState(false);

  const data = [
    { image: "/Sarees/saree1.jpg", name: "Silk raw mango", price: "3000" },
    { image: "/Sarees/saree2.jpg", name: "Silk raw mango", price: "3000" },
    { image: "/Sarees/saree8.jpg", name: "Silk raw mango", price: "3000" },
    { image: "/Sarees/saree7.jpg", name: "Silk raw mango", price: "3000" },
    { image: "/Sarees/saree9.jpg", name: "Silk raw mango", price: "3000" },
    { image: "/Sarees/saree3.jpg", name: "Silk raw mango", price: "3000" },
    { image: "/Sarees/saree4.jpg", name: "Silk raw mango", price: "3000" },
  ];

  // API Call
  const res = UseHTTPRequest(trigger, "/sarees", "POST", formData);

  // Handle Form Submission
  const handleFormSubmit = (values) => {
    const {
      sname,
      type,
      price,
      file,
      material,
      colour,
      discount,
      occasion,
      topSelling,
      rating,
    } = values;

    const newFormData = new FormData();
    newFormData.append("sname", sname);
    newFormData.append("type", type);
    newFormData.append("price", price);
    newFormData.append("material", material);
    newFormData.append("colour", colour);
    newFormData.append("discount", discount);
    newFormData.append("occasion", occasion);
    newFormData.append("topSelling", topSelling === "yes");
    newFormData.append("rating", rating);
    newFormData.append("file", file);

    setFormData(newFormData);
    setHttpClick(true);
  };

  return (
    <div
      className="w-full flex flex-col justify-center items-center"
      style={{
        marginTop: !change
          ? window.innerWidth > 1000
            ? "17%"
            : ""
          : window.innerWidth > 1000
          ? "12%"
          : "",
        zIndex: 10,
      }}
    >
      <h1 className="text-center font-Montserrat text-4xl p-2">
        Catalogue Page
      </h1>

      {/* Navigation Tabs */}
      <div className="relative flex justify-center space-x-5 lg:space-x-70 bg-[#F58B74] p-3 mt-5 w-[90vw] lg:rounded-lg">
        {["view", "update", "add"].map((tab) => (
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
                className="absolute left-0 right-0 -bottom-1 bg-[#883022] rounded-full"
              />
            )}
          </button>
        ))}
      </div>

      {/* Sliding Content Box */}
      <div className="relative w-full mt-6 bg-gray-100 rounded-lg overflow-hidden p-4 flex justify-center items-center">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.6 }}
          className="text-center text-lg"
        >
          {activeTab === "view" && (
            <div className="w-full flex flex-col items-center">
              <div className="w-[85vw] lg:w-[50vw]">
                <SearchBar category="order" />
              </div>
              <div className="flex flex-wrap p-1 gap-x-6 justify-center items-center mt-6 lg:mt-9">
                {data.map((item, index) => (
                  <ViewCatalogue key={index} data={item} />
                ))}
              </div>
            </div>
          )}
          {activeTab === "update" && <div>Update Section Coming Soon...</div>}
          {activeTab === "add" && <AddCatalogue onSubmit={handleFormSubmit} />}
        </motion.div>
      </div>
    </div>
  );
};

export default Catalogue;
