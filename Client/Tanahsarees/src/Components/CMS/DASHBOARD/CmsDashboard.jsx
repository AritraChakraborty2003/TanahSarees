/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import { useNavigate } from "react-router-dom";
import CMScard from "../CMScards/CMScard";
import NewOrdersChart from "../CMScards/NewOrderCharts";
import "react-modern-drawer/dist/index.css";
import { useContext, useEffect, useState } from "react";
import { useCheckAuth } from "../../../Utils/useCheckAuth";
import { AppContext } from "../../../AppContext/AppContext";

const CmsDashboard = () => {
  const [checkingAuth, isCheckAuth] = useState(true);

  const { change, setHttpClick, isAdminLogin } = useContext(AppContext);

  const [tigger_auth, set_tigger_auth] = useState(false);

  const [isLoginAdmin, setIsLoginAdmin] = useState(false);

  const navigate = useNavigate();
  // const dataLogin = useCheckAuth(tigger_auth, "admin");
  // useEffect(() => {
  //   if (dataLogin.isAuthenticated == true) {
  //     setIsLoginAdmin(true);
  //   }
  // }, [dataLogin]);
  // useEffect(() => {
  //   if (!isAdminLogin) {
  //     navigate("/cms");
  //   }
  // }, [isAdminLogin, navigate]);

  const sections = [
    {
      title: "Catalogue Management",
      path: "/cataloguemanager",
      icon: "/CMSIMG/catalogue.png",
    },
    {
      title: "Cancel History ",
      path: "/cmscancel",
      icon: "/CMSIMG/transaction.png",
    },
    {
      title: "Orders History",
      path: "/cmsorders",
      icon: "/CMSIMG/orders.png",
    },
    {
      title: "Review Management",
      path: "/CMSReviews",
      icon: "/CMSIMG/testimonial.png",
    },
    {
      title: "Transaction Management",
      path: "/cmstransaction",
      icon: "/CMSIMG/transaction.png",
    },
    {
      title: "Banner Management",
      path: "/bannerManagement",
      icon: "/CMSIMG/bannermgmt.jpeg",
    },
    {
      title: "Reciept",
      path: "/reciept",
      icon: "/CMSIMG/transaction.png",
    },
    {
      title: "Track Order",
      path: "/CmsTrackOrder",
      icon: "/CMSIMG/transaction.png",
    },
    { title: "Users", path: "/CMSusers", icon: "/CMSIMG/users.png" },
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
