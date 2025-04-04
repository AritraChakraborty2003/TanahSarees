/* eslint-disable react/jsx-key */
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="relative">
      <div className="absolute bg-[#EDE5DA] inset-x-[-100px]  top-0 h-1/1 "></div>
      <div
        className={`${
          screen.width <= 375 ? "h-[100vh]" : "h-[77vh]"
        } lg:h-[90vh]  w-[100vw] 2xl:h-[80vh] dark b `}
        // style={{
        //   backgroundImage: `url('pngwing.com.jpeg')`, // url('pngwing.com.png')
        //   backgroundSize: "cover", // First image full width, second covers the div
        //   backgroundPosition: "bottom", // First image on top, second on bottom
        //   backgroundRepeat: "no-repeat", // No tiling for both images
        // }}
      >
        <div className=" bottom-0 w-[100vw] absolute lg:pl-20 lg:justify-center z-5  flex flex-col  font-Poppins text-black">
          {(screen.width > 1000 && (
            <>
              <div className="flex w-full p-[1vmin] gap-x-3 text-black font-Poppins">
                <div className="w-[50vw] p-[6vmin] flex  gap-x-3">
                  <div className="w-[24vw] flex flex-col space-y-[1.45vmin]  font-Poppins mt-4           text-black font-extralight">
                    <p className="text-[2vmin] font-normal font-Poppins text-black">
                      CUSTOMER SERVICE
                    </p>

                    <Link to="/sizechart">
                      <p className="text-xs font-Poppins text-black cursor-pointer">
                        SIZE CHART
                      </p>
                    </Link>
                    <Link to="/shipping">
                      <p className="text-xs font-Poppins text-black cursor-pointer">
                        SHIPPING & DELIVERY
                      </p>
                    </Link>
                    <Link to="/trackorder">
                      <p className="text-xs font-Poppins text-black cursor-pointer">
                        TRACK YOUR ORDER
                      </p>
                    </Link>
                    <Link to="/reviews">
                      <p className="text-xs font-Poppins text-black">
                        CUSTOMER REVIEWS
                      </p>
                    </Link>
                    <Link to="/return">
                      <p className="text-xs font-Poppins text-black">RETURNS</p>
                    </Link>
                    <Link to="/contactus">
                      <p className="text-xs font-Poppins text-black">
                        CONTACT US
                      </p>
                    </Link>
                    <Link to="/faq">
                      <p className="text-xs font-Poppins text-black">
                        FAQ&lsquo;s
                      </p>
                    </Link>
                  </div>

                  {/* <div className="w-[24vw] flex flex-col space-y-[1.35vmin] text-black font-Poppins mt-4  font-extralight ml-10">
                    <p className="text-[2vmin] font-normal font-Poppins text-black">
                      ABOUT TANAH SAREES
                    </p>
                    <p className="text-xs font-Poppins text-black mt-3">
                      ABOUT US
                    </p>
                    <p className="text-xs font-Poppins text-black">
                      OUR STORES
                    </p>
                    <Link to={"/contactus"}>
                      <p className="text-xs font-Poppins text-black">
                        CONTACT US
                      </p>
                    </Link>

                    <p className="text-xs font-Poppins text-black">
                      OWN A TANAH FRANCHISE
                    </p>
                    <p className="text-xs font-Poppins text-black">BLOG</p>
                    <p className="text-xs font-Poppins text-black">
                      RETURNS POLICY
                    </p>
                    <p className="text-xs font-Poppins text-black">
                      PRIVACY POLICY
                    </p>
                    <p className="text-xs font-Poppins text-black">
                      TERMS & CONDITIONS
                    </p>
                  </div> */}
                </div>
                <div className="w-[50vw] flex flex-col gap-y-5 mt-3 p-3 pl-6 justify-end 2xl:ml-[24vmin]">
                  <div className="1 ml-4">
                    <p className="font-extralight text-sm">Sign up and save</p>
                  </div>
                  <div className="font-extralight font-Montserrat text-xs ml-4">
                    Subscribe to get special offers, free giveaways, and
                    once-in-a-lifetime deals.
                  </div>
                  <div className="w-[60%] border-black border-b-[1px] mt-3 ml-4">
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
                      <a
                        className="mt-[-0.65vmin] "
                        href=" https://www.instagram.com/tanahsarees?igsh=bGRmOW4wamVobXpo&utm_source=qr"
                      >
                        <i className="ri-instagram-line text-black text-[3.75vmin]"></i>
                      </a>
                      <a
                        className="mt-[-0.65vmin] text-black text-[3.75vmin]"
                        href="https://www.facebook.com/share/1EELi25ZRw/"
                      >
                        <i className="ri-facebook-circle-fill"></i>
                      </a>

                      <a
                        className="mt-[-0.65vmin]  text-black text-[3.75vmin]"
                        href="https://www.youtube.com/channel/UC9Z-9sqp4jPHl7hrY65EPkg"
                      >
                        <i className="ri-youtube-fill"></i>
                      </a>

                      <a
                        href="https://www.pinterest.com/anup91700/"
                        className="mt-[-0.65vmin]  text-black text-[3.75vmin]"
                      >
                        <i className="ri-pinterest-fill"></i>
                      </a>
                    </div>
                  </div>
                  <div className="font-semibold text-xs ml-4">
                    Tanhasaree is now at your fingertips. Download the
                    Tanhasaree app
                  </div>
                  {/* <div className="iconsHolder flex  items-center gap-x-6 ml-4">
                    <img src="https://cdn.shopify.com/s/files/1/0049/3649/9315/files/g.p_1-01_150x.png?v=1671168364" />
                    <img src="https://cdn.shopify.com/s/files/1/0049/3649/9315/files/a.s_1-01-01_150x.png?v=1671168364" />
                  </div> */}
                </div>
              </div>
              <div className="w-[100vw] flex gap-x-4  p-4 pl-1 mt-5 ml-4">
                <div className="w-full  ">
                  <p className="text-sm font-Montserrat text-black font-medium mb-3">
                    Popular Searches:
                  </p>
                  <div className="flex flex-wrap text-black gap-1">
                    {[
                      "Mansoor Silk",
                      "Chinia Silk ",
                      "Soft Silk Sarees  ",
                      "South Silk Sarees  ",
                      "Sequince Sarees",
                      "Sangeet Saree  ",
                      "Tissue Sarees  ",
                      "Brocade Sarees  ",
                      "Floral saree  ",
                    ].map((item, index) => (
                      <Link to="/products">
                        <p
                          key={index}
                          className="text-xs font-Montserrat text-black px-3 py-1 rounded-md underline underline-offset-3"
                        >
                          {item}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="w-[100vw] flex gap-x-4  p-4  pl-3 mt-5 ">
                <div className="w-full ">
                  <p className="text-sm  font-Montserrat text-black font-medium mb-3 ">
                    Our Rules and Regulations:
                  </p>
                  <div className="flex flex-wrap gap-x-7 pl-3">
                    {[
                      "Privacy Policy",
                      "Shipping & Delivery",
                      "Return Policy",

                      "Terms & Conditions",
                      "refund policy",
                    ].map((item, index) => (
                      <a href={`/${item?.split(" ")[0]}`}>
                        <p
                          key={index}
                          className="text-xs font-Montserrat text-black gap-x-5  rounded-md underline underline-offset-3"
                        >
                          {item}
                        </p>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="w-[30vw] ml-[30%] flex flex-col justify-start items-center  mt-5 mb-5 text-black">
                <p className="text-xs">
                  © Tanah Sarees 2024. All Rights Reserved.
                </p>
                <p className="text-xs mt-4">Powered By Codemap.</p>
              </div>
            </>
          )) || (
            <>
              <div
                className="w-[100vw]    flex flex-col gap-y-3  items-center"
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
                    <a
                      className=""
                      href="https://www.instagram.com/tanahsarees?igsh=bGRmOW4wamVobXpo&utm_source=qr"
                    >
                      <i className="ri-instagram-line text-black text-[7vmin]"></i>
                    </a>
                    <a
                      className=" text-black text-[7vmin]"
                      href="https://www.facebook.com/share/1EELi25ZRw/"
                    >
                      <i className="ri-facebook-circle-fill"></i>
                    </a>

                    <a
                      className="text-black text-[7vmin]"
                      href="https://www.youtube.com/channel/UC9Z-9sqp4jPHl7hrY65EPkg"
                    >
                      <i className="ri-youtube-fill"></i>
                    </a>

                    <a
                      className="  text-black text-[7vmin]"
                      href="https://www.pinterest.com/anup91700/"
                    >
                      <i className="ri-pinterest-fill"></i>
                    </a>
                  </div>
                </div>

                <div className="font-medium text-[2.5vmin] ml-1 text-black">
                  Tanhasaree is now at your fingertips. Download the Tanhasaree
                  app
                </div>
                {/* <div className="iconsHolder flex  items-center gap-x-6 ml-4">
                  <img src="https://cdn.shopify.com/s/files/1/0049/3649/9315/files/g.p_1-01_150x.png?v=1671168364" />
                  <img src="https://cdn.shopify.com/s/files/1/0049/3649/9315/files/a.s_1-01-01_150x.png?v=1671168364" />
                </div> */}

                <div className="FAQHolder"></div>

                <div className="w-[100vw] flex gap-x-3  p-1 pl-1 mt-5 ml-2">
                  <div className="w-full  ">
                    <p className="text-sm font-Montserrat text-black font-medium mb-3">
                      Popular Searches:
                    </p>
                    <div className="flex flex-wrap gap-x-3 gap-y-1 text-black justify-center items-center p-1 ">
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
                          className="text-xs font-Montserrat  gap-x-5  rounded-md underline underline-offset-3"
                        >
                          <a href="/products">{item}</a>
                        </p>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="w-[100vw] flex gap-x-4  p-4  pl-3 mt-1 ">
                  <div className="w-full ">
                    <p className="text-sm  font-Montserrat text-black  font-medium mb-3 ">
                      Our Rules and Regulations:
                    </p>
                    <div className="flex flex-wrap gap-x-3 gap-y-1 text-black justify-center items-center p-1">
                      {[
                        "Privacy Policy",
                        "Shipping & Delivery",
                        "Return Policy",

                        "Terms & Conditions",
                        "refund policy",
                      ].map((item, index) => (
                        <a href={`/${item?.split(" ")[0]}`}>
                          <p
                            key={index}
                            className="text-xs font-Montserrat text-black gap-x-5  rounded-md underline underline-offset-3"
                          >
                            {item}
                          </p>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[100vw] text-center flex flex-col text-black font-bold  pb-6">
                <p className="text-xs  overflow-hidden">
                  © Tanah Sarees 2024. All Rights Reserved.
                </p>
                <p className="text-xs   mt-1 overflow-hidden">
                  Powered By Codemap.
                </p>
              </div>
            </>
          )}
        </div>
      </div>
      <div className="absolute bottom-0 w-screen h-[100%] "></div>
    </div>
  );
};

export default Footer;
