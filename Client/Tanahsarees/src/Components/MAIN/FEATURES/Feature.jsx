import FeatureCard from "./FeatureCard";

const Feature = () => {
  const data = [
    { url: "fast-delivery.png", text: "Fast Delivery" },
    { url: "quality.png", text: "Best Quality" },
    { url: "secure-payment.png", text: "Secure Payment" },
    { url: "price.png", text: "Best Price" },
    { url: "online-purchase.png", text: "100% Purchase protection" },
  ];
  return (
    <div>
      {screen.width > 1000 && (
        <>
          <FeatureCard data={data} />
        </>
      )}
    </div>
  );
};

export default Feature;
