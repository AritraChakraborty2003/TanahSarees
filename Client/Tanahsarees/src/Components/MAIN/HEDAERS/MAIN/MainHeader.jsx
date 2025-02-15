import Marqueecomp from "../Marqueecomp";
import Smallheader from "../Smallheader";
import Header from "../Header/Header";
import OptionsBar from "../Header/OptionsBar";

const MainHeader = () => {
  return (
    <>
      <div
        id="main-header"
        className={
          screen.width > 1000
            ? `w-full bg-white shadow-lg fixed top-0 left-0 z-50`
            : ``
        }
      >
        <Marqueecomp />
        {screen.width > 1000 && <Smallheader />}
        <Header />
        <OptionsBar />
      </div>
    </>
  );
};

export default MainHeader;
