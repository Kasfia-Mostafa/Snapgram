import { createBrowserRouter } from "react-router-dom";
import { Home } from "../root/Pages/Home";
import SignInForm from "../_auth/Forms/signInForm";
import SignUpForm from "../_auth/Forms/signUpForm";

const router = createBrowserRouter([
  //public routes
  {
    path: "/sign-in",
    element: <SignInForm></SignInForm>,
  },
  {
    path: "/sign-up",
    element: <SignUpForm></SignUpForm>,
  },

  //private routes
  {
    path: "/",
    element: <Home></Home>,
  },
]);

export default router;
