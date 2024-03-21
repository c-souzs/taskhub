import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "../ui/layouts/Auth";
import Signup from "../pages/Auth/Signup";
import Login from "../pages/Auth/Login";
import { AuthProvider } from "../contexts/Auth";
import AppLayout from "../ui/layouts/App";
import Tasks from "../pages/Tasks";
import Tags from "../pages/Tags";

const router = createBrowserRouter(
  [
    {
      element: <AuthProvider />,
      children: [
        {
          path: "auth",
          element: <AuthLayout />,
          children: [
            {
              path: "login",
              element: <Login />
            },
            {
              path: "signup",
              element: <Signup />
            }
          ]
        },
        {
          path: "app",
          element: <AppLayout />,
          children: [
            {
              path: "my-tasks",
              element: <Tasks />
            },
            {
              path: "my-tags",
              element: <Tags />
            }
          ]
        },
      ]
    },
  ],
  {
    basename: "/taskhub/"
  }
);

export default router;