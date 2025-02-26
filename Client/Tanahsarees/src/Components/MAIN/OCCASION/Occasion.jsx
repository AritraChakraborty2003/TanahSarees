import CardText from "../../CARDS/CardText";
import { useContext } from "react";
import { AppContext } from "../../../AppContext/AppContext";

const Occasion = () => {
  const { sareeData } = useContext(AppContext);

  const dataExclusive = sareeData.filter(
    (item) => item.occasion != null || "undefined"
  );
  const data = dataExclusive.slice(0, 4);
  return (
    <div className="mt-5 lg:mt-15 ">
      <p className="text-center font-Montserrat text-gray-500 font-medium text-[6.35vmin]  lg:text-[4.75vmin]">
        By Ocassions
      </p>
      <p className="text-center text-sm lg:text-md text-gray-500">
        ( Shop by ocassion )
      </p>
      <div className="mt-5 lg:mt-10">
        <CardText data={data} type="occasion" />
      </div>
    </div>
  );
};
export default Occasion;
