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
      <li className="font-semibold text-xl text-white">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="font-semibold text-xl text-white">
        <NavLink to="/profile">My profile</NavLink>
      </li>
      <li className="font-semibold text-xl text-white">
        <NavLink to="/blog">Blog</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-secondary shadow-sm px-20 ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <div className="flex gap-3">
          <img className="w-10 h-10" src={logo} alt="" />
          <a className="text-2xl font-bold ml-2 text-white">Event Mania</a>
        </div>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal space-x-4">{links}</ul>
      </div>

      <div className="navbar-end space-x-2">
        <div className="relative group cursor-pointer">
          {user && (
            <img
              className="w-8 h-8 rounded-full hover:"
              src={user.photoURL}
              alt=""
            />
          )}
          <div className="absolute text-white font-semibold -top-0.5 -left-17   opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            {user?.displayName}
          </div>
        </div>
        {user ? (
          <button onClick={handleSignOut} className="btn btn-sm mr-2">
            Sign Out
          </button>
        ) : (
          <Link to="/auth/signin" className="btn btn-sm mr-2">
            Sign In
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
