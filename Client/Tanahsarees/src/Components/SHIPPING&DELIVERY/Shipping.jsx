import { useContext } from "react";
import Faqcomponent from "../FAQ/Faqcomponent";
import { AppContext } from "../../AppContext/AppContext";

const Shipping = () => {
  const { change } = useContext(AppContext);
  const faqs = [
    {
      question: "How do I track my order?",
      answer:
        "You can track your order using the tracking ID provided in your email.",
    },
    {
      question: "What is the shipping duration?",
      answer:
        "Standard shipping takes 5-7 business days, while express shipping takes 2-3 days.",
    },
    {
      question: "Can I change my shipping address?",
      answer:
        "Yes, you can modify your address before the order is dispatched.",
    },
  ];
  return (
    <div
      className="w-[100vw]  flex flex-col items-center "
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
      {/* First Internal Div - Breadcrumbs */}
      <div className="flex flex-col items-center text-gray-600 mt-10 p-1 ">
        <p className="text-sm mb-3 font-Montserrat">Home / Shipping</p>
        <p className="text-7xl font-medium overflow-hidden p-1 font-Montserrat">
          DELIVERY
        </p>
      </div>

      {/* Second Internal Div - Image */}
      <div className="w-[95vw] lg:w-[80vw] h-[63vh] mt-10 flex justify-center items-center">
        <img
          src="https://t4.ftcdn.net/jpg/05/11/73/83/240_F_511738334_ece4QeAUMMN6Pf7UxUax0y24Xh2SyuFu.jpg"
          alt="Shipping"
          className="max-w-full h-full object-contain"
        />
      </div>

      {/* Third Internal Div - FAQ */}
      <div className=" w-[95vw] lg:w-[100vw] mt-[-50vmin]">
        <Faqcomponent data={faqs} type={"not_faq"} />
      </div>
    </div>
  );
};

export default Shipping;
