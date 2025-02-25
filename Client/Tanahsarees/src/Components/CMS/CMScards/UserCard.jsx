/* eslint-disable react/prop-types */
const UserCard = (props) => {
  const { name, email, phone, address, image } = props.data;
  return (
    <div className=" flex  w-[70vw] bg-[#F7D9CB] rounded-2xl text-center font-Montserrat p-3">
      <div className="w-[10%] h-[10vh] bg-[#883022a7] rounded-r-2xl flex items-center justify-center ">
        <div className="w-15 h-15 overflow-hidden border-2 border-gray-500 rounded-full">
          <img className="w-full h-full object-cover" src={image} alt="" />
        </div>
      </div>
      <div className="flex w-[90%] pl-5 items-center darktext">
        <div className="w-[50%] text-start">
          <p className="">Name:&nbsp;&nbsp;{name}</p>
          <p>Email:&nbsp;&nbsp;{email}</p>
        </div>
        <div className="">
          <p>Phone:&nbsp;&nbsp;{phone}</p>
          <p>Adress:&nbsp;&nbsp;{address}</p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
