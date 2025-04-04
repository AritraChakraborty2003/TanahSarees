// import { AppContext } from "../../AppContext/AppContext";
// import { useContext } from "react";
const RefundPolicy = () => {
  // const { change } = useContext(AppContext);
  return (
    <>
      <div
        className="w-[100vw] mt-20  flex flex-col items-center mt-5 lg:mt-0 pb-6 "
        // style={{
        //   marginTop: `${
        //     !change
        //       ? screen.width > 1000
        //         ? "20%"
        //         : ""
        //       : screen.width > 1000
        //       ? "12%"
        //       : ""
        //   }`, // Adjust based on header height
        //   zIndex: 10, // Keep content below the header
        // }}
      >
        <span className="text-4xl font-bold h-[11vmin] lg:h-[10vmin] mt-[3vmin]">
          Refund Policy
        </span>{" "}
        {/* <div>Refund Policy</div> */}
        Returns will be accepted within 4 days If refund approved money will be
        credited to your account within 10 days
        <br />
        <br />
        {/* <img src="refund.png" /> */}
      </div>
    </>
  );
};

export default RefundPolicy;
