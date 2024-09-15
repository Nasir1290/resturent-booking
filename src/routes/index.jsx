/* eslint-disable react-refresh/only-export-components */
// import { createBrowserRouter } from "react-router-dom";
// import Main from "../layouts/main/Main";
// import Food from "../pages/main/Food";

// import Home from "../pages/main/Home";
// import TermsAndConditions from "../pages/main/TermsAndConditions";
// import About from "../pages/main/About";
// import Dashboard from "../layouts/dashboard/Dashboard";
// import DashboardHome from "../pages/dashboard/DashboardHome";
// import AddMenu from "../pages/dashboard/AddMenu";
// import Earning from "../pages/dashboard/Earning";
// import OrderDetails from "../pages/dashboard/OrderDetails";
// import Auth from "../layouts/auth/Auth";
// import Login from "../pages/auth/Login";
// import SignUp from "../pages/auth/SignUp";
// import ForgetPassword from "../pages/auth/ForgetPassword";
// import OtpVerify from "../pages/auth/OtpVerify";
// import ResetPassword from "../pages/auth/ResetPassword";
// import NotFound from "../components/general/NotFound";
// import UserInfo from "../pages/user/UserInfo";
// import FavouriteItems from "../pages/user/FavouriteItems";
// import UserProfile from "../pages/user/UserProfile";
// import RestaurantBooking from "../pages/restaurent/RestaurentDetails";
// import Foods from "../pages/food/Foods";
// import ProductDetails from "../components/product/ProductDetails";
// import CartDetails from "../pages/food/CartDetails";
// import RestaurentsPage from "../pages/restaurent/RestaurentsPage";
// import ResturentDetails from "../pages/restaurent/RestaurentDetails";
// import PaymentMethod from "../components/product/PaymentMethod";
// import Loading from "../components/general/Loading";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Main />,
//     children: [
//       {
//         path: "/",
//         element: <Home />,
//       },
//       {
//         path: "/home",
//         element: <Home />,
//       },
//       {
//         path: "user-profile",
//         element: <UserProfile />,
//       },
//       {
//         path: "book-a-table",
//         element: <RestaurentsPage />,
//       },
//       {
//         path: "hotel-details",
//         element: <ResturentDetails />,
//       },
//       {
//         path: "order-details",
//         element: <OrderDetails />,
//       },
//       {
//         path: "user-info",
//         element: <UserInfo />,
//       },
//       {
//         path: "cart-details",
//         element: <CartDetails />,
//       },
//       {
//         path: "payment-method",
//         element: <PaymentMethod />,
//       },
//       {
//         path: "favourite-items",
//         element: <FavouriteItems />,
//       },
//       {
//         path: "/foods",
//         element: <Foods />,
//       },
//       {
//         path: "/product-details",
//         element: <ProductDetails />,
//       },
//       {
//         path: "/about",
//         element: <About />,
//       },
//       {
//         path: "/foods/:id",
//         element: <Food />,
//       },
//       {
//         path: "terms-and-conditions",
//         element: <TermsAndConditions />,
//       },
//     ],
//   },
//   {
//     path: "/dashboard",
//     element: <Dashboard />,
//     children: [
//       {
//         path: "dashboard",
//         element: <DashboardHome />,
//       },
//       {
//         path: "add-menu",
//         element: <AddMenu />,
//       },
//       {
//         path: "earning",
//         element: <Earning />,
//       },
//     ],
//   },
//   {
//     path: "/auth",
//     element: <Auth />,
//     children: [
//       {
//         path: "login",
//         element: <Login />,
//       },
//       {
//         path: "sign-up",
//         element: <SignUp />,
//       },
//       {
//         path: "forget-password",
//         element: <ForgetPassword />,
//       },
//       {
//         path: "otp-verify",
//         element: <OtpVerify />,
//       },
//       {
//         path: "reset-password",
//         element: <ResetPassword />,
//       },
//     ],
//   },
//   {
//     path: "*",
//     element: <NotFound />,
//   },
// ]);

// export default router;

import { createBrowserRouter } from "react-router-dom";
import React, { Suspense, lazy } from "react";
import Main from "../layouts/main/Main";
import Dashboard from "../layouts/dashboard/Dashboard";
import Auth from "../layouts/auth/Auth";
import NotFound from "../components/general/NotFound";
import Loading from "../components/general/Loading";

// Lazy load components
const Home = lazy(() => import("../pages/main/Home"));
const TermsAndConditions = lazy(() =>
  import("../pages/main/TermsAndConditions")
);
const BookedRestaurent = lazy(() =>
  import("../pages/restaurent/BookedRestaurent")
);
const About = lazy(() => import("../pages/main/About"));
const UserProfile = lazy(() => import("../pages/user/UserProfile"));
const RestaurentsPage = lazy(() =>
  import("../pages/restaurent/RestaurentsPage")
);
const ResturentDetails = lazy(() =>
  import("../pages/restaurent/RestaurentDetails")
);
const OrderDetails = lazy(() => import("../pages/dashboard/OrderDetails"));
const UserInfo = lazy(() => import("../pages/user/UserInfo"));
const CartDetails = lazy(() => import("../pages/food/CartDetails"));
const PaymentMethod = lazy(() => import("../components/product/PaymentMethod"));
const FavouriteItems = lazy(() => import("../pages/user/FavouriteItems"));
const Foods = lazy(() => import("../pages/food/Foods"));
const ProductDetails = lazy(() =>
  import("../components/product/ProductDetails")
);
const Food = lazy(() => import("../pages/main/Food"));
const DashboardHome = lazy(() => import("../pages/dashboard/DashboardHome"));
const AddMenu = lazy(() => import("../pages/dashboard/AddMenu"));
const Earning = lazy(() => import("../pages/dashboard/Earning"));
const Login = lazy(() => import("../pages/auth/Login"));
const SignUp = lazy(() => import("../pages/auth/SignUp"));
const ForgetPassword = lazy(() => import("../pages/auth/ForgetPassword"));
const OtpVerify = lazy(() => import("../pages/auth/OtpVerify"));
const ResetPassword = lazy(() => import("../pages/auth/ResetPassword"));
const User = lazy(() => import("../pages/user/User"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<Loading />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/home",
        element: (
          <Suspense fallback={<Loading />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "user-profile",
        element: (
          <Suspense fallback={<Loading />}>
            <UserProfile />
          </Suspense>
        ),
      },
      {
        path: "/user",
        element: (
          <Suspense fallback={<Loading />}>
            <User />
          </Suspense>
        ),
      },
      {
        path: "book-a-table",
        element: (
          <Suspense fallback={<Loading />}>
            <RestaurentsPage />
          </Suspense>
        ),
      },
      {
        path: "hotel/:id",
        element: (
          <Suspense fallback={<Loading />}>
            <ResturentDetails />
          </Suspense>
        ),
      },
      {
        path: "order-details",
        element: (
          <Suspense fallback={<Loading />}>
            <OrderDetails />
          </Suspense>
        ),
      },
      {
        path: "user-info",
        element: (
          <Suspense fallback={<Loading />}>
            <UserInfo />
          </Suspense>
        ),
      },
      {
        path: "cart-details",
        element: (
          <Suspense fallback={<Loading />}>
            <CartDetails />
          </Suspense>
        ),
      },
      {
        path: "booking-history",
        element: (
          <Suspense fallback={<Loading />}>
            <BookedRestaurent />
          </Suspense>
        ),
      },
      {
        path: "payment-method",
        element: (
          <Suspense fallback={<Loading />}>
            <PaymentMethod />
          </Suspense>
        ),
      },
      {
        path: "favourite-items",
        element: (
          <Suspense fallback={<Loading />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/foods",
        element: (
          <Suspense fallback={<Loading />}>
            <Foods />
          </Suspense>
        ),
      },
      {
        path: "/food/:id",
        element: (
          <Suspense fallback={<Loading />}>
            <ProductDetails />
          </Suspense>
        ),
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<Loading />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/foods/:id",
        element: (
          <Suspense fallback={<Loading />}>
            <Food />
          </Suspense>
        ),
      },
      {
        path: "terms-and-conditions",
        element: (
          <Suspense fallback={<Loading />}>
            <TermsAndConditions />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "dashboard",
        element: (
          <Suspense fallback={<Loading />}>
            <DashboardHome />
          </Suspense>
        ),
      },
      {
        path: "add-menu",
        element: (
          <Suspense fallback={<Loading />}>
            <AddMenu />
          </Suspense>
        ),
      },
      {
        path: "earning",
        element: (
          <Suspense fallback={<Loading />}>
            <Earning />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/auth",
    element: <Auth />,
    children: [
      {
        path: "login",
        element: (
          <Suspense fallback={<Loading />}>
            <Login />
          </Suspense>
        ),
      },
      {
        path: "sign-up",
        element: (
          <Suspense fallback={<Loading />}>
            <SignUp />
          </Suspense>
        ),
      },
      {
        path: "forget-password",
        element: (
          <Suspense fallback={<Loading />}>
            <ForgetPassword />
          </Suspense>
        ),
      },
      {
        path: "otp-verify",
        element: (
          <Suspense fallback={<Loading />}>
            <OtpVerify />
          </Suspense>
        ),
      },
      {
        path: "reset-password",
        element: (
          <Suspense fallback={<Loading />}>
            <ResetPassword />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
