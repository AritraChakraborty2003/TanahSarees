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
      image: "Sarees/saree11.jpg",
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
    <div className="mt-10 lg:mt-15 ">
      <p className="text-center  font-Montserrat text-gray-500 font-medium text-[6vmin] lg:text-[3.5vmin]">
        SELLING FAST
      </p>
      <div className="mt-1">
        <TimerComp days={10} />
      </div>
      <div className="mt-5 lg:mt-10">
        <CardText data={data} />
      </div>
    </div>
  );
};

export default Selling;
