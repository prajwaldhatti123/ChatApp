import React from "react";
import ReactDOM from "react-dom/client";
import { CssBaseline } from "@mui/material";
import { HelmetProvider } from "react-helmet-async";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./routes/App";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Landing from "./pages/Landing";
import ContextProvider from "./context/ContextApi";
import ProtectedRoute from "./components/auth/ProtectedRoute";

// const App = lazy(() => import("./routes/App"));
// const Home = lazy(() => import("./pages/Home"));
// const Login = lazy(() => import("./pages/Login"));
// const SignUp = lazy(() => import("./pages/SignUp"));
const user = true;
const router = createBrowserRouter([
  { path: "/", element: <Landing /> },
  {
    path: "/app",
    element: (
      <ContextProvider>
        <ProtectedRoute user={user} redirect="/login">
          <App />
        </ProtectedRoute>
      </ContextProvider>
    ),
  },
  { path: "/home", element: <Home /> },
  {
    path: "/login",
    element: (
      <ProtectedRoute user={!user} redirect="/login">
        <Login />
      </ProtectedRoute>
    ),
  },
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
