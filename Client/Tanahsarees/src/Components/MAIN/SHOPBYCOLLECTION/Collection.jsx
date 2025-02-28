import CardText from "../../CARDS/CardText";
import { useContext } from "react";
import { AppContext } from "../../../AppContext/AppContext";

const Collection = () => {
  const { sareeData } = useContext(AppContext);

  const dataExclusive = sareeData.filter((item) => item.occasion != null);
  const data = dataExclusive.slice(26, 30);
  return (
    <div className="mt-5 lg:mt-15 bg-[ #eee5da]">
      <p className="text-center font-Montserrat text-gray-500 font-medium text-[6.35vmin] lg:text-[4.75vmin]">
        Ultimate Collection
      </p>

      <p className="text-center text-sm lg:text-md  text-gray-500">
        ( Shop by collection )
      </p>
      <div className="mt-5 lg:mt-10">
        <CardText data={data} type="collection" />
      </div>
    </div>
  );
};

export default Collection;
