<<<<<<< HEAD
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
=======
import { useState, useEffect } from "react";
>>>>>>> ad06ff6 (UPDATED:Updated the CMS UI designs)
import TransactionCard from "../CMScards/TransactionCard";
import { useContext, useState, useEffect } from "react";
import { AppContext } from "../../../AppContext/AppContext";
import SearchBar from "../CMS_Search/SearchBar";

import { useNavigate } from "react-router-dom";
import { useCheckAuth } from "../../../Utils/useCheckAuth";

const Transaction = () => {
<<<<<<< HEAD
  const { change, setHttpClick, isAdminLogin } = useContext(AppContext);

  const [tigger_auth, set_tigger_auth] = useState(false);

  const [isLoginAdmin, setIsLoginAdmin] = useState(false);

  const navigate = useNavigate();
  const dataLogin = useCheckAuth(tigger_auth, "admin");
  useEffect(() => {
    if (dataLogin.isAuthenticated == true) {
      setIsLoginAdmin(true);
    }
  }, [dataLogin]);
  useEffect(() => {
    if (!isAdminLogin) {
      navigate("/cms");
    }
  }, [isAdminLogin, navigate]);

=======
  const { change } = useContext(AppContext);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // Default check for mobile
>>>>>>> ad06ff6 (UPDATED:Updated the CMS UI designs)
  const data = [
    {
      id: "pay_ABC123",
      orderid: "1243",
      amount: 50000,
      currency: "INR",
      status: "captured",
      method: "UPI",
      created_at: 1719080123,
      email: "user@example.com",
      contact: "9876543210",
    },
    {
      id: "pay_DEF456",
      orderid: "1243",
      amount: 120000,
      currency: "INR",
      status: "failed",
      method: "Netbanking",
      created_at: 1719081223,
      email: "john.doe@example.com",
      contact: "9988776655",
    },
    // Add more items as needed...
  ];

  // Resize listener to check screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Update isMobile state based on screen width
    };

    window.addEventListener("resize", handleResize); // Listen for window resize
    return () => window.removeEventListener("resize", handleResize); // Cleanup listener
  }, []);

  return (
    <>
      <div
        className="flex flex-col text-center mt-6 lg:mt-0"
        style={{
          marginTop: `${
            !change
              ? window.innerWidth > 1000
                ? "17%"
                : ""
              : window.innerWidth > 1000
              ? "15%"
              : ""
          }`,
          zIndex: 10,
        }}
      >
        <p className="text-sm mr-5 text-gray-500">Home/Transactions</p>
        <h2 className="text-3xl lg:text-5xl text-gray-500 font-Montserrat mt-3 font-medium overflow-hidden">
          Transaction History
        </h2>
        <div className="flex justify-center items-center w-[100vw] pb-5 mt-10">
          <div className="w-[85vw] lg:w-[50vw]">
            <SearchBar category="order" />
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center mt-4">
        {isMobile ? (
          <div className="">
            <div className="flex  justify-between border-b-1 text-lg mb-2 font-Montserrat font-medium w-[100vw] pr-7 pl-2   list-none">
              <li className="">Transaction ID</li>
              <li className="">Order ID</li>
              <li className="">Amount</li>
            </div>
          </div>
        ) : (
          <div className="flex  border-1 w-[98vw] list-none">
            <li className="w-[12%] ml-2">Transaction ID</li>
            <li className="border-l-1 w-[14%] pl-9 ">Order ID</li>
            <li className="w-[13%] border-l-1 text-center">Amount</li>
            <li className="w-[16%] border-l-1 pl-18">Status</li>
            <li className="border-l-1 w-[14%] pl-23">Method</li>
            <li className="border-l-1 w-[20%] text-center">Email</li>
            <li className="w-[11%] border-l-1 text-center">Contact</li>
          </div>
        )}

        <div className="w-full">
          {data.map((item) => (
            <TransactionCard key={item.id} data={item} isMobile={isMobile} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Transaction;
