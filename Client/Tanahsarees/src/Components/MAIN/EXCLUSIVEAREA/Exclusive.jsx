import CardObj from "../../CARDS/CardObj";

const Exclusive = () => {
  const data = [
    {
      image: "/Sarees/saree1.jpg",
      title: "This is a silk saree",
    },

    {
      image: "/Sarees/saree2.jpg",
      title: "This is a cotton saree",
    },
    {
      image: "/Sarees/saree3.jpg",
      title: "This is a linen saree",
    },

    {
      image: "/Sarees/saree4.jpg",
      title: "This is a woolen saree",
    },
  ];

  return (
    <>
      <div>
        <p className="text-center mt-6 lg:mt-15 font-Montserrat text-gray-500 font-medium text-[4.65vmin] md:text-[3.5vmin]">
          EXCLUSIVE OFFERS FOR YOU
        </p>
        <p className="text-center text-sm lg:text-md text-gray-500 mt-1">
          ( Exclusive offers from us )
        </p>
        <div className="mt-6 md:mt-12">
          <CardObj data={data} />
        </div>
      </div>
    </>
  );
};

export default Exclusive;
