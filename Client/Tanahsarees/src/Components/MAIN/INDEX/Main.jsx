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
import { useNavigate, useLocation } from "react-router-dom";

const Main = () => {
  const authStatus = useCheckAuth(null, "auth");
  const navigate = useNavigate();
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

  ///-->>> this is code for updating th add favourite item in product display//--->>>>

  const location = useLocation();

  useEffect(() => {
    const handlePopState = () => {
      if (location.pathname === "/products") {
        window.location.reload();
      }
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [location]);

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

    const timer1 = setTimeout(() => {
      navigate("/");
    }, 3600000);

    return () => {
      clearTimeout(timer);
      clearTimeout(timer1);
    };
  }, [
    LargeSearchBox,
    authStatus.user,
    navigate,
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

        {screen.width <= 1366 && screen.height < 700 ? (
          <div className="mt-[4vmin]">
            <BannerSlider />
          </div>
        ) : (
          <BannerSlider />
        )}

        {/* </div> */}
        {/* <Feature /> */}
        <Exclusive />
        <Selling />
        {/* <div className="mt-10 lg:mt-10">
          <BannerSlider />
        </div> */}
        <VideoCard />

        <Occasion />
        {/* <div className="mt-10 lg:mt-10">
          <BannerSlider />
        </div> */}
        {/* <Collection /> */}
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
