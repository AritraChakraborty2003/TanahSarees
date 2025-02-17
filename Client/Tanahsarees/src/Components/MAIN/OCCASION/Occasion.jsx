import CardText from "../../CARDS/CardText";

const Occasion = () => {
  const data = [
    {
      image: "Sarees/saree7.jpg",
      title: "HALDI RASAM",
    },

    {
      image: "/Sarees/saree8.jpg",
      title: "SANGEET",
    },
    {
      image: "/Sarees/saree9.jpg",
      title: "BRIDAL LOOK",
    },
    {
      image: "/Sarees/saree10.jpg",
      title: "SHAHI RECEPTION",
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
export default Occasion;
