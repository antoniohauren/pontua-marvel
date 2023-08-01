import {
  ForgotPasswordPage,
  ForgotPasswordPageSuccess,
  LoginPage,
} from "@/pages";
import HomeDashBoardPage from "@/pages/home-dashboard";
import { ProfilePage } from "@/pages/profile";
import ProtectPage from "@/pages/protected";
import SelectAgentPage from "@/pages/select-agent";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        index: true,
        element: (
          <ProtectPage>
            <HomeDashBoardPage />
          </ProtectPage>
        ),
      },
      {
        path: "profile/:id",
        element: (
          <ProtectPage>
            <ProfilePage />
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
      {
        path: "select-agent",
        element: <SelectAgentPage />,
      },
    ],
  },
  {
    path: "login",
    element: <LoginPage />,
  },
]);

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
