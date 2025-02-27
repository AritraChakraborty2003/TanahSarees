/* eslint-disable no-unused-vars */
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
import { useContext, useEffect } from "react";
import { AppContext } from "../../../AppContext/AppContext";
import { useCheckAuth } from "../../../Utils/useCheckAuth";

const Main = () => {
  const authStatus = useCheckAuth(null, "auth");
  const {
    loginOpen,
    setLoginOpen,
    Loginlargescreen,
    setLoginlargescreen,
    LargeSearchBox,
    setLargeSearchBox,
    smallSearchBox,
    setSmallSearchBox,
  } = useContext(AppContext);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (
        screen.width > 1000 &&
        !authStatus.user &&
        !LargeSearchBox &&
        !smallSearchBox
      ) {
        setLoginlargescreen(true);
      } else if (
        screen.width < 1000 &&
        !authStatus.user &&
        !LargeSearchBox &&
        !smallSearchBox
      ) {
        setLoginOpen(true);
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, [
    LargeSearchBox,
    authStatus.user,
    setLoginOpen,
    setLoginlargescreen,
    smallSearchBox,
  ]);

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
