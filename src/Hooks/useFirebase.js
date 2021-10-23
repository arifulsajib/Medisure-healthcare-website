import { getAuth, signInWithPopup, GithubAuthProvider, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const auth = getAuth();

  // Google sign in
  const signInWithGoogle = () => {
    setIsLoading(true);
    const googleProvider = new GoogleAuthProvider();

    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result.user);
        setError("");
        setSuccess("Login Success");
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  // Github sign in
  const signInWithGithub = () => {
    setIsLoading(true);
    const githubProvider = new GithubAuthProvider();

    signInWithPopup(auth, githubProvider)
      .then((result) => {
        setUser(result.user);
        setError("");
        setSuccess("Login Success");
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  // Process login with email and pass
  const processLogin = (email, password) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setUser(result.user);
        setError("");
        setSuccess("Login Success");
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  //  Create user with EmailPassword
  const createNewUser = (name, email, password) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        updateName(name);
        setSuccess("Login Success");
        user.reload();
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  //  update name in firebase
  const updateName = (name) => {
    setIsLoading(true);
    updateProfile(auth.currentUser, { displayName: name })
      .then(() => {
        console.log("Name Updated");
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  // observe user state change
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, [auth]);

  // Sign out
  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        setError("");
        setSuccess("");
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  return {
    user,
    error,
    success,
    isLoading,
    signInWithGoogle,
    signInWithGithub,
    createNewUser,
    processLogin,
    logOut
  };
};

export default useFirebase;
