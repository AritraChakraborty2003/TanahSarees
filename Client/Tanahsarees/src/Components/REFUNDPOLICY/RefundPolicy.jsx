import { AppContext } from "../../AppContext/AppContext";
import { useContext } from "react";
const RefundPolicy = () => {
  const { change } = useContext(AppContext);
  return (
    <>
      <div
        className="w-[100vw]  flex flex-col items-center mt-5 lg:mt-0 pb-6 "
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
        <img src="refund.png" />
      </div>
    </>
  );
};

export default RefundPolicy;
