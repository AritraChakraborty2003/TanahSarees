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
    <div className="mb-[20vh]">
      <p className="text-center mt-15 font-Montserrat text-gray-500 font-medium text-[3.5vmin]">
        SHOP BY MATERIAL
      </p>
      <div className="mt-12">
        <CardText data={data} />
      </div>
    </div>
  );
};

export default Material;
