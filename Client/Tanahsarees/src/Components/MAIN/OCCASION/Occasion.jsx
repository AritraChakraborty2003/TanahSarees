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
    <div className="mt-5 lg:mt-15 ">
      <p className="text-center font-Montserrat text-gray-500 font-medium text-[6.35vmin]  lg:text-[4.75vmin]">
        By Ocassions
      </p>
      <p className="text-center text-sm lg:text-md text-gray-500">
        ( Shop by ocassion )
      </p>
      <div className="mt-5 lg:mt-10">
        <CardText data={data} />
      </div>
    </div>
  );
};
export default Occasion;
