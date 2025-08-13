import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import router from "./Routes/Router.jsx";
import { RouterProvider } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <div className="bg-gray-950 min-h-screen text-white">
        <RouterProvider router={router} />
      </div>
    </QueryClientProvider>
  </StrictMode>
);
