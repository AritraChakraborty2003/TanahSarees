import CardText from "../../CARDS/CardText";

const Selling = () => {
  const data = [
    {
      image: "Sarees/Black.png",
      title: "Black Silk",
      maintitle: "Top Trending",
    },
    {
      image: "Sarees/10.4  (3).png",
      title: "Grey saree",
      maintitle: "Top Sellings",
    },
    {
      image: "Sarees/10.5  (3).png",
      title: "Cozy Blue",
      maintitle: "No Wrinkles",
    },
    {
      image: "Sarees/15.3 (1).png",
      title: "Red Silk ",
      maintitle: "Most Ordered",
    },
  ];
  return (
    <div className="mb-[20vh]">
      <p className="text-center mt-15 font-Montserrat text-gray-500 font-medium text-[3.5vmin]">
        SELLING FAST
      </p>
      <div className="mt-12">
        <CardText data={data} />
      </div>
    </div>
  );
};

export default Selling;
