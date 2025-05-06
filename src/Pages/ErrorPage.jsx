import React from "react";

import errorImage from "../assets/error.png";
import { Link } from "react-router";
import { Helmet } from "react-helmet-async";

const ErrorPage = () => {
  //   const [load, setLoad] = useState(true);
  //   setTimeout(() => {
  //     setLoad(false);
  //   }, 250);
  //   if (load) return <Loader></Loader>;
  return (
    <div>
      <div className="text-center space-y-5 py-6 bg-white rounded-xl">
        <Helmet>
          <title>EventMania | error</title>
        </Helmet>
        <img className="mx-auto" src={errorImage} alt="" />
        <h1 className="font-bold text-3xl">Sorry,We Cant Find This Page </h1>
        <p className="text-gray-500">
          Oops!!The page you are trying to navigate does not exist
        </p>
        <Link to="/">
          <button className="py-3 px-8 cursor-pointer hover:scale-105 bg-primary text-white ">
            Go to home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
