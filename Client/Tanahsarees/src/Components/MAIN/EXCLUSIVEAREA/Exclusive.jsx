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
      <div className="mt-6">
        <CardObj data={data} />
      </div>
    </>
  );
};

export default Exclusive;
