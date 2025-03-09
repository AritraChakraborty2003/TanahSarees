// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { GoogleOAuthProvider } from "@react-oauth/google";
import "./index.css";
import axios from "axios";
import App from "./App.jsx";

axios.defaults.withCredentials = true;

const CLIENT_ID = `${import.meta.env.VITE_GOOGLE_CLIENT_ID}`;
console.log(`Client ID: ${CLIENT_ID}`);

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <GoogleOAuthProvider clientId={CLIENT_ID}>
    <App />
  </GoogleOAuthProvider>
  // </StrictMode>
);
