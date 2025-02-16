import CardText from "../../CARDS/CardText";

const Collection = () => {
  const data = [
    {
      image: "Sarees/Black.png",
      title: "PARTY BASH",
    },

    {
      image: "/Sarees/saree2.jpg",
      title: "FUNCTION SPECIAL",
    },
    {
      image: "/Sarees/10.4  (3).png",
      title: "BANARASI BEAUTY",
    },
    {
      image: "/Sarees/saree6.jpg",
      title: "PERFECT PASTEL",
    },
  ];
  return (
    <div className="mb-[10vh]">
      <p className="text-center mt-15 font-Montserrat text-gray-500 font-medium text-[3.5vmin]">
        ULTIMATE COLLECTION
      </p>
      <div className="mt-12">
        <CardText data={data} />
      </div>
    </div>
  );
};

export default Collection;
