const Productdisplay = () => {
  return (
    <>
      <div className="mainDiv w-[100vw] flex">
        <div className="leftImageHolder w-[50vw] border-1">
          <div className="imageHolder w-[90%] h-[70vmin] border-[#d5d5d5] border-[1px]">
            <img
              src="Sarees/saree7.jpg"
              alt="Product Image"
              className="max-w-full max-h-full object-contain"
            />
          </div>
        </div>
        <div className="rightTextHolder w-[50vw] border-1"></div>
      </div>
    </>
  );
};

export default Productdisplay;
