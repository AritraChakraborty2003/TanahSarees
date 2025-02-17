import CardText from "../../CARDS/CardText";

const Material = () => {
  const data = [
    {
      image: "Sarees/saree3.jpg",
      title: "ORGANZA SILK",
    },

    {
      image: "/Sarees/saree4.jpg",
      title: "TISSUE SILK",
    },
    {
      image: "/Sarees/saree5.jpg",
      title: "SOFT SILK",
    },
    {
      image: "/Sarees/saree8.jpg",
      title: "RAW MANGO",
    },
  ];
  return (
    <div className="mt-5 lg:mt-15">
      <p className="text-center font-Montserrat text-gray-500 font-medium text-[6.35vmin] lg:text-[4.75vmin]">
        Shop By Material
      </p>
      <p className="text-center text-sm lg:text-md  text-gray-500">
        ( Shop your saree by Material )
      </p>
      <div className="mt-5 lg:mt-10">
        <CardText data={data} />
      </div>
    </div>
  );
};

export default Material;
