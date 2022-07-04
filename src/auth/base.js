import { initializeApp } from "firebase/app";
import {getAuth,createUserWithEmailAndPassword,onAuthStateChanged,signOut,signInWithEmailAndPassword}  from "firebase/auth";
import { useEffect, useState } from "react";
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
export function signup(email,password){
    return createUserWithEmailAndPassword(auth,email,password);
}
export function login(email,password){
  return signInWithEmailAndPassword(auth,email,password)
} 
export function logout(){
  return signOut(auth)
}

//Custom Hook to get info about user auth or not
export function useAuth(){
  const [currentUser,setCurrentUser] = useState();

  useEffect(()=>{
    onAuthStateChanged(auth,user => setCurrentUser(user));
  },[])
  return currentUser;
}