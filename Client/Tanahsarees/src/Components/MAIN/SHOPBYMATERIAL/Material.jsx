import CardText from "../../CARDS/CardText";
import { useContext } from "react";
import { AppContext } from "../../../AppContext/AppContext";

const Material = () => {
  const { sareeData } = useContext(AppContext);
  const dataExclusive = sareeData.filter((item) => item.discount != null);
  const data = dataExclusive.slice(11, 15);
  return (
    <div className="mt-5 lg:mt-15">
      <p className="text-center font-Montserrat text-gray-500 font-medium text-[6.35vmin] lg:text-[4.75vmin]">
        Shop By Material
      </p>
      <p className="text-center text-sm lg:text-md  text-gray-500">
        ( Shop your saree by Material )
      </p>
      <div className="mt-5 lg:mt-10">
        <CardText data={data} type="material" />
      </div>
    </div>
  );
};

export default Material;
