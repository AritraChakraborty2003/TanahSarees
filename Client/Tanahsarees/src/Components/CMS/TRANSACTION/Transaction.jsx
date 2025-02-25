/* eslint-disable react/jsx-key */
import TransactionCard from "../CMScards/TransactionCard";
import { useContext } from "react";
import { AppContext } from "../../../AppContext/AppContext";
import SearchBar from "../CMS_Search/SearchBar";

const Transaction = () => {
  const { change } = useContext(AppContext);
  const data = [
    {
      id: "pay_ABC123",
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
      amount: 120000,
      currency: "INR",
      status: "failed",
      method: "Netbanking",
      created_at: 1719081223,
      email: "john.doe@example.com",
      contact: "9988776655",
    },
    {
      id: "pay_GHI789",
      amount: 25000,
      currency: "INR",
      status: "captured",
      method: "Credit Card",
      created_at: 1719082323,
      email: "alice@example.com",
      contact: "9123456789",
    },
    {
      id: "pay_JKL012",
      amount: 75000,
      currency: "INR",
      status: "refunded",
      method: "Debit Card",
      created_at: 1719083423,
      email: "mike@example.com",
      contact: "9234567890",
    },
    {
      id: "pay_MNO345",
      amount: 90000,
      currency: "INR",
      status: "captured",
      method: "Wallet",
      created_at: 1719084523,
      email: "emma@example.com",
      contact: "9345678901",
    },
    {
      id: "pay_PQR678",
      amount: 45000,
      currency: "INR",
      status: "failed",
      method: "UPI",
      created_at: 1719085623,
      email: "david@example.com",
      contact: "9456789012",
    },
    {
      id: "pay_STU901",
      amount: 110000,
      currency: "INR",
      status: "captured",
      method: "Netbanking",
      created_at: 1719086723,
      email: "sophia@example.com",
      contact: "9567890123",
    },
  ];

  return (
    <>
      <div
        className="flex flex-col text-center mt-6  lg:mt-0"
        style={{
          marginTop: `${
            !change
              ? screen.width > 1000
                ? "17%"
                : ""
              : screen.width > 1000
              ? "15%"
              : ""
          }`, // Adjust based on header height
          zIndex: 10, // Keep content below the header
        }}
      >
        <p className="text-sm mr-5 text-gray-500">Home/Transactions</p>
        <h2 className="text-3xl lg:text-5xl text-gray-500 font-Montserrat mt-3 font-medium overflow-hidden">
          Transaction History
        </h2>
        <div className="flex justify-center items-center w-[100vw] pb-5 mt-10">
          <div className="w-[85vw] lg:w-[50vw] ">
            <SearchBar category="order" />
          </div>
        </div>
      </div>
      <div className=" flex flex-col justify-center items-center ">
        <div className="border-1 mt-20 border-gray-200 mb-15">
          <div className=" flex w-[90vw] justify-between border-b-2 border-2  p-2">
            <li>Transaction ID:</li>
            <li>Amount</li>
            <li>Status:</li>
            <li>Payment Method:</li>
            <li>Email:</li>
            <li className="mr-5">Contact:</li>
          </div>
          <div>
            {data.map((item) => (
              <TransactionCard data={item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Transaction;
