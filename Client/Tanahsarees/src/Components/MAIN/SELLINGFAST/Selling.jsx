import CardText from "../../CARDS/CardText";
import TimerComp from "./SALE_TIMER/TimerComp";

const Selling = () => {
  const data = [
    {
      image: "Sarees/saree5.jpg",
      title: "Black Silk",
      maintitle: "Top Trending",
    },
    {
      image: "Sarees/saree1.jpg",
      title: "Grey saree",
      maintitle: "Top Sellings",
    },
    {
      image: "Sarees/saree6.jpg",
      title: "Cozy Blue",
      maintitle: "No Wrinkles",
    },
    {
      image: "Sarees/saree9.jpg",
      title: "Red Silk ",
      maintitle: "Most Ordered",
    },
  ];
  return (
    <div className="mt-[5vmin]">
      <p className="text-center mt-15 font-Montserrat text-gray-500 font-medium text-[3.5vmin]">
        SELLING FAST
      </p>
      <div className="mt-5">
        <TimerComp days={10} />
      </div>
      <div className="mt-12">
        <CardText data={data} />
      </div>
    </div>
  );
};

export default Selling;
