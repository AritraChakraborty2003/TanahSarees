import { AppContext } from "../../AppContext/AppContext";
import { useContext } from "react";
const ReturnPolicy = () => {
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
        <div className="w-[85vw]">
          <p className="text-sm mt-8">
            <span className="text-4xl font-bold">Return Policy</span>
            <br></br>
            <br></br> We offer refund / exchange within first 7 days from the
            date of your purchase. If 7 days have passed since your purchase,
            you will not be offered a return, exchange or refund of any kind. In
            order to become eligible for a return or an exchange, (i) the
            purchased item should be unused and in the same condition as you
            received it, (ii) the item must have original packaging, (iii) if
            the item that you purchased on a sale, then the item may not be
            eligible for a return / exchange. Further, only such items are
            replaced by us (based on an exchange request), if such items are
            found defective or damaged. You agree that there may be a certain
            category of products / items that are exempted from returns or
            refunds. Such categories of the products would be identified to you
            at the item of purchase. For exchange / return accepted request(s)
            (as applicable), once your returned product / item is received and
            inspected by us, we will send you an email to notify you about
            receipt of the returned / exchanged product. Further.If the same has
            been approved after the quality check at our end, your request (i.e.
            return / exchange) will be processed in accordance with our
            policies.
          </p>
        </div>
      </div>
    </>
  );
};

export default ReturnPolicy;
