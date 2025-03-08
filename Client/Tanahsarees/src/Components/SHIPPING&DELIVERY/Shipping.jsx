import { useContext } from "react";
import Faqcomponent from "../FAQ/Faqcomponent";
import { AppContext } from "../../AppContext/AppContext";

const Shipping = () => {
  const { change } = useContext(AppContext);
  const faqs = [
    {
      title: "How long does delivery take?",
      content:
        "Standard delivery takes 5-7 business days, while express shipping delivers within 2-3 days.",
    },
    {
      title: "Do you offer international shipping?",
      content:
        "Yes, we ship internationally. Delivery times vary based on location, usually taking 10-15 business days.",
    },
    {
      title: "How can I track my order?",
      content:
        "Once your order is shipped, we will provide a tracking ID via email and SMS. You can track your order on our website.",
    },
    {
      title: "Is cash on delivery (COD) available?",
      content:
        "Yes, COD is available for select locations. Please check availability at checkout.",
    },
    {
      title: "What should I do if my saree is damaged on delivery?",
      content:
        "If you receive a damaged saree, please contact our support team within 24 hours with images. We will assist you with a replacement or refund.",
    },
    {
      title: "Can I change my delivery address after placing an order?",
      content:
        "Yes, you can update your delivery address before the order is shipped. Please contact our support team as soon as possible.",
    },
    {
      title: "Do you offer gift packaging?",
      content:
        "Yes, we offer premium gift packaging for special occasions. You can select this option at checkout.",
    },
    {
      title: "What happens if I miss my delivery?",
      content:
        "If you miss your delivery, our courier partner will attempt re-delivery on the next business day. You can also contact them to reschedule.",
    },
    {
      title: "Do you provide free shipping?",
      content:
        "We offer free shipping on orders above ₹5,000 within India. For international shipping, charges apply based on location.",
    },
    {
      title: "Can I return or exchange my saree after delivery?",
      content:
        "Yes, returns and exchanges are available within 7 days of delivery, provided the saree is unused and in its original packaging.",
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
      <div className="flex flex-col items-center darktxt mt-10 p-1 ">
        <p className="text-sm mb-3 font-Montserrat">Home / Shipping</p>
        <p className="text-5xl lg:text-7xl font-medium overflow-hidden p-1 font-Montserrat">
          DELIVERY
        </p>
      </div>

      {/* Second Internal Div - Image */}
      <div className="w-[95vw]  h-[28vh] lg:w-[80vw] lg:h-[63vh] flex justify-center items-center mt-4">
        <img
          src="https://t4.ftcdn.net/jpg/05/11/73/83/240_F_511738334_ece4QeAUMMN6Pf7UxUax0y24Xh2SyuFu.jpg"
          alt="Shipping"
          className="max-w-full h-full object-contain"
        />
      </div>

      {/* Third Internal Div - FAQ */}
      <div className=" w-[95vw] lg:w-[100vw] mt-[-21vmin] lg:mt-[-50vmin]">
        <Faqcomponent data={faqs} type={"not_faq"} />
      </div>
    </div>
  );
};

export default Shipping;
