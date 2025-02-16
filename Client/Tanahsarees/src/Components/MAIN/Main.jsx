/* eslint-disable react/jsx-no-undef */
import BannerSlider from "./BANNER/BannerSlider";
import MainHeader from "./HEDAERS/MAIN/MainHeader";
import SliderComponent from "./SLIDER/SliderComponent";
import Footer from "../FOOTER/Footer";

const Main = () => {
  return (
    <>
      <div className="relative">
        <MainHeader />
        <SliderComponent />
        <BannerSlider />
        <Footer />
      </div>
    </>
  );
};

export default Main;
