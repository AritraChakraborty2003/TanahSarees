import CardText from "../../CARDS/CardText";
import { useContext } from "react";
import { AppContext } from "../../../AppContext/AppContext";

const Material = () => {
  const { sareeData } = useContext(AppContext);
  const dataExclusive = sareeData.filter((item) => item.discount != null);
  const data = dataExclusive.slice(0, 4);
  return (
    <div className="mt-10 bg-[#efe4da]  lg:mt-20 light pt-8 lg:pt-10 lg:pb-10">
      <p className="text-center font-Montserrat darktxt font-medium text-[6.35vmin] lg:text-[4.75vmin]">
        Shop By Material
      </p>
      <p className="text-center text-sm lg:text-md  darktxt">
        ( Shop your saree by Material )
      </p>
      <div className="mt-5 lg:mt-10">
        <CardText data={data} type="material" />
      </div>
    </div>
  );
};

export default Material;
