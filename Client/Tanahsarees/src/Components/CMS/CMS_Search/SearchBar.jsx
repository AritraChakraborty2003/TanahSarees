/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
const SearchBar = (props) => {
  const { category } = props;

  const categoryMap = {
    order: "Order Id/Email",
    catalogue: "ProductId/ProductName",
    transaction: "transactionId/OrderId",
    user: "User",
    testimonial: "Email",
  };

  if (category == "order") {
    const { email, orderId } = props;
  } else if (category == "catalogue") {
    const { productId, productName } = props;
  } else if (category == "transaction") {
    const { transactionId, orderId } = props;
  } else if (category == "user") {
    const { email } = props;
  } else if (category == "testinomial") {
    const { email } = props;
  }
  return (
    <div className="w-[100%]  flex justify-center items-center  border-2 border-gray-300 bg-white pl-1 pr-1">
      <div className="inputHolder w-[100%] p-2 flex">
        <input
          type="text"
          placeholder={`Enter Product ${categoryMap[category]}`}
          className="inputField w-[90%]  rounded-md darktxt font-Montserrat font-medium p-2 text-sm lg:text-md placeholder:text-gray-400"
        />
        <button className="searchBtn  w-[11vmin]  lg:w-[10vmin] rounded-md text-gray-400 font-Montserrat font-medium">
          <i className="ri-search-line"></i>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
