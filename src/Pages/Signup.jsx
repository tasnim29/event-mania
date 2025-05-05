import React, { useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "../AuthProvider/AuthContext";

const Signup = () => {
  const { setUser, signUpUser, updateUserProfile } = useContext(AuthContext);
  const handleSignUp = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name, photo, email, password);

    // signUp
    signUpUser(email, password)
      .then((userCredential) => {
        const userInformation = userCredential.user;
        console.log(userInformation);
        updateUserProfile({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...userInformation, displayName: name, photoURL: photo });
          })
          .catch((error) => {
            console.log(error);
            setUser(userInformation);
          });
      })

      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  return (
    <div className="w-full max-w-md p-8 rounded-xl shadow-lg bg-gray-900 mx-auto mt-16">
      <div className="space-y-6">
        <h1 className="text-3xl text-white font-bold text-center">
          Create an Account
        </h1>

        <form onSubmit={handleSignUp} className="space-y-4">
          {/* Name */}
          <div className="space-y-1">
            <label className="block text-sm text-gray-300">Full Name</label>
            <input
              type="text"
              name="name"
              className="w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Your name"
              required
            />
          </div>

          {/* Photo URL */}
          <div className="space-y-1">
            <label className="block text-sm text-gray-300">Photo URL</label>
            <input
              type="text"
              name="photo"
              className="w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Photo URL"
            />
          </div>

          {/* Email */}
          <div className="space-y-1">
            <label className="block text-sm text-gray-300">Email</label>
            <input
              type="email"
              name="email"
              className="w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password */}
          <div className="space-y-1">
            <label className="block text-sm text-gray-300">Password</label>
            <input
              type="password"
              name="password"
              className="w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Choose a password"
              required
            />
          </div>
          <div className="my-6">
            <button
              aria-label="Login with Google"
              type="button"
              className="btn btn-outline btn-secondary w-full"
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

          {/* Submit */}
          <button type="submit" className="btn btn-outline btn-primary w-full">
            Sign Up
          </button>

          {/* Login redirect */}
          <p className="text-center text-sm text-gray-400 mt-4">
            Already have an account?{" "}
            <Link to="/auth/signin" className="text-primary hover:underline">
              SIgn In
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
