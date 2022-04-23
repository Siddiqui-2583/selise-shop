import React, { useState } from "react";
import  {firebase}  from "./firebaseConfig";

const GoogleAuth = () => {
  const [user, setUser] = useState({
    isSignedIn: false,
    name: "",
    email: "",
    photo: "",
  });
  // firebase.initializeApp(firebaseConfig);
  //Authentication using google
  
  const handleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((res) => {
        const { displayName, email, photoURL } = res.user;
        const signedInUser = {
          isSignedIn: true,
          name: displayName,
          email: email,
          photo: photoURL,
        };
        setUser(signedInUser);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleSignOut = () => {
    firebase
      .auth()
      .signOut()
      .then((res) => {
        const signedOutUser = {
          isSignedIn: false,
          name: "",
          email: "",
          photo: "",
        };
        setUser(signedOutUser);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      {user.isSignedIn ? (
        <button onClick={handleSignOut}>Log Out</button>
      ) : (
        <button onClick={handleSignIn}>Log In</button>
      )}
      <br />
      {user.isSignedIn && (
        <div>
          <img src={user.photo} alt="" />
          <p>Welcome, {user.name}!</p>
          {/* <p>Your email: {user.email}</p> */}
        </div>
      )}
    </div>
  );
};

export default GoogleAuth;
