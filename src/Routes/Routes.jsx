import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import MyProfile from "../Pages/MyProfile";
import Blog from "../Pages/Blog";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
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
    ],
  },
]);
