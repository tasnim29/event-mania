import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../AuthProvider/AuthContext";
import logo from "../../assets/logo.avif";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        Swal.fire({
          title: "Sign Out Successful!",
          icon: "success",
          draggable: true,
        });
      })
      .catch((error) => {
        alert(" failed", error);
      });
  };
  const links = (
    <>
      <li className="font-semibold text-xl text-primary">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="font-semibold text-xl text-primary">
        <NavLink to="/profile">My profile</NavLink>
      </li>
      <li className="font-semibold text-xl text-primary">
        <NavLink to="/blog">Blog</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-gray-800 shadow-sm px-4 lg:px-20">
      {/* Navbar Start */}
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <div className="flex items-center gap-2">
          <img className="w-10 h-10" src={logo} alt="Logo" />
          <span className="text-white font-bold text-xl">Event Mania</span>
        </div>
      </div>

      {/* Navbar Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-3 text-white">
          {links}
        </ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end gap-3">
        {user && (
          <div className="relative group">
            <img
              className="w-8 h-8 rounded-full border-2 border-white cursor-pointer"
              src={user.photoURL}
              alt="User"
            />
            <div className=" absolute right-4  -bottom-10 text-white text-xs bg-black bg-opacity-75 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition z-10">
              {user.displayName}
            </div>
          </div>
        )}
        {user ? (
          <button
            onClick={handleSignOut}
            className="btn btn-sm btn-outline text-white border-white hover:bg-white hover:text-gray-800"
          >
            Sign Out
          </button>
        ) : (
          <Link
            to="/auth/signin"
            className="btn btn-sm btn-outline text-white border-white hover:bg-white hover:text-gray-800"
          >
            Sign In
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
