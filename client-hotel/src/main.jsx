import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./router/Router.jsx";
import AuthProvider from "./components/authProvider/AuthProvider.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PhotoProvider } from "react-photo-view";
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <PhotoProvider>
          <RouterProvider router={router}></RouterProvider>
        </PhotoProvider>
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
