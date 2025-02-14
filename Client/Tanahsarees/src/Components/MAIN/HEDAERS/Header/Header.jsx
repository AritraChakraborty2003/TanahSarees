import Search from "./Search";

const Header = () => {
  return (
    <>
      {screen.width > 1000 && (
        <div className="mainHolder flex w-[100vw]">
          <div className="searchHolder w-[33.3%]  flex justify-center items-center">
            <Search />
          </div>
          <div className="logoHolder flex justify-center items-center w-[33.34%]  mt-5 ml-6">
            <img src="https://www.koskii.com/cdn/shop/files/Asset_1_6c5a260f-525e-48eb-b2bd-3f8c773c5a1d_200x.png?v=1614356943" />
          </div>
          <div className="purchaseOptHolder w-[33.33%]  flex justify-end items-center  gap-x-9 2xl:gap-x-20 pr-8 mt-3">
            <a className="mt-[-0.65vmin] darktext  text-[3.75vmin] font-extralight">
              <i className="ri-heart-line"></i>
            </a>
            <a className="mt-[-1vmin] darktext text-[3.75vmin] font-extralight">
              <i className="ri-user-line"></i>
            </a>

            <a className="mt-[-1.35vmin] 2xl:mt-[-1.5vmin] darktext text-[3.75vmin] font-extralight">
              <i className="ri-shopping-cart-line"></i>
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
