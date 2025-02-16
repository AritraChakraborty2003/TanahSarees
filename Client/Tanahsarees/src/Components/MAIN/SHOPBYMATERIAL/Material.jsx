import CardText from "../../CARDS/CardText";

const Material = () => {
  const data = [
    {
      image: "Sarees/yellow.png",
      title: "ORGANZA SILK",
    },

    {
      image: "/Sarees/saree4.jpg",
      title: "TISSUE SILK",
    },
    {
      image: "/Sarees/15.3 (1).png",
      title: "SOFT SILK",
    },
    {
      image: "/Sarees/pink.png",
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
