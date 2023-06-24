import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBLxQbyL5birrAdF7teS0V6TGBYSPoWIXI",
  authDomain: "activity-time-tracker-4695a.firebaseapp.com",
  projectId: "activity-time-tracker-4695a",
  storageBucket: "activity-time-tracker-4695a.appspot.com",
  messagingSenderId: "33241672128",
  appId: "1:33241672128:web:76630350c7fddb3e0a8025",
  measurementId: "G-KQC5V8HPQM",
};

const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp;
