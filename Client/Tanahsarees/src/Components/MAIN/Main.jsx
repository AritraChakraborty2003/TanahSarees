import BannerSlider from "./BANNER/BannerSlider";
import MainHeader from "./HEDAERS/MAIN/MainHeader";
import Footer from "../FOOTER/Footer";
import SliderArea from "../SliderArea/SliderArea";
import SliderComponent from "./SLIDER/SliderComponent";

const Main = () => {
  return (
    <>
      <MainHeader />
      <SliderArea />
      <Footer />
      <SliderComponent />
      <BannerSlider />
    </>
  );
};

export default Main;
