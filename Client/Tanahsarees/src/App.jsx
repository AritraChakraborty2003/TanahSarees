import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Faqcomponent from "./Components/FAQ/Faqcomponent";

import Loader from "./Components/MAIN/Loader";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Loader />,
  },
  {
    path: "/faq",
    element: <Faqcomponent />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
