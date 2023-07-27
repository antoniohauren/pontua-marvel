import {
  ForgotPasswordPage,
  ForgotPasswordPageSuccess,
  LoginPage,
} from "@/pages";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        index: true,
        element: <LoginPage />,
      },
      {
        path: "forgot-password",
        children: [
          {
            index: true,
            element: <ForgotPasswordPage />,
          },
          {
            path: "success",
            element: <ForgotPasswordPageSuccess />,
          },
        ],
      },
    ],
  },
  {
    path: "login",
    element: <LoginPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
