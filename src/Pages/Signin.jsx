import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../AuthProvider/AuthContext";
import { toast, ToastContainer } from "react-toastify";

const Signin = () => {
  const { setUser, signInUser, googleSignInUser } = useContext(AuthContext);
  const location = useLocation();
  //   console.log(location);
  const navigation = useNavigate();
  const handleSignIn = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log(email, password);

    // sign in
    signInUser(email, password)
      .then((userCredential) => {
        const userInformation = userCredential.user;
        // console.log(userInformation);
        setUser(userInformation);
        toast.success("Successfully Signed in");
        setTimeout(
          () => navigation(`${location.state ? location.state : "/"}`),
          1500
        );
        // navigation(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        toast.error("Invalid password");
      });
  };

  const handleGoogleLogIn = () => {
    // google sign in
    googleSignInUser()
      .then((userCredential) => {
        const userInformation = userCredential.user;

        setUser(userInformation);
        toast.success("Successfully Signed in");
        setTimeout(
          () => navigation(`${location.state ? location.state : "/"}`),
          1500
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="w-full max-w-md p-8 rounded-xl shadow-lg bg-gray-900 mx-auto my-16 text-white">
      <h2 className="mb-3 text-3xl font-bold text-center">
        Login to your account
      </h2>
      <p className="text-sm text-center text-gray-400">
        Don't have an account?
        <Link
          to="/auth/signup"
          className="text-primary hover:underline font-medium"
        >
          Sign Up
        </Link>
      </p>

      {/* Google Login */}
      <div className="my-6">
        <button
          onClick={handleGoogleLogIn}
          aria-label="Login with Google"
          type="button"
          className="cursor-pointer flex items-center justify-center w-full p-3 space-x-3 border border-gray-600 rounded-md btn btn-outline btn-secondary"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            className="w-5 h-5 fill-current"
          >
            <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
          </svg>
          <span>Login with Google</span>
        </button>
      </div>

      {/* Divider */}
      <div className="flex items-center my-4">
        <hr className="flex-1 border-gray-600" />
        <span className="px-3 text-gray-400 text-sm">OR</span>
        <hr className="flex-1 border-gray-600" />
      </div>

      {/* Login Form */}
      <form onSubmit={handleSignIn} className="space-y-5">
        <div>
          <label htmlFor="email" className="block text-sm text-gray-300">
            Email address
          </label>
          <input
            type="email"
            name="email"
            className="w-full mt-1 px-4 py-2 rounded-md bg-gray-800 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="you@example.com"
            required
          />
        </div>

        <div>
          <div className="flex justify-between items-center mb-1">
            <label htmlFor="password" className="text-sm text-gray-300">
              Password
            </label>
            <a href="#" className="text-xs text-primary hover:underline">
              Forgot password?
            </a>
          </div>
          <input
            type="password"
            name="password"
            className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="********"
            required
          />
        </div>

        <button type="submit" className="btn btn-outline btn-primary w-full">
          Sign In
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Signin;
