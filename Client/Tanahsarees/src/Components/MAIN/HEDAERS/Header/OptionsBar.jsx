import Search from "./Search";

const OptionsBar = () => {
  return (
    <div>
      {(screen.width > 1000 && (
        <div className="border-[#d5d5d5]  border-b-[0.15px] flex justify-center items-center w-[100vw] pl-15 gap-4 flex-wrap p-4 mt-7 darktext font-lato">
          {[
            "SALE",
            "SAREES",
            "DRESS MATERIALS",
            "SALWAR SUITS",
            "LEHENGAS",
            "OTHERS",
            "NEW ARRIVALS",
            "OCCASIONS",
          ].map((category, index) => (
            <span
              key={index}
              className="px-4 py-2 text-md font-medium  font-poppins lg:text-[2.15vmin]"
            >
              {category}
            </span>
          ))}
        </div>
      )) || (
        <>
          <div className="border-[#d5d5d5]  border-b-[0.15px] flex justify-center items-center w-[100vw]   flex-wrap pb-4  darktext font-lato">
            <Search className="mt-[-1vmin]" />
          </div>
        </>
      )}
    </div>
  );
};

export default OptionsBar;
