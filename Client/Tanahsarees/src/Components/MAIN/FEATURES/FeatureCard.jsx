/* eslint-disable react/prop-types */
const FeatureCard = (props) => {
  const { data } = props;
  return (
    <>
      <div className=" w-[100vw] flex gap-x-6 p-8 mt-7 justify-center">
        {data.map((item) => (
          <>
            <div className="w-[20vw] flex flex-col justify-center items-center">
              <div
                className="w-[15vw] h-[15vh]  flex justify-center items-center  rounded-md overflow-hidden transition-all duration-300 ease-in-out transform hover:scale-110"
                key={item.id}
              >
                <img
                  src={item.url}
                  alt={item.text}
                  className="max-w-full max-h-full object-contain flex justify-center items-center"
                />
              </div>
              <div className=" mt-5 text-md font-normal font-Montserrat darktext">
                {item.text}
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default FeatureCard;
