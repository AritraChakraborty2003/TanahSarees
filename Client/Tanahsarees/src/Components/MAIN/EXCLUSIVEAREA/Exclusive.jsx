import CardObj from "../../CARDS/CardObj";
import { useContext } from "react";
import { AppContext } from "../../../AppContext/AppContext";
const Exclusive = () => {
  const { sareeData } = useContext(AppContext);

  const dataExclusive = sareeData.filter((item) => item.discount != null);
  console.log("dataExclusive:", dataExclusive);

  const data = dataExclusive.reverse().slice(0, 4);

  return (
    <>
      <div className="light pb-5 mt-10">
        <p className="text-center mt-6 lg:mt-5 font-Montserrat darktxt font-medium text-[4.65vmin] md:text-[3.5vmin]">
          EXCLUSIVE OFFERS FOR YOU
        </p>
        <p className="text-center text-sm lg:text-md darktxt mt-1">
          ( Exclusive offers from us )
        </p>
        <div className="mt-6 md:mt-12">
          <CardObj data={data} />
        </div>
      </div>
    </>
  );
};

export default Exclusive;
