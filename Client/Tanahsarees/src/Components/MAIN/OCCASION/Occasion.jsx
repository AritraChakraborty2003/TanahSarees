import CardText from "../../CARDS/CardText";

const Occasion = () => {
  const data = [
    {
      image: "Sarees/yellow.png",
      title: "HALDI RASAM",
    },

    {
      image: "/Sarees/cocktail.png",
      title: "SANGEET",
    },
    {
      image: "/Sarees/pink.png",
      title: "BRIDAL LOOK",
    },
    {
      image: "/Sarees/reception.png",
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
