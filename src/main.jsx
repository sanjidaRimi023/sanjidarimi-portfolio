import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import router from "./Routes/Router.jsx";
import { RouterProvider } from "react-router";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="bg-gray-800 min-h-screen text-white">
       <RouterProvider router={router} />
   </div>
  </StrictMode>
);
