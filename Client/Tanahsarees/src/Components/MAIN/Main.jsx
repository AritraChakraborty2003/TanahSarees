import BannerSlider from "./BANNER/BannerSlider";
import MainHeader from "./HEDAERS/MAIN/MainHeader";
import SliderComponent from "./SLIDER/SliderComponent";
import Footer from "../FOOTER/Footer";
import Feature from "./FEATURES/Feature";

const Main = () => {
  return (
    <>
      <div className="relative">
        <MainHeader />
        <SliderComponent />
        <BannerSlider />
        <Feature />
        <Footer />
      </div>
    </>
  );
};

export default Main;
