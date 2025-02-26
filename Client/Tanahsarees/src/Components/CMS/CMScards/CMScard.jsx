/* eslint-disable react/prop-types */
const CMScard = (props) => {
  const { title, icon, onClick } = props;
  return (
    <div
      className="bg-[#F7D9CB] shadow-md rounded-lg p-2 w-[40vw]  lg:w-[15vw]  flex flex-weap flex-col items-center space-x-4 cursor-pointer hover:shadow-[#a52a2a9c] hover:shadow-lg transition"
      onClick={onClick}
    >
      <div className="text-sm lg:text-3xl lg:p-10 h-[15vmin] w-[15vmin] lg:h-[20vmin] lg:w-[20vmin]">
        <img
          src={icon}
          alt=""
          className="max-w-full max-h-full object-contain"
        />
      </div>
      <div className="text-sm lg:text-lg lg:font-semibold mb-0">
        {screen.width < 1000
          ? title.slice(0, 16) + "..."
          : title.slice(0, 15) + "..."}
      </div>
    </div>
  );
};

export default CMScard;
