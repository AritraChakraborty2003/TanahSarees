/* eslint-disable no-unused-vars */
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

  const sections = [
    {
      title: "Catalogue Management",
      path: "/cataloguemanager",
      icon: "/CMSIMG/catalogue.png",
    },
    {
      title: "Transaction History",
      path: "/transactionmanager",
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

  return (
    <>
      <div
        className="flex flex-wrap gap-x-5 gap-y-6 pt-6 pb-6  justify-center items-center  bg-gray-50"
        style={{
          marginTop: `${
            !change
              ? screen.width > 1000
                ? "15%"
                : ""
              : screen.width > 1000
              ? "1.5%"
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
        <div className="hidden lg:block w-[40vw]">
          <NewOrdersChart />
        </div>
      </div>
    </>
  );
};

export default CmsDashboard;
