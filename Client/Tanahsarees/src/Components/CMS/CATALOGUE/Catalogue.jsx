/* eslint-disable no-unused-vars */
import { useState, useContext, useEffect } from "react";
import { motion } from "framer-motion";
import ViewCatalogue from "./ViewCatalogue";
import AddCatalogue from "./AddCatalogue";
import { AppContext } from "../../../AppContext/AppContext";
import UseHTTPRequest from "../../../Utils/useHTTPRequest";
import SearchBar from "../CMS_Search/SearchBar";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useCheckAuth } from "../../../Utils/useCheckAuth";
import { toast } from "react-toastify";

const Catalogue = () => {
  const {
    change,
    setHttpClick,
    isAdminLogin,
    setHttpClickDelete,
    activeDeleteSaree,
  } = useContext(AppContext);

  const [activeTab, setActiveTab] = useState("view");
  const [trigger, setTrigger] = useState(false);
  const [formData, setFormData] = useState({});
  const [tigger_auth, set_tigger_auth] = useState(false);

  const [isLoginAdmin, setIsLoginAdmin] = useState(false);

  // const data = [
  //   { image: "/Sarees/saree1.jpg", name: "Silk raw mango", price: "3000" },
  //   { image: "/Sarees/saree2.jpg", name: "Silk raw mango", price: "3000" },
  //   { image: "/Sarees/saree8.jpg", name: "Silk raw mango", price: "3000" },
  //   { image: "/Sarees/saree7.jpg", name: "Silk raw mango", price: "3000" },
  //   { image: "/Sarees/saree9.jpg", name: "Silk raw mango", price: "3000" },
  //   { image: "/Sarees/saree3.jpg", name: "Silk raw mango", price: "3000" },
  //   { image: "/Sarees/saree4.jpg", name: "Silk raw mango", price: "3000" },
  // ];

  const data = UseHTTPRequest(null, "/sarees", "GET", "", "");
  // API Call
  const res = UseHTTPRequest(trigger, "/sarees", "POST", formData, "");

  //For Delete api call
  const del = UseHTTPRequest(null, "/sarees", "DELETE", "", "sarees");

  useEffect(() => {
    if (activeDeleteSaree) {
      setHttpClickDelete(true);
    }
  }, [activeDeleteSaree, setHttpClickDelete]);

  // Handle Form Submission
  const handleFormSubmit = async (values) => {
    const {
      sku,
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
      additionalImages,
    } = values;

    const files = [file, ...additionalImages];

    const newFormData = new FormData();
    newFormData.append("sku", sku);
    newFormData.append("sname", sname);
    newFormData.append("type", type);
    newFormData.append("price", price);
    newFormData.append("material", material);
    newFormData.append("colour", colour);
    newFormData.append("discount", discount);
    newFormData.append("occasion", occasion);
    newFormData.append("topSelling", topSelling === "yes");
    newFormData.append("rating", Number(rating));
    files.forEach((file) => {
      newFormData.append("files", file);
    });

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_APP_API_URL_TEST}api/v1/sarees`,
        newFormData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      if (response.data.message === "Saree added successfully!") {
        toast.success("Saree added successfully!");
      } else {
        toast.error("Something went wrong...");
      }
    } catch (error) {
      console.error("Upload Error:", error);
      alert("Upload Failed!");
    }
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
      <div className="relative flex justify-center space-x-5 lg:space-x-70 dark p-3 mt-5 w-[90vw] lg:rounded-lg">
        {["view", "update", "add"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`relative text-lg px-4 py-2 transition overflow-hidden ${
              activeTab === tab ? "light rounded-2xl p-1 darktxt" : "text-white"
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
              <div
                className={`flex flex-wrap p-1 gap-x-6 space-y-8 justify-center items-center mt-8 lg:mt-9 pt-6 ${
                  data ? "light" : "bg-white"
                }`}
              >
                {data ? (
                  [...data]
                    .reverse()
                    .map((item, index) => (
                      <ViewCatalogue key={index} data={item} />
                    ))
                ) : (
                  <p>Data Loading</p>
                )}
              </div>
            </div>
          )}
          {activeTab === "update" && (
            <AddCatalogue onSubmit={handleFormSubmit} />
          )}
          {activeTab === "add" && (
            <AddCatalogue onSubmit={handleFormSubmit} type={"update"} />
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Catalogue;
