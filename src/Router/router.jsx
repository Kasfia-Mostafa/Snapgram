import { createBrowserRouter } from "react-router-dom";
import { Home } from "../root/Pages/Index";
import SignInForm from "../_auth/Forms/signInForm";
import SignUpForm from "../_auth/Forms/signUpForm";
import AuthLayout from "../_auth/AuthLayout";
import RootLayout from "../root/RootLayout";

const router = createBrowserRouter([
  // public routes
  {
    path: "/",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "sign-in",
        element: <SignInForm></SignInForm>,
      },
      {
        path: "sign-up",
        element: <SignUpForm></SignUpForm>,
      },
    ],
  },

  //private routes
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
]);

export default router;
