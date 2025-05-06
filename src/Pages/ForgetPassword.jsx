import React, { useContext } from "react";

import { AuthContext } from "../AuthProvider/AuthContext";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import { toast, ToastContainer } from "react-toastify";

const ForgetPassword = () => {
  const { email } = useContext(AuthContext);
  //   console.log(email);

  const handleForgetPassword = (e) => {
    e.preventDefault();
    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.success("An email is sent ");
      })
      .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        toast.error(errorMessage);
      });
  };

  return (
    <div>
      <div className="bg-gray-800 max-w-md w-full mx-auto p-6 shadow-2xl rounded-xl mb-10">
        <form onSubmit={handleForgetPassword} className="fieldset space-y-2">
          <label className="label text-white" htmlFor="origin">
            Email
          </label>
          <input
            name="email"
            value={email}
            required
            type="email"
            id="name"
            className="input input-bordered w-full text-black"
            placeholder="Your Email"
            readOnly
          />

          <button type="submit" className="btn btn-outline btn-secondary ">
            Reset password
          </button>
        </form>
      </div>

      <ToastContainer />
    </div>
  );
};

export default ForgetPassword;
