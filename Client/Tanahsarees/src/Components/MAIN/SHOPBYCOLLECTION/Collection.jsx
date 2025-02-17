import CardText from "../../CARDS/CardText";

const Collection = () => {
  const data = [
    {
      image: "Sarees/saree1.jpg",
      title: "PARTY BASH",
    },

    {
      image: "/Sarees/saree2.jpg",
      title: "FUNCTION SPECIAL",
    },
    {
      image: "/Sarees/saree3.jpg",
      title: "BANARASI BEAUTY",
    },
    {
      image: "/Sarees/saree4.jpg",
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
