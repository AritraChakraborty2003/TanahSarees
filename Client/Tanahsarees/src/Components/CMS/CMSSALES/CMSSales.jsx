import { useContext } from "react";
import { AppContext } from "../../../AppContext/AppContext";
const CMSSales = () => {
  const { change } = useContext(AppContext);
  return (
    <>
      <div
        style={{
          marginTop: `${
            !change
              ? screen.width > 1000
                ? "20%"
                : ""
              : screen.width > 1000
              ? "12%"
              : ""
          }`, // Adjust based on header height
          zIndex: 10, // Keep content below the header
        }}
      >
        <p>CMS Order</p>
      </div>
    </>
  );
};

export default CMSSales;
