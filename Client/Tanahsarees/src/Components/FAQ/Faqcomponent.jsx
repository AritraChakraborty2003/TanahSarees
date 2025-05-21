/* eslint-disable react/prop-types */
import Faq from "react-faq-component";

const Faqcomponent = (props) => {
  const data = {
    rows: [
      {
        title: "What types of silk sarees do you offer?",
        content:
          "We offer a wide range of Banarasi silk sarees, including Katan, Organza, Georgette, and Tussar silk, crafted by skilled artisans.",
      },
      {
        title: "Are the sarees handwoven or machine-made?",
        content:
          "Our sarees are traditionally handwoven by experienced weavers in Banaras, preserving the rich heritage of Indian craftsmanship.",
      },
      {
        title: "How can I check the authenticity of the silk saree?",
        content:
          "All our sarees come with a Silk Mark certification to ensure authenticity. We also provide detailed descriptions and images for transparency.",
      },
      {
        title: "Do you offer customization or personalized sarees?",
        content:
          "Yes, we provide custom saree designs, including personalized motifs and color variations. Contact our customer service for details.",
      },
      {
        title: "How do I care for my Banarasi silk saree?",
        content:
          "Dry cleaning is recommended to maintain the shine and texture. Store in a muslin cloth and avoid direct sunlight to prevent fading.",
      },
      {
        title: "Do you offer bulk orders for weddings or events?",
        content:
          "Yes, we accept bulk and wholesale orders for weddings, corporate events, and gifting. Special discounts are available for bulk purchases.",
      },
      {
        title: "What payment methods do you accept?",
        content:
          "We accept credit/debit cards, UPI, net banking, wallets, and cash on delivery (COD) for select locations.",
      },
      {
        title: "Do you provide blouse stitching services?",
        content:
          "Yes, we offer blouse stitching services based on your measurements. You can select this option while placing an order.",
      },
      {
        title: "Can I return or exchange my saree if I don’t like it?",
        content:
          "Yes, returns and exchanges are allowed within 7 days of delivery, provided the saree is unused and in its original packaging.",
      },
      {
        title: "How can I contact customer support?",
        content:
          "You can reach us via email at support@tanahsarees.com or call us at +91 XXXXX XXXXX between 10 AM - 7 PM (IST).",
      },
    ],
  };

  const styles = {
    // bgColor: 'white',
    titleTextColor: "grey",
    rowTitleColor: "#262424",
    rowContentColor: "grey",
    titleTextSize: "3.5vmin",
    titleTextAlign: "center",
    rowTitleTextSize: "18px",
    rowContentTextSize: "15px",
  };

  const stylesLarge = {
    titleTextColor: "grey",
    rowTitleColor: "#c97366",
    rowContentColor: "grey",
    titleTextSize: "3.5vmin",
    titleTextAlign: "center",
    rowTitleTextSize: "25px",
    rowContentTextSize: "24px",
  };

  const config = {
    animate: true,
    // arrowIcon: "V",
    // tabFocus: true,
  };

  const faqData = props.type === "not_faq" ? { rows: props.data } : data;
  console.log("pdata", props.data);

  return (
    <>
      <div
        className="flex justify-center flex-col items-center  p-[10vmin]"
        style={{
          marginTop: `${screen.width > 1000 ? "20%" : ""}`, // Adjust based on header height
          zIndex: 10, // Keep content below the header
        }}
      >
        {(screen.width < 2048 && (
          <>
            {!props?.type && (
              <>
                <p className="text-center font-Montserrat darktxt font-extralight  text-xs lg:text-sm">
                  Home / Frequently Asked Questions - India
                </p>
                <p className="text-center font-Montserrat darktxt font-medium text-2xl overflow-hidden lg:text-4xl mt-2 lg:mt-5 ">
                  Frequently Asked Questions
                </p>
              </>
            )}
            <div className="w-[90vw] lg:w-[65vw] 2xl:w-[55vw] mt-15  ">
              <Faq data={faqData} styles={styles} config={config} />
            </div>
          </>
        )) || (
          <>
            {!props?.type && (
              <>
                <p className="text-center font-Montserrat darktxt font-extralight  text-xl">
                  Home / Frequently Asked Questions - India
                </p>
                <p className="text-center font-Montserrat darktxt overflow-hidden  font-medium text-2xl lg:text-4xl mt-2 lg:mt-5 ">
                  Frequently Asked Questions
                </p>
              </>
            )}
            <div className="w-[90vw] lg:w-[65vw] 2xl:w-[55vw] mt-20  ">
              <Faq data={faqData} styles={stylesLarge} config={config} />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Faqcomponent;
