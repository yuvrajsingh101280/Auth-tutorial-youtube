import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, BrowserRouter } from "react-router-dom";
import Login from "./components/Login.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,

  },


]);

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      <App />
    </StrictMode>
  </BrowserRouter>
);
