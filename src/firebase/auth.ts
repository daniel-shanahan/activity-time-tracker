import firebaseApp from "./config";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";

export const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();

export async function logIn() {
  let result = null,
    error = null;
  try {
    result = await signInWithPopup(auth, provider);
  } catch (e) {
    error = e;
    console.log(error);
  }
  return { result, error };
}

export async function logOut() {
  let result = null,
    error = null;
  try {
    result = await signOut(auth);
  } catch (e) {
    error = e;
    console.log(error);
  }
  return { result, error };
}
