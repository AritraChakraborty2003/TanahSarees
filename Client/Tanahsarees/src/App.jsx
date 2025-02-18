import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Faqcomponent from "./Components/FAQ/Faqcomponent";
import { useState } from "react";
import Loader from "./Components/MAIN/INDEX/Loader";
import MainHeader from "./Components/MAIN/HEDAERS/MAIN/MainHeader";
import TrackOrder from "./Components/TRACKORDER/TrackOrder";
import Shipping from "./Components/SHIPPING&DELIVERY/Shipping";
import ContactForm from "./Components/CONTACTUS/ContactForm";
import Main from "./Components/MAIN/INDEX/Main";
import Footer from "./Components/FOOTER/Footer";
import TestUpload from "./Components/CMS/TestUpload/TestUpload";
import { AppContext } from "./AppContext/AppContext";
import CustomerReviews from "./Components/CUSTOMER_REVIEWS/CustomerReviews";
// import Product from "./Components/PRODUCTS/Product";

import Product from "./Components/PRODUCTS/Product";
import Favourite from "./Components/FAVOURITES/Favourite";
import AnimatedCounter from "./Components/TESTComp/AnimatedCounter";
import ScrollComp from "./Components/TESTComp/ScrollComp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Loader />,
  },
  {
    path: "/faq",
    element: (
      <>
        <MainHeader scrollValue="100" />
        <Faqcomponent />
        <Footer />
      </>
    ),
  },
  {
    path: "/main",
    element: <Main />,
  },
  {
    path: "/header",
    element: <MainHeader />,
  },
  {
    path: "/trackorder",
    element: (
      <>
        <MainHeader scrollValue="30" />
        <TrackOrder />
        <Footer />
      </>
    ),
  },
  {
    path: "/shipping",
    element: (
      <>
        <MainHeader scrollValue="30" />
        <Shipping />
        <Footer />
      </>
    ),
  },
  {
    path: "/contactus",
    element: (
      <>
        <MainHeader scrollValue="30" />
        <ContactForm />
        <Footer />
      </>
    ),
  },
  {
    path: "/testCMS",
    element: (
      <>
        <TestUpload />
      </>
    ),
  },
  {
    path: "/reviews",
    element: (
      <>
        <MainHeader scrollValue="30" />
        <CustomerReviews />
        <Footer />
      </>
    ),
  },
  {
    path: "/products",
    element: (
      <>
        <MainHeader scrollValue="30" />
        <Product />
        <Footer />
      </>
    ),
  },
  {
    path: "/favourites",
    element: (
      <>
        <MainHeader scrollValue="30" />
        <Favourite />
        <Footer />
      </>
    ),
  },
  {
    path: "/counter",
    element: (
      <>
        <AnimatedCounter />
      </>
    ),
  },
  {
    path: "/scrollcomp",
    element: <ScrollComp />,
  },
]);

const App = () => {
  const [change, setChange] = useState(false);
  const [cartIsOpen, setCartIsOpen] = useState(false);
  const [hamIsOpen, setHamIsOpen] = useState(false);
  const toggleDrawer = () => setCartIsOpen(!cartIsOpen);
  const toggleHam = () => setHamIsOpen(!hamIsOpen);
  const [contentCart, setContentCart] = useState(0);
  const [isLogin, setIsLogin] = useState(true);
  return (
    <>
      <AppContext.Provider
        value={{
          change,
          setChange,
          cartIsOpen,
          toggleDrawer,
          hamIsOpen,
          setHamIsOpen,
          toggleHam,
          contentCart,
          setContentCart,
          isLogin,
          setIsLogin,
        }}
      >
        <RouterProvider router={router} />
      </AppContext.Provider>
    </>
  );
};
export default App;
