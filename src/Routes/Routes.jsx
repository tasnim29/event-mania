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
        Component: MyProfile,
      },
      {
        path: "/blog",
        Component: Blog,
      },
      {
        path: "/eventDetails/:name",
        hydrateFallbackElement: <Loader></Loader>,
        loader: () => fetch("/events.json"),
        Component: EventDetails,
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
    ],
  },
]);
