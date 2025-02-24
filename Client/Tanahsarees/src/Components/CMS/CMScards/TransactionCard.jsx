/* eslint-disable react/prop-types */

const TransactionCard = (props) => {
  const { id, amount, currency, status, method, email, contact } = props.data;

  return (
    <div className="w-[90vw]">
      <div className="flex items-center p-5 border-b-[1px] border-gray-200">
        <div className="w-[20%] text-left">{id}</div>
        <div className="w-[10%] text-right">
          {amount} {currency}
        </div>
        <div className="w-[20%] mr-20 text-right">{status}</div>
        <div className="w-[20%] ml-20 text-left">{method}</div>
        <div className="w-[15%] text-left">{email}</div>
        <div className="w-[15%] text-right">{contact}</div>
      </div>
    </div>
  );
};

export default TransactionCard;
