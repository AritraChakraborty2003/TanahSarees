// import { AppContext } from "../../AppContext/AppContext";
// import { useContext } from "react";
const ReturnPolicy = () => {
  // const { change } = useContext(AppContext);
  return (
    <>
      {/* <div
        className="w-[100vw]  flex flex-col items-center mt-5 lg:mt-0 pb-6 "
        style={{
          marginTop: `${
            !change
              ? screen.width > 1000
                ? "10%"
                : ""
              : screen.width > 1000
              ? "12%"
              : ""
          }`, // Adjust based on header height
          zIndex: 10, // Keep content below the header
        }} */}
      {/* > */}
      <div
        className=" Returns will be accepted within 4 days If refund approved
          money will be credited to your account within 10 daysw-[95vw] pl-8 pr-4 pb-8"
      >
        <p className="text-sm mt-8">
          <span className="text-4xl font-bold">Return Policy</span>
          <br></br>
          <div className="mt-3">
            Returns will be accepted within 4 days If refund approved money will
            be credited to your account within 10 days
            <br></br>
          </div>
        </p>
      </div>
      {/* </div> */}
    </>
  );
};

export default ReturnPolicy;
