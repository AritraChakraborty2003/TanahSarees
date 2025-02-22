/* eslint-disable react/prop-types */
const CMScard = (props) => {
  const { title, icon, onClick } = props;
  return (
    <div
      className="bg-[#F7D9CB] shadow-md rounded-lg  w-[15vw] h-[38vh] flex flex-col items-center space-x-4 cursor-pointer hover:shadow-[#a52a2a9c] hover:shadow-lg transition"
      onClick={onClick}
    >
      <div className="text-3xl p-10 ">
        <img src={icon} alt="" />
      </div>
      <div className="text-lg font-semibold mb-0">{title}</div>
    </div>
  );
};

export default CMScard;
