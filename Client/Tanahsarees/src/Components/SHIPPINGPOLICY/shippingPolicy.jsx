import { AppContext } from "../../AppContext/AppContext";
import { useContext } from "react";
const ShippingPolicy = () => {
  const { change } = useContext(AppContext);
  return (
    <div
      className="flex flex-col justify-center items-center gap-8 lg:gap-15 w-full  lg:mt-[10vh] mb-10 pl-10 pr-10 lg:pl-[50vh] lg:pr-[50vh]"
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
      {" "}
      <p className="text-sm mt-6">
        <span className="text-4xl font-bold h-[11vmin] lg:h-[10vmin] mt-[3vmin]">
          Shipping Policy
        </span>{" "}
        <br></br>
        <br></br>
        The orders for the user are shipped through registered domestic courier
        companies and/or speed post only. Orders are shipped within 7 days from
        the date of the order and/or payment or as per the delivery date agreed
        at the time of order confirmation and delivering of the shipment,
        subject to courier company post office norms. Platform Owner shall not
        be liable for any delay in delivery by the courier company postal
        authority. Delivery of all orders will be made to the address provided
        by the buyer at the time of purchase. Delivery of our services will be
        confirmed on your email ID as specified at the time of registration. If
        there are any shipping cost(s) levied by the seller or the Platform
        Owner (as the case be),the same is not refundable.
      </p>
    </div>
  );
};

export default ShippingPolicy;
