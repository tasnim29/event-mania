import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import MyProfile from "../Pages/MyProfile";
import Blog from "../Pages/Blog";
import EventDetails from "../Pages/EventDetails";
import Loader from "../Components/Loader/Loader";
import AuthLayouts from "../Layouts/AuthLayouts";
import Signin from "../Pages/Signin";
import Signup from "../Pages/Signup";
import PrivateRoutes from "../Private/PrivateRoutes";
import ErrorPage from "../Pages/ErrorPage";
import ForgetPassword from "../Pages/ForgetPassword";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        hydrateFallbackElement: <Loader></Loader>,
        loader: () => fetch("/events.json"),
        Component: Home,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoutes>
            <MyProfile></MyProfile>
          </PrivateRoutes>
        ),
      },
      {
        path: "/blog",
        element: (
          <PrivateRoutes>
            <Blog></Blog>
          </PrivateRoutes>
        ),
      },
      {
        path: "/eventDetails/:name",
        hydrateFallbackElement: <Loader></Loader>,
        loader: () => fetch("/events.json"),
        element: (
          <PrivateRoutes>
            <EventDetails></EventDetails>
          </PrivateRoutes>
        ),
      },
    ],
  },
  {
    path: "/auth",
    Component: AuthLayouts,
    children: [
      {
        path: "/auth/signin",
        Component: Signin,
      },
      {
        path: "/auth/signup",
        Component: Signup,
      },
      {
        path: "/auth/forgetPassword",
        Component: ForgetPassword,
      },
    ],
  },
  {
    path: "/*",
    Component: ErrorPage,
  },
]);
