import React from "react";
import { getAuth } from "firebase/auth";

const GetAuthComponent = () => {
  const auth = getAuth();

  return (
    <div>
      {auth.currentUser ? (
        <p>User is signed in: {auth.currentUser.email}</p>
      ) : (
        <p>User is not signed in</p>
      )}
    </div>
  );
};

export default GetAuth;
