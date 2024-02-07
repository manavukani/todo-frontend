import React, { useContext } from "react";
import { Context } from "../main";
import Loader from "../components/Loader";

const Profile = () => {
  const { isAuthenticated, loading, user } = useContext(Context);

  return loading ? (
    <Loader />
  ) : isAuthenticated ? (
    <div className="profile" >
      <h2>Profile</h2>
      <div className="user-info" >
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
      </div>
    </div>
  ) : (
    <div className="login-message" >
      <p>You need to login to view this page</p>
    </div>
  );
};

export default Profile;
