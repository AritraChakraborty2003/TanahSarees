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
    <div className="mt-5 bg-[#efe4da] lg:mt-15 ">
      <p className=" pt-3 bg-[#efe4da] text-center font-Montserrat darktxt font-medium text-[6.35vmin]  lg:text-[4.75vmin]">
        By Ocassions
      </p>
      <p className="pb-3 light text-center text-sm lg:text-md darktxt">
        ( Shop by ocassion )
      </p>
      <div className="mt-5 lg:mt-10">
        <CardText data={data} type="occasion" />
      </div>
    </div>
  );
};
export default Occasion;
