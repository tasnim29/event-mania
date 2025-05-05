import React, { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthContext";

const MyProfile = () => {
  const { user, updateUserProfile, setUser } = useContext(AuthContext);

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    const updatedName = e.target.name.value;
    const updatedPhotoURL = e.target.photoURL.value;
    // console.log(email, photoURL);

    updateUserProfile({ displayName: updatedName, photoURL: updatedPhotoURL })
      .then(() => {
        setUser({
          ...user,
          displayName: updatedName,
          photoURL: updatedPhotoURL,
        });
      })
      .catch((error) => {
        console.log(error);
        setUser(user);
      });
  };
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 space-y-10  lg:mt-24 mt-16  w-11/12 mx-auto">
      {/* left div */}
      <div className="bg-gray-800 max-w-md w-full mx-auto p-6 shadow-2xl rounded-xl flex flex-col items-center text-center ">
        <img
          src={user.photoURL}
          alt=""
          className="w-32 h-32 mx-auto rounded-full  "
        />
        <div className="space-y-4 text-center divide-y ">
          <div className="my-2 space-y-1">
            <h2 className="text-xl font-semibold sm:text-2xl text-white">
              {user.displayName}
            </h2>
            <p className="px-5 text-xs sm:text-base text-white">{user.email}</p>
          </div>
        </div>
      </div>
      {/* right div */}
      <div className="bg-gray-800 max-w-md w-full mx-auto p-6 shadow-2xl rounded-xl mb-10">
        <form onSubmit={handleUpdateProfile} className="fieldset space-y-2">
          <label className="label text-white" htmlFor="origin">
            Name
          </label>
          <input
            name="name"
            required
            type="text"
            id="name"
            className="input input-bordered w-full text-black"
            placeholder="Your Name"
          />

          {/* photo */}
          <label className="label text-white" htmlFor="destination">
            PhotoURL
          </label>
          <input
            name="photoURL"
            required
            type="text"
            id="photoURL"
            className="input input-bordered w-full text-black"
            placeholder="photoURL"
          />

          <button type="submit" className="btn btn-outline btn-secondary ">
            Update Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default MyProfile;
