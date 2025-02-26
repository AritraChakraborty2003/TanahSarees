/* eslint-disable react/prop-types */
import { useState } from "react";

const TransactionCard = (props) => {
  const { id, amount, currency, status, method, email, contact, orderid } =
    props.data;
  const { isMobile } = props; // Receives the isMobile prop

  // State to manage showing more details in mobile view
  const [isOpen, setIsOpen] = useState(false);

  const toggleDetails = () => {
    setIsOpen(!isOpen); // Toggle details on click
  };

  return (
    <div className="w-full ">
      {/* Mobile View: Show key details initially, and toggle the full details */}
      {isMobile ? (
        <div
          className="flex justify-between items-center p-4 bg-white border  shadow-md cursor-pointer"
          onClick={toggleDetails}
        >
          <div className="text-left">{id}</div>
          <div className="text-left">{orderid}</div>
          <div className="text-right">
            {amount} {currency}
          </div>
        </div>
      ) : (
        // Desktop View: Show all the details in a grid
        <div className="grid grid-cols-7 gap-4 p-5 bg-white border-b-[1px] border-gray-200">
          <div className="text-left">{id}</div>
          <div className="text-left">{orderid}</div>
          <div className="text-left">
            {amount} {currency}
          </div>
          <div className="text-left">{status}</div>
          <div className="text-center">{method}</div>
          <div className="text-right">{email}</div>
          <div className="text-right">{contact}</div>
        </div>
      )}

      {/* Mobile View: Show more details when expanded */}
      {isMobile && isOpen && (
        <div className="p-4 mt-2 bg-gray-50 border rounded-lg">
          <div className="flex justify-between text-sm">
            <div>
              <strong>Status:</strong> {status}
            </div>
            <div>
              <strong>Payment Method:</strong> {method}
            </div>
          </div>
          <div className="mt-2">
            <strong>Email:</strong> {email}
          </div>
          <div>
            <strong>Contact:</strong> {contact}
          </div>
        </div>
      )}
    </div>
  );
};

export default TransactionCard;
