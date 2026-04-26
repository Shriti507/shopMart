console.log("Main.jsx entry point loaded");
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthProvider";


window.onerror = (msg, url, lineNo, columnNo, error) => {
  console.error("Global JS Error:", { msg, url, lineNo, columnNo, error });
  return false;
};

window.onunhandledrejection = (event) => {
  console.error("Unhandled Promise Rejection:", event.reason);
};

console.log("React initialization started...");
const container = document.getElementById("root");
if (!container) {
  console.error("Critical: 'root' element not found in DOM!");
} else {
  console.log("'root' element found, mounting React...");
  createRoot(container).render(
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>,
  );
  console.log("React render call completed.");
}

