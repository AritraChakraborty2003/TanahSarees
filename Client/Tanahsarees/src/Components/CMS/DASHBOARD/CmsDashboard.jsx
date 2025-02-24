/* eslint-disable react/jsx-key */
import { useNavigate } from "react-router-dom";
import CMScard from "../CMScards/CMScard";
import NewOrdersChart from "../CMScards/NewOrderCharts";
import "react-modern-drawer/dist/index.css";
import { useContext, useEffect, useState } from "react";

import { AppContext } from "../../../AppContext/AppContext";

const CmsDashboard = () => {
  const { change, isAdminLogin } = useContext(AppContext);
  const [checkingAuth, isCheckAuth] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAdminLogin) {
      navigate("/cms");
    } else {
      isCheckAuth(false);
    }
  }, [isAdminLogin, navigate]);

  const sections = [
    {
      title: "Catalogue Management",
      path: "/cataloguemanagement",
      icon: "/CMSIMG/catalogue.png",
    },
    {
      title: "Transaction History",
      path: "/transactionrecords",
      icon: "/CMSIMG/transaction.png",
    },
    {
      title: "Orders History",
      path: "/ordershistory",
      icon: "/CMSIMG/orders.png",
    },
    {
      title: "Review Management",
      path: "/testimonial",
      icon: "/CMSIMG/testimonial.png",
    },
    { title: "Users", path: "/users", icon: "/CMSIMG/users.png" },
  ];

  if (checkingAuth) {
    return (
      <>
        <div className="w-[100vw] h-[100vh] flex flex-col items-center justify-center h-screen bg-[#f7d9cb]">
          <h1 className="text-lg text-center">Checking Authentication...</h1>
        </div>
      </>
    );
  }

  return (
    <>
      <div
        className="flex flex-wrap  justify-center items-center pb-10 pt-10 m-10 gap-10 bg-gray-50"
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
        {sections.map((section) => (
          <CMScard
            title={section.title}
            icon={section.icon}
            onClick={() => navigate(section.path)}
          />
        ))}
        <div className="p- w-[40vw]">
          <NewOrdersChart />
        </div>
      </div>
    </>
  );
};

export default CmsDashboard;
