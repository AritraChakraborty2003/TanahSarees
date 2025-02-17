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
    <div className="mt-5 lg:mt-15">
      <p className="text-center font-Montserrat text-gray-500 font-medium text-[6.35vmin] lg:text-[4.75vmin]">
        Ultimate Collection
      </p>

      <p className="text-center text-sm lg:text-md  text-gray-500">
        ( Shop by collection )
      </p>
      <div className="mt-5 lg:mt-10">
        <CardText data={data} />
      </div>
    </div>
  );
};

export default Collection;
