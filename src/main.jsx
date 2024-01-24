
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLcWC7fYZPj225KG5qO1ya-cSw5UY1UHk",
  authDomain: "motoshop-7fdc5.firebaseapp.com",
  projectId: "motoshop-7fdc5",
  storageBucket: "motoshop-7fdc5.appspot.com",
  messagingSenderId: "425245515379",
  appId: "1:425245515379:web:566a471f57c271023e1406"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
    
      <App />
    
  </ChakraProvider>
)