import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.tsx";
import { CssBaseline } from "@mui/material";
import { HelmetProvider } from "react-helmet-async";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./routes/App";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

// const App = lazy(() => import("./routes/App"));
// const Home = lazy(() => import("./pages/Home"));
// const Login = lazy(() => import("./pages/Login"));
// const SignUp = lazy(() => import("./pages/SignUp"));

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/home", element: <Home /> },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <SignUp /> },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HelmetProvider>
      <CssBaseline>
        <RouterProvider router={router}></RouterProvider>
      </CssBaseline>
    </HelmetProvider>
  </React.StrictMode>
);
