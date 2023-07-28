import HomeDashBoardLayout from "@/layouts/home";
import {
  ForgotPasswordPage,
  ForgotPasswordPageSuccess,
  LoginPage,
} from "@/pages";
import ProtectPage from "@/pages/protected";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        index: true,
        element: (
          <ProtectPage>
            <HomeDashBoardLayout />
          </ProtectPage>
        ),
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
