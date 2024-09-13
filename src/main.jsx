import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import AuthProvider from "./providers/AuthProvider.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import OpenProfileProvider from "./providers/OpenProfileProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <OpenProfileProvider>
        <App />
      </OpenProfileProvider>
    </AuthProvider>
    <ToastContainer />
  </StrictMode>
);
