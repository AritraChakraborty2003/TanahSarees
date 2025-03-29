import CardText from "../../CARDS/CardText";
import { useContext } from "react";
import { AppContext } from "../../../AppContext/AppContext";

const Occasion = () => {
  const { sareeData } = useContext(AppContext);

  const dataExclusive = sareeData.filter(
    (item) => item.occasion != null || "undefined"
  );
  const data = dataExclusive.slice(0, 8);
  return (
    <div className="mt-5 bg-[#efe4da] lg:mt-15 ">
      <p className=" pt-3 bg-[#efe4da] border-b-1 mr-6 ml-6 text-center font-Montserrat darktxt  darktxt font-medium text-[4.65vmin] md:text-[3.5vmin]">
        STYLE FOR EVERY OCCASION
      </p>
      {/* <p className="pb-3 light text-center text-sm lg:text-md darktxt">
        ( Shop by ocassion )
      </p> */}
      <div className="mt-5 lg:mt-10">
        <CardText data={data} type="occasion" />
      </div>
    </div>
  );
};
export default Occasion;
