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
import VideoCard from "../VIDEOCARD/VideoCard";

const Main = () => {
  return (
    <>
      <div className="relative">
        <MainHeader category="Not CMS" />

        <SliderComponent />

        {/* <div className="mt-2 lg:mt-10"> */}
        <BannerSlider />

        {/* </div> */}
        <Feature />
        <Exclusive />
        <Selling />
        <div className="mt-10 lg:mt-10">
          <BannerSlider />
        </div>
        {screen.width > 1024 && <VideoCard />}
        <Occasion />
        <div className="mt-10 lg:mt-10">
          <BannerSlider />
        </div>
        <Collection />
        <Material />
        <Testimonial />
        <div className="mt-5 lg:mt-10">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Main;
