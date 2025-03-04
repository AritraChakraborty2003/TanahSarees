import { useSearchParams } from "react-router-dom";
const ResultPage = () => {
  const [searchParams] = useSearchParams();
  const type = searchParams.get("type") || "";
  const ref = searchParams.get("ref") || "";

  return (
    <>
      <div className="h-[100vh] w-[100vw] flex justify-center items-center">
        <p className="text-3xl text-center">
          {type === "success"
            ? "Payment Successful.Your order reference is " + ref
            : "Payment Failed. Please try again."}
        </p>
      </div>
    </>
  );
};

export default ResultPage;
