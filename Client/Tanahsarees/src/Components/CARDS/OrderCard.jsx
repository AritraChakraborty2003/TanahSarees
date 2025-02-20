/* eslint-disable react/prop-types */

const OrderCard = (props) => {
  const { data } = props;
  return (
    <div className=" ">
      <div className=" w-[100vw]   flex flex-col justify-center items-center ">
        {data.map((item) => (
          <div
            className="w-[93vw] lg:w-[50vw] mb-5  border-[1px] border-[#ccc9c9] flex "
            key={item.id}
          >
            <div className="w-[25%]">
              <img src={item.image} alt={item.name} />
            </div>
            <div className="w-[70%] text-xs lg:text-lg ml-3 mt-1 lg:mt-3 font-Montserrat ">
              {" "}
              <p>
                <span className="text-gray-500">Name:</span>&nbsp;{item.name}
              </p>
              <p>
                <span className="text-gray-500">Price:</span>&nbsp;₹&nbsp;
                {item.price}
              </p>
              <p>
                <span className="text-gray-500">Quantity:</span>&nbsp;
                {item.quantity}
              </p>
              <p>
                <span className="text-gray-500">Ordered-At:</span>&nbsp;
                {item.orderedAt}
              </p>
              <p>
                <span className="text-gray-500">Order-id:</span>&nbsp;
                {item.orderId}
              </p>
            </div>
            <div className="w-[35%] lg:w-[30%] flex items-end ">
              <button className="p-1.5 lg:p-2 text-xs lg:text-lg   bg-amber-600 text-white mb-5 mr-5 hover:bg-[#e18300]">
                See status
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderCard;
