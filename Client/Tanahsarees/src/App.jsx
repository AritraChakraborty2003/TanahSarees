import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Faqcomponent from "./Components/FAQ/Faqcomponent";

import Loader from "./Components/MAIN/Loader";
import MainHeader from "./Components/MAIN/HEDAERS/MAIN/MainHeader";
import TrackOrder from "./Components/TRACKORDER/TrackOrder";
import Shipping from "./Components/SHIPPING&DELIVERY/Shipping";
import ContactForm from "./Components/CONTACTUS/ContactForm";
import Main from "./Components/MAIN/Main";
import Footer from "./Components/FOOTER/Footer";
import TestUpload from "./Components/CMS/TestUpload/TestUpload";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Loader />,
  },
  {
    path: "/faq",
    element: (
      <>
        <MainHeader />
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
        <MainHeader />
        <TrackOrder />
        <Footer />
      </>
    ),
  },
  {
    path: "/shipping",
    element: (
      <>
        <MainHeader />
        <Shipping />
        <Footer />
      </>
    ),
  },
  {
    path: "/contactus",
    element: (
      <>
        <MainHeader />
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
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
export default App;
