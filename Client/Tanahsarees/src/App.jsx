import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";
import Faqcomponent from "./Components/FAQ/Faqcomponent";
// import axios from "axios";
import { useState } from "react";
// import Loader from "./Components/MAIN/INDEX/Loader";
import Main from "./Components/MAIN/INDEX/Main";
import MainHeader from "./Components/MAIN/HEDAERS/MAIN/MainHeader";
import TrackOrder from "./Components/TRACKORDER/TrackOrder";
import Shipping from "./Components/SHIPPING&DELIVERY/Shipping";

import ContactForm from "./Components/CONTACTUS/ContactForm";
// import Main from "./Components/MAIN/INDEX/Main";
import Footer from "./Components/FOOTER/Footer";
import TestUpload from "./Components/CMS/TestUpload/TestUpload";
import { AppContext } from "./AppContext/AppContext";
import CustomerReviews from "./Components/CUSTOMER_REVIEWS/CustomerReviews";
import ProductDisplay from "./Components/PRODUCTS/ProductDisplay";
import Favourite from "./Components/FAVOURITES/Favourite";
import AnimatedCounter from "./Components/TESTComp/AnimatedCounter";
import ScrollComp from "./Components/TESTComp/ScrollComp";
import Carts from "./Components/CARTPAGE/Carts";
import Productdescription from "./Components/PRODUCTDESCR/Productdescription";
import SizeChart from "./Components/SIZECHART/SizeChart";
import Order from "./Components/ORDERS/Order";
import FilterAccordion from "./Components/TESTComp/FilterAccordian";
import Profile from "./Components/PROFILE/Profile";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminLogin from "./Components/CMS/AdminLogin";
import CmsDashboard from "./Components/CMS/DASHBOARD/CmsDashboard";
import CmsTestimonial from "./Components/CMS/TESTIMONIAL/CmsTestimonial";
import Catalogue from "./Components/CMS/CATALOGUE/Catalogue";
import AddCatalogue from "./Components/CMS/CATALOGUE/AddCatalogue";

import User from "./Components/CMS/USERS/User";
import Transaction from "./Components/CMS/TRANSACTION/Transaction";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";
import CMSorderCard from "./Components/CMS/CMScards/CMSorderCard";
import CMSReviews from "./Components/CMS/CMScards/CMSReviews";
import ScrollToTop from "./Components/MAIN/Support/ScrollToTop";
import ProtectedRouteUser from "./Components/MAIN/ProtectedRouteUser";

// import { TestPay } from "../TestPay/TestPay";
// import ResultPage from "../TestPay/ResultPage";

import ResultPageFinal from "./Components/RESULTPAGE/ResultPageFinal";
import CMSCancelCards from "./Components/CMS/CMScards/CMSCancelCards";
import BannerForm from "./Components/CMS/BANNER/BannerForm";

import PrivacyPolicy from "./Components/PRIVACYPOLICY/PrivacyPolicy";
import ShippingPolicy from "./Components/SHIPPINGPOLICY/shippingPolicy";
import RefundPolicy from "./Components/REFUNDPOLICY/RefundPolicy";
import ReturnPolicy from "./Components/RETURNPOLICY/ReturnPolicy";
import Terms from "./Components/TERMS/Terms";

import CmsReciept from "./Components/CMS/RECIEPT/reciept";
import CmsTrackOrder from "./Components/CMS/CMSTRACKORDER/CmsTrackOrder";

import CmsVideoCard from "./Components/CMS/VIDEOS/CmsVideoCrad";
import ProductFilter from "./Components/PRODUCTS/ProductFilter";
import Header from "./Components/MAIN/HEDAERS/Header/Header";
// import { useLocation } from "react-router-dom";

// const ScrollToTopGlobal = () => {
//   const { pathname } = useLocation();

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [pathname]); // Runs on route change

//   return null;
// };

// axios.defaults.withCredentials = true;
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
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
    path: "/sizechart",
    element: (
      <>
        <MainHeader scrollValue="30" />
        <SizeChart />
        <Footer />
      </>
    ),
  },
  {
    path: "/shipping_info",
    element: (
      <>
        <MainHeader scrollValue="30" />
        <Shipping />
        <Footer />
      </>
    ),
  },
  {
    path: "/orders",
    element: (
      <>
        <ProtectedRouteUser>
          <MainHeader scrollValue="20" />
          <Order />
          <Footer />
        </ProtectedRouteUser>
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
        <ProductDisplay />
        <Footer />
      </>
    ),
  },
  {
    path: "/cart",
    element: (
      <>
        <ProtectedRouteUser>
          <MainHeader scrollValue="30" />
          <Carts />
          <Footer />
        </ProtectedRouteUser>
      </>
    ),
  },
  {
    path: "/favourites",
    element: (
      <>
        <ProtectedRouteUser>
          <MainHeader scrollValue="30" />
          <Favourite />
          <Footer />
        </ProtectedRouteUser>
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
  {
    path: "/product_descr",
    element: (
      <>
        <MainHeader scrollValue="30" />
        <ScrollToTop />

        <Productdescription />
        <Footer />
      </>
    ),
  },
  {
    path: "/filteraccordian",
    element: <FilterAccordion />,
  },
  {
    path: "/profile",
    element: (
      <>
        <ProtectedRouteUser>
          <MainHeader scrollValue="30" />
          <Profile />
          <Footer />
        </ProtectedRouteUser>
      </>
    ),
  },
  {
    path: "/cms",
    element: (
      <>
        <MainHeader scrollValue="30" category="CMS" />
        <AdminLogin />
        <Footer />
      </>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <>
        <ProtectedRoute>
          <MainHeader scrollValue="30" category="CMS" />
          <CmsDashboard />
          <Footer />
        </ProtectedRoute>
      </>
    ),
  },
  {
    path: "/cataloguemanager",
    element: (
      <>
        <ProtectedRoute>
          <MainHeader scrollValue="30" category="CMS" />
          <Catalogue />
          <Footer />
        </ProtectedRoute>
      </>
    ),
  },
  {
    path: "/CMSTestinomials",
    element: (
      <>
        <ProtectedRoute>
          <MainHeader scrollValue="30" />
          <CmsTestimonial />
          <Footer />
        </ProtectedRoute>
      </>
    ),
  },

  {
    path: "/addcatalogue",
    element: (
      <>
        <MainHeader scrollValue="30" category="CMS" />
        <AddCatalogue />
        <Footer />
      </>
    ),
  },
  {
    path: "/CMSusers",
    element: (
      <>
        <ProtectedRoute>
          <MainHeader scrollValue="30" category="CMS" />
          <User />
          <Footer />
        </ProtectedRoute>
      </>
    ),
  },
  {
    path: "/transactionmanager",
    element: (
      <>
        <ProtectedRoute>
          <MainHeader scrollValue="30" category="CMS" />
          <Transaction />
          <Footer />
        </ProtectedRoute>
      </>
    ),
  },
  {
    path: "/cmsorders",
    element: (
      <>
        <ProtectedRoute>
          <MainHeader scrollValue="30" category="CMS" />
          <CMSorderCard />
          <Footer />
        </ProtectedRoute>
      </>
    ),
  },
  {
    path: "/cmscancel",
    element: (
      <>
        <ProtectedRoute>
          <MainHeader scrollValue="30" category="CMS" />
          <CMSCancelCards />
          <Footer />
        </ProtectedRoute>
      </>
    ),
  },
  {
    path: "/CMSReviews",
    element: (
      <>
        <ProtectedRoute>
          <MainHeader scrollValue="30" category="CMS" />
          <CMSReviews />
          <Footer />
        </ProtectedRoute>
      </>
    ),
  },

  {
    path: "/result",
    element: (
      <>
        <MainHeader scrollValue="30" />
        <ResultPageFinal />
        <Footer />
      </>
    ),
  },
  {
    path: "/bannerManagement",
    element: (
      <>
        <ProtectedRoute>
          <MainHeader scrollValue="30" />
          <BannerForm />
          <Footer />
        </ProtectedRoute>
      </>
    ),
  },
  {
    path: "/privacy",
    element: (
      <>
        {/* <MainHeader scrollValue="30" /> */}
        <Header />
        <PrivacyPolicy />
        <Footer />
      </>
    ),
  },
  {
    path: "/shipping",
    element: (
      <>
        {/* <MainHeader scrollValue="30" /> */}
        <Header />
        <ShippingPolicy />
        <Footer />
      </>
    ),
  },
  {
    path: "/refund",
    element: (
      <>
        {/* <MainHeader scrollValue="30" /> */}
        <Header />
        <RefundPolicy />
        <Footer />
      </>
    ),
  },
  {
    path: "/return",
    element: (
      <>
        <Header />
        <ReturnPolicy />
        <Footer />
      </>
    ),
  },
  {
    path: "/terms",
    element: (
      <>
        {/* <MainHeader scrollValue="30" /> */}
        <Header />
        <Terms />
        <Footer />
      </>
    ),
  },
  {
    path: "/reciept",
    element: (
      <>
        <ProtectedRoute>
          <MainHeader scrollValue="30" />
          <CmsReciept />
          <Footer />
        </ProtectedRoute>
      </>
    ),
  },
  {
    path: "/CmsTrackOrder",
    element: (
      <>
        <ProtectedRoute>
          <MainHeader scrollValue="30" />
          <CmsTrackOrder />
          <Footer />
        </ProtectedRoute>
      </>
    ),
  },
  {
    path: "/videos",
    element: (
      <>
        <ProtectedRoute>
          <MainHeader scrollValue="30" />
          <CmsVideoCard />
          <Footer />
        </ProtectedRoute>
      </>
    ),
  },
  {
    path: "/product-filter",
    element: (
      <>
        <MainHeader scrollValue="30" />
        <ProductFilter />
        <Footer />
      </>
    ),
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
  const [Loginlargescreen, setLoginlargescreen] = useState(false);

  /*-------------------------*/
  // For HTTP Click Handler request
  const [httpClick, setHttpClick] = useState(false); //FOR POST
  const [httpClickDelete, setHttpClickDelete] = useState(false); //DELETE
  const [isLogoutClick, setisLogoutClick] = useState(false);
  /*-------------------------*/

  /*------------------*/
  //For Check Auth //
  const [isUserLogin, setIsUserLogin] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  /*-----------------*/

  // const isAdminLoginValue = localStorage.getItem("isAdminLogin");
  const [isAdminLogin, setIsAdminLogin] = useState(false);
  const [adminInfo, setAdminInfo] = useState({});

  /***Admin Login Info */

  const [userLoggedIn, setUserLoggedIn] = useState(false);

  const [profileOpen, setProfileOpen] = useState(false);

  const [favouriteLength, setFavouriteLength] = useState(0);

  const [cartLength, setCartLength] = useState(0);

  const [sareeData, setSareeData] = useState([]);

  const [activeProduct, setActiveProduct] = useState({});

  const [activeFilter, setActiveFilter] = useState(false);

  const [filteredData, setFilteredData] = useState([]);

  const [loginOpen, setLoginOpen] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");

  //For Search Box Display
  const [LargeSearchBox, setLargeSearchBox] = useState(false);
  const [smallSearchBox, setSmallSearchBox] = useState(false);

  //Search data
  const [searchDataValue, setSearchDataValue] = useState([]);

  //cart click mgmt
  const [cartClick, setCartClick] = useState(false);

  const [activeCartId, setactiveCartId] = useState("");

  const [activeDeleteSaree, setActiveDeleteSaree] = useState("");

  const [clickDeleteAccount, setclickDeleteAccount] = useState(false);
  const [newvar, setnewvar] = useState(false);

  //Patch Click
  const [PATCHClick, setPATCHClick] = useState(false);

  const [favItem, setFavItem] = useState("");

  //HeartClick,setHeartClick
  const [heartClick, setHeartClick] = useState(false);

  const [heartSave, setHeartSave] = useState(false);

  const [heartItem, setHeartItem] = useState("");
  const [cartDrawerTigger, setCartDrawerTigger] = useState(false);
  const [cartTotal, setCartTotal] = useState(0);
  const [ReloadDrawer, setReloadDrawer] = useState(false);

  //For Profile
  const [isSet, setIsSet] = useState(false);

  //For Product Descr
  const [index, setIndex] = useState(0);

  //For slider click product filter
  const [filterItem, setFilterItem] = useState(null);
  const [filterText, setFilterText] = useState("");
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
          Loginlargescreen,
          setLoginlargescreen,
          httpClick,
          setHttpClick,
          isUserLogin,
          setIsUserLogin,
          userInfo,
          setUserInfo,
          isAdminLogin,
          setIsAdminLogin,
          adminInfo,
          setAdminInfo,
          isLogoutClick,
          setisLogoutClick,
          userLoggedIn,
          setUserLoggedIn,
          profileOpen,
          setProfileOpen,
          favouriteLength,
          setFavouriteLength,
          cartLength,
          setCartLength,
          sareeData,
          setSareeData,
          activeProduct,
          setActiveProduct,
          activeFilter,
          setActiveFilter,
          filteredData,
          setFilteredData,
          loginOpen,
          setLoginOpen,
          searchTerm,
          setSearchTerm,
          LargeSearchBox,
          setLargeSearchBox,
          smallSearchBox,
          setSmallSearchBox,
          searchDataValue,
          setSearchDataValue,
          cartClick,
          setCartClick,
          activeCartId,
          setactiveCartId,
          httpClickDelete,
          setHttpClickDelete,
          activeDeleteSaree,
          setActiveDeleteSaree,
          clickDeleteAccount,
          setclickDeleteAccount,
          PATCHClick,
          setPATCHClick,
          favItem,
          setFavItem,
          heartClick,
          setHeartClick,
          heartSave,
          setHeartSave,
          heartItem,
          setHeartItem,
          cartDrawerTigger,
          setCartDrawerTigger,
          cartTotal,
          setCartTotal,
          ReloadDrawer,
          setReloadDrawer,
          newvar,
          setnewvar,
          isSet,
          setIsSet,
          index,
          setIndex,
          filterItem,
          setFilterItem,
          filterText,
          setFilterText,
        }}
      >
        <RouterProvider router={router} />
        <ToastContainer
          position="top-right"
          autoClose={800} // Less time globally
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          toastStyle={{
            maxWidth: window.innerWidth <= 1000 ? "280px" : "400px", // Reduce width for <=1000px
            marginTop: window.innerWidth <= 1000 ? "1.5rem" : "0",
            marginRight: window.innerWidth <= 1000 ? "0.45rem" : "0", // Apply mt-1 for <=1000px
            fontSize: window.innerWidth <= 1000 ? "14px" : "16px", // Adjust font size
            padding: "10px",
          }}
        />
      </AppContext.Provider>
    </>
  );
};
export default App;
