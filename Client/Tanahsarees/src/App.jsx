import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Faqcomponent from "./Components/FAQ/Faqcomponent";

import Loader from "./Components/MAIN/Loader";
import MainHeader from "./Components/MAIN/HEDAERS/MAIN/MainHeader";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Loader />,
  },
  {
    path: "/faq",
    element: <Faqcomponent />,
  },
  {
    path: "/header",
    element: <MainHeader />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
