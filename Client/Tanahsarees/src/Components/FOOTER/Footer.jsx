const Footer = () => {
  return (
    <div className="relative">
      <div className="absolute inset-x-[-100px] top-0 h-1/1 bg-gradient-to-b from-black/100 via-transparent"></div>
      <div
        className={`${
          screen.width <= 375 ? "h-[100vh]" : "h-[77vh]"
        } lg:h-[110vh] w-[100vw] 2xl:h-[80vh]`}
        style={{
          backgroundImage: `url(shivam-baraik-HvZEpNO1Mp0-unsplash.jpg)`,

          backgroundSize: "cover", // Ensures image fills the div
          backgroundPosition: "center", // Centers the image
          backgroundRepeat: "no-repeat", // Prevents tiling
        }}
      >
        <div className=" bottom-0 w-[100vw] absolute lg:justify-center z-5  flex flex-col  font-Poppins text-white">
          {(screen.width > 1000 && (
            <>
              <div className="flex w-full p-[1vmin] gap-x-3 lighttxt font-Poppins">
                <div className="w-[50vw] p-[6vmin] flex  gap-x-3">
                  <div className="w-[24vw] flex flex-col space-y-[1.45vmin]  font-Poppins mt-4           lighttxt font-extralight">
                    <p className="text-[2vmin] font-normal font-Poppins text-white">
                      CUSTOMER SERVICE
                    </p>
                    <p className="text-xs  text-white mt-4">DOWNLOAD THE APP</p>
                    <p className="text-xs font-Poppins text-white">
                      SIZE CHART
                    </p>
                    <p className="text-xs font-Poppins text-white">
                      SHIPPING & DELIVERY
                    </p>
                    <p className="text-xs font-Poppins text-white">
                      TRACK YOUR ORDER
                    </p>
                    <p className="text-xs font-Poppins text-white">
                      CUSTOMER REVIEWS
                    </p>
                    <p className="text-xs font-Poppins text-white">RETURNS</p>
                    <p className="text-xs font-Poppins text-white">
                      CONTACT US
                    </p>
                    <p className="text-xs font-Poppins text-white">
                      FAQ&lsquo;s
                    </p>
                  </div>

                  <div className="w-[24vw] flex flex-col space-y-[1.35vmin] text-black font-Poppins mt-4 lighttxt font-extralight ml-10">
                    <p className="text-[2vmin] font-normal font-Poppins text-white">
                      ABOUT TANAH SAREES
                    </p>
                    <p className="text-xs font-Poppins text-white mt-3">
                      ABOUT US
                    </p>
                    <p className="text-xs font-Poppins text-white">
                      OUR STORES
                    </p>
                    <p className="text-xs font-Poppins text-white">
                      CONTACT US
                    </p>
                    <p className="text-xs font-Poppins text-white">
                      OWN A TANAH FRANCHISE
                    </p>
                    <p className="text-xs font-Poppins text-white">BLOG</p>
                    <p className="text-xs font-Poppins text-white">
                      RETURNS POLICY
                    </p>
                    <p className="text-xs font-Poppins text-white">
                      PRIVACY POLICY
                    </p>
                    <p className="text-xs font-Poppins text-white">
                      TERMS & CONDITIONS
                    </p>
                  </div>
                </div>
                <div className="w-[50vw] flex flex-col gap-y-5 mt-3 p-3 pl-6 justify-end 2xl:ml-[24vmin]">
                  <div className="1 ml-4">
                    <p className="font-extralight text-sm">Sign up and save</p>
                  </div>
                  <div className="font-extralight font-Montserrat text-xs ml-4">
                    Subscribe to get special offers, free giveaways, and
                    once-in-a-lifetime deals.
                  </div>
                  <div className="w-[60%] border-[#fff] border-b-[1px] mt-3 ml-4">
                    <input
                      placeholder="Enter your email"
                      className="p-1 text-sm w-[90%]"
                    ></input>
                    <a href="" className="text-2xl">
                      <i className="ri-mail-line"></i>
                    </a>
                  </div>
                  <div className="4 ml-4">
                    {" "}
                    <div className="w-[35%] pt-[1.5px] mt-3 flex justify-end   gap-x-5 2xl:gap-x-7 pr-3">
                      <a className="mt-[-0.65vmin] ">
                        <i className="ri-instagram-line lighttxt text-[3.75vmin]"></i>
                      </a>
                      <a className="mt-[-0.65vmin] lighttxt text-[3.75vmin]">
                        <i className="ri-facebook-circle-fill"></i>
                      </a>

                      <a className="mt-[-0.65vmin]  lighttxt text-[3.75vmin]">
                        <i className="ri-youtube-fill"></i>
                      </a>

                      <a className="mt-[-0.65vmin]  lighttxt text-[3.75vmin]">
                        <i className="ri-pinterest-fill"></i>
                      </a>
                    </div>
                  </div>
                  <div className="font-semibold text-xs ml-4">
                    Tanhasaree is now at your fingertips. Download the
                    Tanhasaree app
                  </div>
                  <div className="iconsHolder flex  items-center gap-x-6 ml-4">
                    <img src="https://cdn.shopify.com/s/files/1/0049/3649/9315/files/g.p_1-01_150x.png?v=1671168364" />
                    <img src="https://cdn.shopify.com/s/files/1/0049/3649/9315/files/a.s_1-01-01_150x.png?v=1671168364" />
                  </div>
                </div>
              </div>
              <div className="w-[100vw] flex gap-x-4  p-4 pl-1 mt-5 ml-4">
                <div className="w-full  ">
                  <p className="text-sm font-Montserrat text-white font-medium mb-3">
                    Popular Searches:
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {[
                      "Bridal Gowns",
                      "Ethnic Gowns ",
                      "Soft Silk Sarees  ",
                      "South Silk Sarees  ",
                      "Mirror Work Lehenga Choli  ",
                      "Sangeet Lehengas  ",
                      "Tissue Sarees  ",
                      "Brocade Sarees  ",
                      "Crop Top Lehengas  ",
                    ].map((item, index) => (
                      <p
                        key={index}
                        className="text-xs font-Montserrat lighttxt px-3 py-1 rounded-md underline underline-offset-3"
                      >
                        {item}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
              <div className="w-[100vw] flex gap-x-4  p-4  pl-3 mt-5 ">
                <div className="w-full ">
                  <p className="text-sm  font-Montserrat text-white font-medium mb-3 ">
                    Explore Trending Articles:
                  </p>
                  <div className="flex flex-wrap gap-x-7 pl-3">
                    {[
                      "How To Drape A Saree?",
                      "Blouse Designs",
                      "Fashion Tips",
                      "Types Of Sarees",
                      "New Trend Sarees",
                      "Saree with Jacket",
                      "Types of Lehenga",
                    ].map((item, index) => (
                      <p
                        key={index}
                        className="lighttxt mt-3 text-xs font-Montserrat text-black underline underline-offset-3 cursor-pointer hover:text-white transition"
                      >
                        {item}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
              <div className="w-[100vw] flex flex-col justify-center items-center gap-x-4  p-4 pl-3 mt-5 ml-4 lighttxt">
                <p className="text-xs">
                  © Tanah Sarees 2024. All Rights Reserved.
                </p>
                <p className="text-xs mt-4">Powered By Codemap.</p>
              </div>
            </>
          )) || (
            <>
              <div
                className="w-[100vw] p-5 flex flex-col gap-y-3  items-center"
                style={{ marginBottom: "0vmin" }}
              >
                <div className="1 ml-4">
                  <p className="font-extralight text-sm font-Montserrat">
                    Sign up and save
                  </p>
                </div>
                <div className="font-extralight text-xs ml-4 font-Montserrat">
                  Subscribe to get special offers, free giveaways, and
                  once-in-a-lifetime deals.
                </div>
                <div className="w-[90%] flex border-[#fff] border-b-[1px] mt-3 ml-3">
                  <input
                    placeholder="Enter your email"
                    className="p-1 text-sm w-[90%] focus:outline-none"
                  ></input>
                  <a href="" className="text-2xl">
                    <i className="ri-mail-line"></i>
                  </a>
                </div>
                <div className="4 ml-4">
                  {" "}
                  <div className="w-[96%] pt-[1.5px] flex gap-x-6">
                    <a className="">
                      <i className="ri-instagram-line lighttxt text-[7vmin]"></i>
                    </a>
                    <a className=" lighttxt text-[7vmin]">
                      <i className="ri-facebook-circle-fill"></i>
                    </a>

                    <a className="  lighttxt text-[7vmin]">
                      <i className="ri-youtube-fill"></i>
                    </a>

                    <a className="  lighttxt text-[7vmin]">
                      <i className="ri-pinterest-fill"></i>
                    </a>
                  </div>
                </div>

                <div className="font-medium text-[2.5vmin] ml-1 lighttxt">
                  Tanhasaree is now at your fingertips. Download the Tanhasaree
                  app
                </div>
                <div className="iconsHolder flex  items-center gap-x-6 ml-4">
                  <img src="https://cdn.shopify.com/s/files/1/0049/3649/9315/files/g.p_1-01_150x.png?v=1671168364" />
                  <img src="https://cdn.shopify.com/s/files/1/0049/3649/9315/files/a.s_1-01-01_150x.png?v=1671168364" />
                </div>

                <div className="FAQHolder"></div>

                <div className="w-[100vw] flex gap-x-3  p-1 pl-1 mt-5 ml-2">
                  <div className="w-full  ">
                    <p className="text-sm font-Montserrat text-white font-medium mb-3">
                      Popular Searches:
                    </p>
                    <div className="flex flex-wrap gap-x-3 gap-y-1 justify-center items-center p-1 ">
                      {[
                        "Bridal Gowns",
                        "Ethnic Gowns ",
                        "Soft Silk Sarees  ",
                        "South Silk Sarees  ",
                        "Mirror Work",
                        "Lehenga Choli  ",
                        "Sangeet Lehengas  ",
                        "Tissue Sarees  ",
                        "Brocade Sarees  ",
                        "Crop Top Lehengas  ",
                      ].map((item, index) => (
                        <p
                          key={index}
                          className="text-xs font-Montserrat text-white gap-x-5  rounded-md underline underline-offset-3"
                        >
                          {item}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="w-[100vw] flex gap-x-4  p-4  pl-3 mt-1 ">
                  <div className="w-full ">
                    <p className="text-sm  font-Montserrat text-white font-medium mb-3 ">
                      Explore Trending Articles:
                    </p>
                    <div className="flex flex-wrap gap-x-3 gap-y-1 justify-center items-center p-1">
                      {[
                        "How To Drape A Saree?",
                        "Blouse Designs",
                        "Fashion Tips",
                        "Types Of Sarees",
                        "New Trend Sarees",
                        "Saree with Jacket",
                        "Types of Lehenga",
                      ].map((item, index) => (
                        <p
                          key={index}
                          className="text-xs font-Montserrat lighttxt gap-x-5  rounded-md underline underline-offset-3"
                        >
                          {item}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[100vw] flex flex-col font-light justify-center items-center pb-6">
                <p className="text-xs overflow-hidden">
                  © Tanah Sarees 2024. All Rights Reserved.
                </p>
                <p className="text-xs mt-1 overflow-hidden">
                  Powered By Codemap.
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Footer;
