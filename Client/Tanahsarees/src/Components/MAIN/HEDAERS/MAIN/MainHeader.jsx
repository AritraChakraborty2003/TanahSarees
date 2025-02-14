import Marqueecomp from "../Marqueecomp";
import Smallheader from "../Smallheader";
import Header from "../Header/Header";
import OptionsBar from "../Header/OptionsBar";

const MainHeader = () => {
  return (
    <>
      <Marqueecomp />
      {screen.width > 1000 && <Smallheader />}
      <Header />
      <OptionsBar />
    </>
  );
};

export default MainHeader;
