import BannerSlider from "../BANNER/BannerSlider";
import MainHeader from "../HEDAERS/MAIN/MainHeader";
import SliderComponent from "../SLIDER/SliderComponent";
import Footer from "../../FOOTER/Footer";
import Feature from "../FEATURES/Feature";
import Exclusive from "../EXCLUSIVEAREA/Exclusive";
import Selling from "../SELLINGFAST/Selling";
import Occasion from "../OCCASION/Occasion";
import Collection from "../SHOPBYCOLLECTION/Collection";
import Material from "../SHOPBYMATERIAL/Material";
import Testimonial from "../TESTIMONIALS/Testimonial";

const Main = () => {
  return (
    <>
      <div className="relative">
        <MainHeader />
        <SliderComponent />
        <BannerSlider />
        <Feature />
        <Exclusive />
        <Selling />
        <BannerSlider />
        <Occasion />
        <BannerSlider />
        <Collection />
        <Material />
        <Testimonial />
        <Footer />
      </div>
    </>
  );
};

export default Main;
