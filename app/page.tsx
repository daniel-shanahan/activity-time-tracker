"use client";

import { auth, logOut, logIn } from "@/src/firebase/auth";
import { User, onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from "react";

export default function Home() {
  const [user, setUser] = useState<User | null>(null);

  // Listen to the Firebase Auth state and set the local state.
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {user ? (
        <>
          Signed in as: {user?.email}
          <button onClick={logOut}>Log Out</button>
        </>
      ) : (
        <button
          onClick={logIn}
          className="bg-blue-500 text-white px-5 py-2 rounded-full shadow-lg hover:bg-blue-700"
        >
          Log In
        </button>
      )}
    </main>
  );
}
