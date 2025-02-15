import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Faqcomponent from "./Components/FAQ/Faqcomponent";

import Loader from "./Components/MAIN/Loader";
import MainHeader from "./Components/MAIN/HEDAERS/MAIN/MainHeader";
import TrackOrder from "./Components/TRACKORDER/TrackOrder";
import Shipping from "./Components/SHIPPING&DELIVERY/Shipping";
import ContactForm from "./Components/CONTACTUS/ContactForm";

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
      </>
    ),
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
      </>
    ),
  },
  {
    path: "/shipping",
    element: (
      <>
        <MainHeader />
        <Shipping />
      </>
    ),
  },
  {
    path: "/contactus",
    element: (
      <>
        <MainHeader />
        <ContactForm />
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
