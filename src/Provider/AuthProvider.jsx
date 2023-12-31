import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import axios from "axios";
import { app } from "../Firebase/firebase.config";


export const AuthContext=createContext(null);

const auth = getAuth(app);

const AuthProvider = ({children}) => {
  const [user,setUser]=useState(null);
  const [loading,setLoading]=useState(true);

  const googleProvider= new GoogleAuthProvider();

  const createUser=(email,password)=>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth,email,password);
  }

  const signIn=(email,password)=>{
    setLoading(true);
    return signInWithEmailAndPassword(auth,email,password);
  }

  const googleSignIn=()=>{
    setLoading(true);
    return signInWithPopup(auth,googleProvider);
  }

  const logOut=()=>{
    setLoading(true);
    return signOut(auth);
  }

  const updateUserProfile=(name,photo)=>{
    return updateProfile(auth.currentUser,{displayName:name,photoURL:photo});
  }

  const deleteUser=()=>{
    return user.delete();
  }

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,currentUser=>{
      
      console.log('current User', currentUser);

      if(currentUser){
        axios.post('https://summer-camp-school-server-xi-blond.vercel.app/jwt',{email:currentUser.email})
        .then(data=>{
          localStorage.setItem('access-token', data.data.token)
          setUser(currentUser);
          setLoading(false);
        })
      }
      else{
        localStorage.removeItem('access-token')
        setUser(currentUser);
        setLoading(false);
      }
    });

    return ()=>{
      return unsubscribe();
    }
  },[])

  const authInfo={
    user,
    loading,
    createUser,
    signIn,
    logOut,
    updateUserProfile,
    googleSignIn,
    deleteUser
  }

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;