import { useContext } from "react";
import { AppContext } from "../../../AppContext/AppContext";

const CmsReciept = () => {
  // Demo receipt data (Replace this with API data when fetching)
  const receipts = [{ id: "RCP123" }, { id: "RCP456" }, { id: "RCP789" }];
  const { change } = useContext(AppContext);

  return (
    <div
      className="flex flex-wrap gap-x-5 gap-y-6 pt-6 pb-6  justify-center ml-5 mr-5 lg:ml-20 lg:mr-20 items-center   bg-gray-50"
      style={{
        marginTop: `${
          !change
            ? screen.width > 1000
              ? "20%"
              : ""
            : screen.width > 1000
            ? "1.5%"
            : ""
        }`, // Adjust based on header height
        zIndex: 10, // Keep content below the header
      }}
    >
      <h2 className="text-2xl font-bold mb-4 text-center">Receipts</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2 text-left">
              Receipt ID
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {receipts.map((receipt) => (
            <tr key={receipt.id} className="hover:bg-gray-100">
              <td className="border border-gray-300 px-4 py-2">{receipt.id}</td>
              <td className="border border-gray-300 px-4 py-2">
                <a
                  href={`/cms-receipt/${receipt.id}`} // Calls the same page with the receipt ID
                  className="text-blue-500 hover:underline"
                >
                  View Receipt
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CmsReciept;
