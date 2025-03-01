import CardText from "../../CARDS/CardText";
import TimerComp from "./SALE_TIMER/TimerComp";
import { useContext } from "react";
import { AppContext } from "../../../AppContext/AppContext";

const Selling = () => {
  const { sareeData } = useContext(AppContext);
  const data = sareeData.slice(17, 21);

  return (
    <div className="mt-10 lg:mt-15 lg:pt-15 pt-7 pb-8 lg:pb-5 light">
      <p className="text-center  font-Montserrat darktxt font-medium text-[6vmin] lg:text-[3.5vmin]">
        SELLING FAST
      </p>
      <div className="mt-1">
        <TimerComp days={10} />
      </div>
      <div className="mt-5 lg:mt-10">
        <CardText data={data} type="selling" />
      </div>
    </div>
  );
};

export default Selling;
