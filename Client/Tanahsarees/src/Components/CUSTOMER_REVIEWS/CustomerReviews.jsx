import CardText from "../CARDS/CardText";
import { useContext } from "react";
import { AppContext } from "../../AppContext/AppContext";
const CustomerReviews = () => {
  const { change } = useContext(AppContext);
  const data = [];
  const data1 = [
    {
      image: "/Sarees/saree1.jpg",
      name: "Ananya Mehta ⭐⭐⭐⭐⭐",
      review:
        "Absolutely loved the silk saree I purchased from TanahSarees! The fabric is so soft, and the intricate zari work is stunning. Perfect for festive occasions. Highly recommend!",
    },
    {
      image: "/Sarees/saree2.jpg",
      name: "Priya Sharma ⭐⭐⭐⭐",
      review:
        "I am thrilled to say that I have received a beautiful silk saree from TanahSarees. The fabric is soft and the design is intricate. Highly recommend this brand!",
    },
    {
      image: "/Sarees/saree3.jpg",
      name: "Radhika Iyer ⭐⭐⭐⭐",
      review:
        "The fabric is soft, and the design is intricate. I would highly recommend this brand to anyone looking for a beautiful silk saree.",
    },
    {
      image: "/Sarees/saree4.jpg",
      name: "Neha Kapoor ⭐⭐⭐⭐⭐",
      review:
        "Fast delivery and premium quality! The silk saree feels luxurious, and the embroidery is exquisite. Worth every penny.",
    },
    {
      image: "/Sarees/saree5.jpg",
      name: "Meera Nair ⭐⭐⭐⭐⭐",
      review:
        "One of the best silk sarees I have ever owned! The detailing is just amazing.",
    },
    {
      image: "/Sarees/saree10.jpg",
      name: "Reema Kapoor ⭐⭐⭐",
      review:
        "Fast delivery and premium quality! The silk saree feels luxurious, and the embroidery is exquisite. Worth every penny.",
    },
  ];
  return (
    <>
      <div
        className={`${data.length > 0 ? "h-[100vh]" : ""} w-[100vw]`}
        style={{
          paddingTop: `${
            !change
              ? document.getElementById("mainHeader")?.offsetHeight || "350px"
              : "150px"
          }`,

          zIndex: 900,
        }}
      >
        {data1.length > 0 ? (
          <CardText data={data1} />
        ) : (
          <p className="text-gray-500 text-lg text-center">Loading... </p>
        )}
      </div>
    </>
  );
};

export default CustomerReviews;
